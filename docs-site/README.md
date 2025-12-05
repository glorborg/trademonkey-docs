# Trading Journal Documentation

This is the Docusaurus documentation project for the Trading Journal. This Repl serves as your documentation workspace where you can hand over markdown files, and they'll be placed in the correct folders ready for GitHub push.

## Folder Structure

```
docs/
├── 01-getting-started/
│   ├── overview.md
│   ├── create-trading-account.md
│   ├── import-trades.md
│   ├── manual-trade-entry.md
│   ├── reflections.md
│   └── execution-recap-basics.md
│
├── 02-core-workflows/
│   ├── rules-vs-reality.md
│   ├── rules-helper-ai.md
│   ├── psychology-tracking.md
│   ├── threads.md
│   ├── trade-recap.md
│   └── settings.md
│
├── 03-advanced-insights/
│   ├── time-scoped-analytics.md
│   ├── ai-diagnostics.md
│   ├── ai-deep-dive-explorer.md
│   ├── rules-vs-reality-dashboard.md
│   ├── execution-patterns.md
│   ├── calendar-news-events.md
│   └── tags-management.md
│
├── 04-reference/
│   ├── billing-subscription.md
│   ├── ai-usage-limits.md
│   ├── data-import-export.md
│   └── security.md
│
└── 05-internal/
    ├── troubleshooting.md
    ├── glossary.md
    └── faq.md
```

## Image Directory

Place screenshots and images in:
```
static/img/
```

Reference them in markdown like:
```markdown
![Execution Recap Example](/img/execution-recap-example.png)
```

## How to Use This Project

1. **Hand over markdown content** - Provide your markdown files and I'll place them in the correct folders
2. **Upload images** - Provide screenshots and I'll add them to static/img/
3. **Push to GitHub** - When ready, we'll commit and push changes to your GitHub repository

## Local Development

```bash
cd docs-site
npm start
```

This starts the development server at http://localhost:3000

## Build

```bash
npm run build
```

This generates static content into the `build` directory.

## Sidebar Categories

1. **Getting Started** - Onboarding and basics
2. **Core Workflows** - Day-to-day features
3. **Advanced Insight Engines** - Analytics and AI features
4. **Reference** - Billing, limits, and security
5. **Internal Docs** - Team-only documentation
