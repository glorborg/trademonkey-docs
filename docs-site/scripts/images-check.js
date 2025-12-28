const fs = require('fs');
const path = require('path');
const glob = require('glob');

function checkImages() {
  const errors = [];
  const warnings = [];
  
  const imageFiles = glob.sync('static/img/**/*.{png,jpg,jpeg,webp,svg}', { cwd: path.join(__dirname, '..') });
  
  imageFiles.forEach(file => {
    const fullPath = path.join(__dirname, '..', file);
    const stats = fs.statSync(fullPath);
    const filename = path.basename(file);
    
    if (!/^[a-z0-9-]+\.[a-z]+$/.test(filename)) {
      warnings.push(`${file}: Filename should be kebab-case (current: ${filename})`);
    }
    
    if (stats.size > 838860) {
      errors.push(`${file}: File size ${(stats.size / 1024).toFixed(0)}KB exceeds 800KB limit`);
    } else if (stats.size > 262144) {
      warnings.push(`${file}: File size ${(stats.size / 1024).toFixed(0)}KB exceeds 250KB recommendation`);
    }
  });
  
  if (warnings.length > 0) {
    console.warn('Image Warnings:');
    warnings.forEach(warning => console.warn(`  - ${warning}`));
  }
  
  if (errors.length > 0) {
    console.error('\nImage Validation Errors:');
    errors.forEach(error => console.error(`  - ${error}`));
    process.exit(1);
  }
  
  console.log(`\n✅ Documentation images validation passed (${imageFiles.length} files checked)`);
}

checkImages();
