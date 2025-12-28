const fs = require('fs');
const path = require('path');
const glob = require('glob');
const matter = require('gray-matter');

function validateDocs() {
  const errors = [];
  const warnings = [];
  const docFiles = glob.sync('docs/**/*.{md,mdx}', { cwd: path.join(__dirname, '..') });
  
  docFiles.forEach(file => {
    const fullPath = path.join(__dirname, '..', file);
    const content = fs.readFileSync(fullPath, 'utf8');
    const parsed = matter(content);
    const { data: frontmatter, content: body } = parsed;
    
    if (!frontmatter.title) {
      errors.push(`${file}: Missing title in frontmatter`);
    }
    
    if (!frontmatter.description) {
      errors.push(`${file}: Missing description in frontmatter`);
    } else if (frontmatter.description.length < 140 || frontmatter.description.length > 160) {
      warnings.push(`${file}: Description length ${frontmatter.description.length} outside 140-160 range (current: "${frontmatter.description.substring(0, 50)}...")`);
    }
    
    if (!frontmatter.keywords || frontmatter.keywords.length < 2) {
      warnings.push(`${file}: Should have at least 2 keywords in frontmatter`);
    }
    
    const imgMatches = body.match(/!\[[^\]]*\]\([^)]+\)/g);
    if (imgMatches) {
      imgMatches.forEach(img => {
        if (img.startsWith('![]') || img.includes('![](')) {
          errors.push(`${file}: Image missing alt text: ${img}`);
        }
      });
    }
  });
  
  if (warnings.length > 0) {
    console.warn('SEO Warnings:');
    warnings.forEach(warning => console.warn(`  - ${warning}`));
  }
  
  if (errors.length > 0) {
    console.error('\nDocumentation SEO Validation Errors:');
    errors.forEach(error => console.error(`  - ${error}`));
    process.exit(1);
  }
  
  console.log(`\n✅ Documentation SEO validation passed (${docFiles.length} files checked)`);
}

validateDocs();
