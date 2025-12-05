# Trading Journal Documentation Project

## Overview
This is the documentation workspace for the Trading Journal application. Built with Docusaurus 3.x, this project serves as a perpetual build environment where documentation files are handed over, organized, and pushed to GitHub.

## Project Structure
```
docs-site/
├── docs/                    # All documentation pages
│   ├── 01-getting-started/  # Onboarding and basics (6 pages)
│   ├── 02-core-workflows/   # Day-to-day features (6 pages)
│   ├── 03-advanced-insights/# Analytics and AI features (7 pages)
│   ├── 04-reference/        # Billing, limits, security (4 pages)
│   └── 05-internal/         # Team-only docs (3 pages)
├── static/img/              # Screenshots and images
├── sidebars.ts              # Navigation configuration
├── docusaurus.config.ts     # Site configuration
└── package.json             # Dependencies
```

## Workflow
1. **Receive markdown files** - User provides documentation content
2. **Place in correct folder** - Files go to appropriate category folder
3. **Verify format** - Ensure frontmatter and markdown are valid
4. **Push to GitHub** - Commit and push changes to repository

## Documentation Categories
- **1. Getting Started** - Onboarding and basics
- **2. Core Workflows** - Day-to-day features
- **3. Advanced Insight Engines** - Analytics and AI features
- **4. Reference** - Billing, limits, and security
- **5. Internal Docs** - Team-only documentation

## Image Handling
Screenshots go in: `docs-site/static/img/`
Reference in markdown: `![Alt text](/img/filename.png)`

## Recent Changes
- December 5, 2025: Initial project setup with full folder structure and sidebar configuration

## GitHub Integration
Connected via Replit GitHub integration for pushing documentation updates.
