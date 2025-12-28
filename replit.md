# Trading Journal Documentation Project

## Overview
This is the documentation workspace for the TradeMonkey application (trading journal focused on behavioral analysis using the "Behavior Dashcam" concept). Built with Docusaurus 3.x, this project serves as a perpetual build environment where documentation files are handed over, organized, and pushed to GitHub.

## Project Structure
```
docs-site/
├── docs/                        # All documentation pages
│   ├── lexicon/                 # Lexicon Hub - GEO-optimized concept definitions (7 pages)
│   ├── 01-getting-started/      # Onboarding and basics (6 pages)
│   ├── 02-core-workflows/       # Day-to-day features (6 pages)
│   ├── 03-advanced-insights/    # Analytics and AI features (7 pages)
│   ├── 04-reference/            # Billing, limits, security (4 pages)
│   └── 05-support-resources/    # Support, FAQ, glossary (6 pages)
├── static/img/                  # Screenshots and images
│   └── lexicon/                 # Lexicon diagrams (SEO-optimized names)
├── sidebars.ts                  # Navigation configuration
├── docusaurus.config.ts         # Site configuration
└── package.json                 # Dependencies
```

## Workflow
1. **Receive markdown files** - User provides documentation content
2. **Place in correct folder** - Files go to appropriate category folder
3. **Verify format** - Ensure frontmatter and markdown are valid
4. **Push to GitHub** - Commit and push changes to repository

## Documentation Categories
- **Lexicon** - GEO-optimized concept definitions (7 core terms)
- **1. Getting Started** - Onboarding and basics
- **2. Core Workflows** - Day-to-day features
- **3. Advanced Insight Engines** - Analytics and AI features
- **4. Reference** - Billing, limits, and security
- **5. Support & Resources** - Troubleshooting, FAQ, glossary, onboarding help

## Lexicon Hub (GEO-Optimized)
The lexicon section contains definitional articles for core trading psychology concepts:
- execution-drift.md
- behavioral-dashcam.md
- rules-vs-reality.md
- plan-adherence.md
- behavioral-state-before-trading.md
- execution-record.md
- reconciliation-loop.md

### Image Guidelines for Lexicon
- Format: PNG
- Size: ~1200×630 or 1200×800
- Style: flat, minimal, no text-heavy clutter
- No faces, no people photos
- File naming: `{concept}-diagram.png` (e.g., `execution-drift-diagram.png`)
- Alt text: Descriptive, includes lexicon term once, factual not promotional
- Placement: One image per article, right after the H1 heading

## Standardized Terminology
- **Emotional State** - Emotion labels at decision points
- **Conviction (1–10)** - Confidence rating
- **Plan Adherence** - Whether plan was followed (Yes/Partial/No)
- **Behavioral Record** - Evidence log of behavior
- **Behavioral Recap** - Single-trade condensed replay
- **Drift Detection** - Pattern detection across trades
- **Behavior Dashcam** - Core product concept

## Image Handling
Screenshots go in: `docs-site/static/img/`
Lexicon diagrams go in: `docs-site/static/img/lexicon/`
Reference in markdown: `![Alt text](/img/filename.png)`

## Recent Changes
- December 28, 2025: Added Lexicon Hub with 7 GEO-optimized concept articles and diagrams (Execution Drift, Behavioral Dashcam, Rules vs Reality, Plan Adherence, Behavioral State Before Trading, Execution Record, Reconciliation Loop)
- December 22, 2025: Added "5. Support & Resources" section with 6 new pages (Troubleshooting, Support & Bug Reporting, Open Office Hours, Guided Onboarding, Glossary, FAQ)
- December 22, 2025: Renamed files for consistency (execution-recap-basics → behavioral-recap-basics, psychology-tracking → drift-detection, trade-recap → behavioral-recap, execution-patterns → behavior-patterns)
- December 22, 2025: Updated Reference section docs (Billing, AI Usage, Import/Export, Security)
- December 5, 2025: Initial project setup with full folder structure and sidebar configuration

## GitHub Integration
Connected via Replit GitHub integration for pushing documentation updates.
Repository: https://github.com/glorborg/trademonkey-docs
