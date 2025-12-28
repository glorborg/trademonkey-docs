# TradeMonkey SEO Implementation Specifications

**Version:** 1.0  
**Date:** December 23, 2025  
**Implementation Target:** Next 24-48 hours  

## Executive Summary

This document provides complete, deterministic specifications for implementing SEO across TradeMonkey's infrastructure:

- **Landing Page:** Vite + React (hosted on Vercel)
- **Documentation:** Docusaurus (hosted at docs.trademonkey.app)
- **Future Blog:** Docusaurus (same subdomain)

This is NOT traditional SEO optimization. This is **category creation SEO** designed for:
- Building semantic authority around proprietary terminology
- E-E-A-T compliance for trading psychology content
- Generative AI optimization (GEO)
- Long-term authority compound without ongoing maintenance

---

## Core Implementation Philosophy

### Non-Negotiable Principles

1. **Deterministic Structure:** Every rule must be enforceable programmatically
2. **Freeze Landing Page:** Once implemented, landing page becomes static semantic anchor
3. **Living Docs:** Documentation site expands meaning through structured content
4. **No Keyword Stuffing:** Use natural language with intentional lexicon integration
5. **Build-Time Enforcement:** SEO compliance blocks builds/deploys

### Success Metrics
- Semantic coherence across surfaces
- Clean canonical structure
- Compliance with all validators
- Zero ongoing maintenance for landing page

---

## SECTION A: SHARED SEO RULES CONTRACT

Create identical files in both repositories to prevent implementation drift:

### File 1: `seo-rules.md` (Human Readable)

```markdown
# TradeMonkey SEO Rules (Shared Contract)

## Meta Requirements
- Title length: 55-60 characters (hard fail if outside range)
- Description length: 140-160 characters (hard fail if outside range)
- Canonical URL required on all pages
- OG/Twitter cards required on all pages

## Content Structure
- Exactly one H1 per page (hard fail for 0 or 2+)
- Logical H2/H3 hierarchy
- First 100 words must clearly answer "what is this page about"

## Image Requirements
- File names must be descriptive-kebab-case
- Alt text required on all images (hard fail if missing)
- Max file size: 800KB (hard fail), 250KB warning
- Preferred formats: WebP, PNG, JPG

## Internal Linking
- Every doc must link to: 1 other doc + 1 landing section
- Every blog must link to: 1 doc + 1 landing section
- Landing page must link to key docs and future blog

## Lexicon Integration
- Proprietary terms must be used consistently
- Bridge terms connect lexicon to search demand
- Never dilute category positioning for keyword density
```

### File 2: `seo.schema.json` (Machine Readable)

```json
{
  "metaTitleMinLength": 55,
  "metaTitleMaxLength": 60,
  "metaDescriptionMinLength": 140,
  "metaDescriptionMaxLength": 160,
  "maxH1Count": 1,
  "imageMaxSizeBytes": 838860,
  "imageWarnSizeBytes": 262144,
  "allowedImageFormats": [".webp", ".png", ".jpg", ".jpeg"],
  "requiredMetaTags": [
    "title",
    "description", 
    "og:title",
    "og:description",
    "og:url",
    "og:image",
    "twitter:card",
    "twitter:title",
    "twitter:description",
    "twitter:image"
  ],
  "primaryKeywords": {
    "landing": "behavioral trading journal",
    "category": ["trading psychology journal", "execution-based trading journal", "trading behavior tracking"]
  },
  "lexiconTerms": [
    "execution drift",
    "behavioral state", 
    "rules vs reality",
    "behavior dashcam",
    "behavioral recap",
    "plan adherence",
    "execution record"
  ]
}
```

---

## SECTION B: VITE LANDING PAGE SPECIFICATIONS

**Repository:** `trademonkey-landing-page`  
**Working Directory:** `client/`  
**Domain:** `https://trademonkey.app`  
**Status:** Static anchor (no ongoing changes after implementation)

### Implementation Tasks

#### Task 1: Site Configuration
**File:** `client/src/seo/site.ts`
```typescript
export const SITE_CONFIG = {
  url: "https://trademonkey.app",
  defaultOgImage: "/og/trademonkey-og.png",
  siteName: "TradeMonkey",
  twitterHandle: "@trademonkey" // if applicable
} as const;
```

#### Task 2: Route-Level SEO Config
**File:** `client/src/seo/pages.ts`
```typescript
interface SeoConfig {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  jsonLd?: object;
}

export const PAGE_SEO: Record<string, SeoConfig> = {
  "/": {
    title: "TradeMonkey - Behavioral Trading Journal for Execution & Discipline",
    description: "A behavioral trading journal that records execution decisions, exposes behavioral drift, and helps traders close the gap between plan and reality.",
    canonical: "https://trademonkey.app/",
    primaryKeyword: "behavioral trading journal",
    secondaryKeywords: [
      "trading psychology journal",
      "execution-based trading journal", 
      "trading behavior tracking",
      "trading execution analytics"
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "TradeMonkey",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "url": "https://trademonkey.app",
      "description": "Behavioral trading journal that captures execution decisions and exposes behavioral patterns"
    }
  }
  // Add other routes as they exist (privacy, terms, etc.)
};
```

#### Task 3: SEO Component
**File:** `client/src/seo/SEO.tsx`
```typescript
import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG } from './site';

interface SEOProps {
  config: SeoConfig;
}

export function SEO({ config }: SEOProps) {
  return (
    <Helmet>
      <title>{config.title}</title>
      <meta name="description" content={config.description} />
      <link rel="canonical" href={config.canonical} />
      
      {/* OpenGraph */}
      <meta property="og:title" content={config.ogTitle || config.title} />
      <meta property="og:description" content={config.ogDescription || config.description} />
      <meta property="og:url" content={config.canonical} />
      <meta property="og:image" content={config.ogImage || SITE_CONFIG.defaultOgImage} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={config.ogTitle || config.title} />
      <meta name="twitter:description" content={config.ogDescription || config.description} />
      <meta name="twitter:image" content={config.ogImage || SITE_CONFIG.defaultOgImage} />
      
      {/* JSON-LD */}
      {config.jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(config.jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
```

#### Task 4: React Helmet Provider
**File:** `client/src/main.tsx`
```typescript
// Add import
import { HelmetProvider } from 'react-helmet-async';

// Wrap App component
<HelmetProvider>
  <App />
</HelmetProvider>
```

#### Task 5: Validation Scripts

**File:** `client/scripts/seo-check.js`
```javascript
const fs = require('fs');
const path = require('path');
const { PAGE_SEO } = require('../src/seo/pages.ts');

function validateSEOConfig() {
  const errors = [];
  
  Object.entries(PAGE_SEO).forEach(([route, config]) => {
    // Title length check
    if (config.title.length < 55 || config.title.length > 60) {
      errors.push(`${route}: Title length ${config.title.length} outside 55-60 range`);
    }
    
    // Description length check  
    if (config.description.length < 140 || config.description.length > 160) {
      errors.push(`${route}: Description length ${config.description.length} outside 140-160 range`);
    }
    
    // Canonical check
    if (!config.canonical.startsWith('https://trademonkey.app')) {
      errors.push(`${route}: Invalid canonical URL`);
    }
    
    // Keywords check
    if (!config.primaryKeyword) {
      errors.push(`${route}: Missing primary keyword`);
    }
    
    if (!config.secondaryKeywords || config.secondaryKeywords.length < 2) {
      errors.push(`${route}: Must have at least 2 secondary keywords`);
    }
  });
  
  if (errors.length > 0) {
    console.error('SEO Validation Errors:');
    errors.forEach(error => console.error(`- ${error}`));
    process.exit(1);
  }
  
  console.log('✅ SEO validation passed');
}

validateSEOConfig();
```

**File:** `client/scripts/images-check.js`
```javascript
const fs = require('fs');
const path = require('path');
const glob = require('glob');

function checkImages() {
  const errors = [];
  const warnings = [];
  
  // Check image files in public directory
  const imageFiles = glob.sync('client/public/**/*.{png,jpg,jpeg,webp,svg}');
  
  imageFiles.forEach(file => {
    const stats = fs.statSync(file);
    const filename = path.basename(file);
    
    // Check kebab-case naming
    if (!/^[a-z0-9-]+\.[a-z]+$/.test(filename)) {
      errors.push(`${file}: Filename must be kebab-case`);
    }
    
    // Check file size
    if (stats.size > 838860) { // 800KB
      errors.push(`${file}: File size ${stats.size} exceeds 800KB limit`);
    } else if (stats.size > 262144) { // 250KB
      warnings.push(`${file}: File size ${stats.size} exceeds 250KB (warning only)`);
    }
  });
  
  // Check JSX/TSX files for missing alt tags
  const jsxFiles = glob.sync('client/src/**/*.{jsx,tsx}');
  
  jsxFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const imgMatches = content.match(/<img[^>]*>/g);
    
    if (imgMatches) {
      imgMatches.forEach(imgTag => {
        if (!imgTag.includes('alt=') || imgTag.includes('alt=""') || imgTag.includes("alt=''")) {
          errors.push(`${file}: Image missing alt text: ${imgTag}`);
        }
      });
    }
  });
  
  if (warnings.length > 0) {
    console.warn('Image Warnings:');
    warnings.forEach(warning => console.warn(`- ${warning}`));
  }
  
  if (errors.length > 0) {
    console.error('Image Validation Errors:');
    errors.forEach(error => console.error(`- ${error}`));
    process.exit(1);
  }
  
  console.log('✅ Image validation passed');
}

checkImages();
```

**File:** `client/scripts/generate-sitemap.js`
```javascript
const fs = require('fs');
const { PAGE_SEO } = require('../src/seo/pages.ts');

function generateSitemap() {
  const urls = Object.keys(PAGE_SEO).map(route => {
    return `  <url>
    <loc>https://trademonkey.app${route === '/' ? '' : route}</loc>
    <changefreq>monthly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
  }).join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  fs.writeFileSync('client/public/sitemap.xml', sitemap);
  console.log('✅ Sitemap generated');
}

generateSitemap();
```

**File:** `client/scripts/generate-robots.js`
```javascript
const fs = require('fs');

const robots = `User-agent: *
Allow: /

Sitemap: https://trademonkey.app/sitemap.xml`;

fs.writeFileSync('client/public/robots.txt', robots);
console.log('✅ Robots.txt generated');
```

#### Task 6: Package.json Updates
**File:** `client/package.json` (add to scripts section)
```json
{
  "scripts": {
    "seo:check": "node scripts/seo-check.js",
    "images:check": "node scripts/images-check.js", 
    "sitemap:gen": "node scripts/generate-sitemap.js",
    "robots:gen": "node scripts/generate-robots.js",
    "prebuild": "npm run sitemap:gen && npm run robots:gen && npm run seo:check && npm run images:check"
  }
}
```

#### Task 7: Required Dependencies
```bash
cd client
npm install react-helmet-async glob
```

### Acceptance Criteria - Landing Page

✅ **Build Process:**
- `npm run build` fails if SEO validation fails
- Sitemap.xml and robots.txt generated automatically

✅ **SEO Structure:**
- Every route has complete meta tags
- JSON-LD present on homepage
- Canonical URLs properly set
- OG image exists and is referenced

✅ **Content Quality:**
- Single H1 per page
- Alt text on all images
- Image files follow naming conventions

---

## SECTION C: DOCUSAURUS DOCUMENTATION SPECIFICATIONS

**Repository:** `trademonkey-docs`  
**Working Directory:** `docs-site/`  
**Domain:** `https://docs.trademonkey.app`  
**Status:** Living system for semantic expansion

### Implementation Tasks

#### Task 1: Docusaurus Configuration
**File:** `docs-site/docusaurus.config.ts` (verify/update these settings)
```typescript
const config = {
  url: 'https://docs.trademonkey.app',
  baseUrl: '/',
  trailingSlash: false, // Pick one and be consistent
  
  plugins: [
    '@docusaurus/plugin-sitemap',
    // ... other plugins
  ],
  
  themeConfig: {
    metadata: [
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'og:type', content: 'website'},
    ],
    // ... rest of theme config
  }
};
```

#### Task 2: Frontmatter Schema Enforcement
**Required frontmatter for ALL .md/.mdx files in `docs-site/docs/`:**

```markdown
---
title: "Page Title (becomes H1 - do not use # in content)"
description: "Meta description 140-160 characters explaining what this page teaches"
slug: "/execution-drift" 
keywords: 
  - "primary keyword phrase"
  - "secondary keyword 1" 
  - "secondary keyword 2"
  - "lexicon term if applicable"
image: "/img/og/page-specific-og.png" # optional
sidebar_position: 1 # optional
---

Content starts here. NO # headings since title becomes H1.
Use ## for main sections, ### for subsections.
```

#### Task 3: Validation Scripts

**File:** `docs-site/scripts/seo-check.js`
```javascript
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const matter = require('gray-matter');

function validateDocs() {
  const errors = [];
  const docFiles = glob.sync('docs-site/docs/**/*.{md,mdx}');
  
  docFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const parsed = matter(content);
    const { data: frontmatter, content: body } = parsed;
    
    // Check required frontmatter
    if (!frontmatter.title) {
      errors.push(`${file}: Missing title in frontmatter`);
    }
    
    if (!frontmatter.description) {
      errors.push(`${file}: Missing description in frontmatter`);
    } else if (frontmatter.description.length < 140 || frontmatter.description.length > 160) {
      errors.push(`${file}: Description length ${frontmatter.description.length} outside 140-160 range`);
    }
    
    if (!frontmatter.slug) {
      errors.push(`${file}: Missing slug in frontmatter`);
    }
    
    if (!frontmatter.keywords || frontmatter.keywords.length < 2) {
      errors.push(`${file}: Must have at least 2 keywords in frontmatter`);
    }
    
    // Check for forbidden H1 in body (title becomes H1)
    if (body.includes('\n# ') || body.startsWith('# ')) {
      errors.push(`${file}: Contains # heading in body - use title in frontmatter instead`);
    }
    
    // Check images have alt text
    const imgMatches = body.match(/!\[[^\]]*\]\([^)]+\)/g);
    if (imgMatches) {
      imgMatches.forEach(img => {
        if (img.startsWith('![]') || img.includes('![](')) {
          errors.push(`${file}: Image missing alt text: ${img}`);
        }
      });
    }
    
    // Check internal linking requirements (Phase 1)
    const hasDocLink = /\[.*\]\(\/docs\/.*\)/.test(body) || /\[.*\]\([^)]*\.md.*\)/.test(body);
    const hasLandingLink = /\[.*\]\(https:\/\/trademonkey\.app\/#.*\)/.test(body);
    
    if (!hasDocLink) {
      errors.push(`${file}: Missing link to another doc page`);
    }
    
    if (!hasLandingLink) {
      errors.push(`${file}: Missing link to landing page section (https://trademonkey.app/#...)`);
    }
  });
  
  if (errors.length > 0) {
    console.error('Documentation SEO Validation Errors:');
    errors.forEach(error => console.error(`- ${error}`));
    process.exit(1);
  }
  
  console.log('✅ Documentation SEO validation passed');
}

validateDocs();
```

**File:** `docs-site/scripts/images-check.js`
```javascript
const fs = require('fs');
const path = require('path');
const glob = require('glob');

function checkImages() {
  const errors = [];
  const warnings = [];
  
  // Check image files in static directory
  const imageFiles = glob.sync('docs-site/static/img/**/*.{png,jpg,jpeg,webp,svg}');
  
  imageFiles.forEach(file => {
    const stats = fs.statSync(file);
    const filename = path.basename(file);
    
    // Check kebab-case naming
    if (!/^[a-z0-9-]+\.[a-z]+$/.test(filename)) {
      errors.push(`${file}: Filename must be kebab-case`);
    }
    
    // Check file size
    if (stats.size > 838860) { // 800KB
      errors.push(`${file}: File size ${stats.size} exceeds 800KB limit`);
    } else if (stats.size > 262144) { // 250KB  
      warnings.push(`${file}: File size ${stats.size} exceeds 250KB (warning only)`);
    }
  });
  
  if (warnings.length > 0) {
    console.warn('Image Warnings:');
    warnings.forEach(warning => console.warn(`- ${warning}`));
  }
  
  if (errors.length > 0) {
    console.error('Image Validation Errors:');
    errors.forEach(error => console.error(`- ${error}`));
    process.exit(1);
  }
  
  console.log('✅ Documentation images validation passed');
}

checkImages();
```

#### Task 4: Package.json Updates
**File:** `docs-site/package.json` (add to scripts section)
```json
{
  "scripts": {
    "seo:check": "node scripts/seo-check.js",
    "images:check": "node scripts/images-check.js",
    "prebuild": "npm run seo:check && npm run images:check"
  }
}
```

#### Task 5: Required Dependencies
```bash
cd docs-site
npm install gray-matter glob
```

### Acceptance Criteria - Documentation

✅ **Build Process:**
- `npm run build` fails if any doc missing required frontmatter
- `npm run build` fails if images violate size/naming rules
- `npm run build` fails if internal linking requirements not met

✅ **Content Structure:**
- All docs have complete frontmatter
- No H1 tags in markdown body (title becomes H1)
- All images have descriptive alt text
- Clean URL structure (/docs/concept-name)

✅ **Internal Linking:**
- Every doc links to at least 1 other doc
- Every doc links to at least 1 landing page section
- Links are contextual, not arbitrary

---

## SECTION D: KEYWORD & LEXICON STRATEGY

### Primary Keywords by Surface

| Surface | Primary Keyword | Secondary Keywords |
|---------|----------------|-------------------|
| Landing Page | "behavioral trading journal" | trading psychology journal, execution-based trading journal, trading behavior tracking, trading execution analytics |
| Docs: Rules vs Reality | "why traders break their rules" | trading discipline failure, plan deviation trading, rule breaking psychology trading, execution drift |
| Docs: Behavior Dashcam | "trading behavior tracking" | execution tracking trading, trading decision capture, real-time trading psychology |
| Docs: Behavioral Recap | "trade execution analysis" | post-trade analysis psychology, trading behavior review, execution recap trading |
| Docs: Execution Patterns | "execution drift trading" | recurring trading mistakes, behavioral trading patterns, execution consistency analysis |

### Lexicon Integration Map

| Search Demand Term | TradeMonkey Lexicon Term | Usage Strategy |
|-------------------|-------------------------|----------------|
| trading discipline | plan adherence | Use lexicon in H2, demand in title |
| breaking rules | execution drift | Bridge terms in same paragraph |
| trading psychology | behavioral state | Lexicon as secondary keyword |
| trade review | behavioral recap | Direct semantic connection |
| trading mistakes | rules vs reality | Teach the relationship |

### Content Bridge Strategy

1. **Lead with demand terms** (what people search)
2. **Introduce lexicon terms** as more precise language
3. **Use both consistently** throughout content
4. **Never sacrifice clarity** for keyword density

Example pattern:
> "Many traders struggle with **trading discipline** and following their plans. TradeMonkey identifies this as **execution drift** - the gap between intended and actual trading behavior."

---

## SECTION E: ONGOING CONTENT STRATEGY

### Landing Page (Static)
**Rule:** No changes unless conversion fails or category shifts
- Frozen after implementation
- Becomes semantic anchor for entire domain
- Trust accumulates through stability

### Documentation (Living)
**Cadence:** Monthly additions, quarterly reviews
- Add 2-3 new docs per month based on support patterns
- Expand existing docs with behavioral examples
- Maintain strict frontmatter discipline
- Preserve lexicon consistency

### Future Blog
**Cadence:** Weekly repurposed content
- Substack content adapted for search
- Office hours insights formatted as blog posts
- Internal linking to docs and landing sections required

---

## SECTION F: MEASUREMENT & SUCCESS CRITERIA

### Week 1-2 Validation
- Google Search Console shows all pages indexed
- No canonical URL conflicts
- All validators passing in build process
- Internal link structure intact

### Month 1-2 Early Signals
- Query diversity increasing in GSC
- Longer, more specific search phrases appearing
- "Why do I..." and "How do I..." style queries emerging
- Docs traffic contributing to conversion paths

### Month 3-6 Lexicon Adoption
- TradeMonkey terms appearing in search queries
- Branded searches increasing
- AI summary inclusion (search for "execution drift trading")
- Internal referral traffic between surfaces

### Success Metrics (Not Traffic Volume)
1. **Query sophistication** - more behavioral psychology language
2. **Semantic coherence** - internal traffic flows logically
3. **Category ownership** - branded + lexicon query growth
4. **AI inclusion** - content appears in GPT/Bing summaries
5. **Conversion quality** - docs readers convert at higher rates

---

## SECTION G: IMPLEMENTATION CHECKLIST

### Pre-Implementation
- [ ] Both repos have `seo-rules.md` and `seo.schema.json` files
- [ ] Development environments ready for both repos
- [ ] Required dependencies documented

### Landing Page Implementation
- [ ] SEO configuration files created
- [ ] React Helmet provider added to main.tsx
- [ ] SEO component implemented
- [ ] Validation scripts created and working
- [ ] Scripts added to package.json
- [ ] OG image created and placed in public/og/
- [ ] Build process includes SEO validation

### Documentation Implementation  
- [ ] Docusaurus config updated for proper canonicals
- [ ] Frontmatter validation script working
- [ ] Image validation script working
- [ ] All existing docs updated with required frontmatter
- [ ] Build process includes validation
- [ ] Internal linking requirements satisfied

### Final Validation
- [ ] Both sites build successfully with all validators
- [ ] Sitemaps generated correctly
- [ ] Robots.txt files present
- [ ] Meta tags populated on all pages
- [ ] Images follow naming and size conventions
- [ ] Internal linking rules satisfied

---

## SECTION H: EMERGENCY PROCEDURES

### If Build Fails Due to SEO Validation
1. Check the specific error message in build output
2. Fix the failing file (don't bypass validation)
3. Re-run build to confirm fix
4. Never disable validators to "fix" quickly

### If Rankings Drop Initially
- Expected behavior during re-indexing
- Monitor for 2-3 weeks before concern
- Focus on query diversity, not rankings
- Do not make reactive changes to content

### If Lexicon Terms Don't Appear in Queries
- Expected for first 6-8 weeks
- Continue using terms consistently
- Do not abandon strategy for generic keywords
- Category creation requires patience

---

## SECTION I: MAINTENANCE SCHEDULE

### Never Touch
- Landing page copy or structure (unless conversion fails)
- Canonical URL patterns
- Core SEO validation rules

### Monthly Review
- Add 2-3 new documentation pages
- Review GSC query diversity
- Check for new support questions to address in docs

### Quarterly Review  
- Assess query sophistication trends
- Review internal traffic flows
- Consider lexicon expansion opportunities
- Update measurement dashboard

---

## FINAL NOTES FOR IMPLEMENTATION TEAM

1. **This is not traditional SEO** - do not apply conventional optimization tactics
2. **Structure over content** - focus on consistent implementation of rules
3. **Category creation timeline** - expect 3-6 months for meaningful lexicon adoption
4. **Never compromise on validation** - build failures prevent SEO debt
5. **Question any ongoing maintenance requests** - this system should run itself

The goal is semantic authority that compounds quietly over time, not traffic spikes or keyword ranking chases.

Implementation should be completed within 48 hours and then left to operate without interference.
