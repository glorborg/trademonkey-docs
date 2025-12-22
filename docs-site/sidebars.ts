import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: '1. Getting Started',
      collapsible: false,
      items: [
        'getting-started/overview',
        'getting-started/create-trading-account',
        'getting-started/import-trades',
        'getting-started/manual-trade-entry',
        'getting-started/reflections',
        'getting-started/behavioral-recap-basics',
      ],
    },
    {
      type: 'category',
      label: '2. Core Workflows',
      collapsible: false,
      items: [
        'core-workflows/rules-vs-reality',
        'core-workflows/rules-helper-ai',
        'core-workflows/drift-detection',
        'core-workflows/threads',
        'core-workflows/behavioral-recap',
        'core-workflows/settings',
      ],
    },
    {
      type: 'category',
      label: '3. Advanced Insight Engines',
      collapsible: false,
      items: [
        'advanced-insights/time-scoped-analytics',
        'advanced-insights/ai-diagnostics',
        'advanced-insights/ai-deep-dive-explorer',
        'advanced-insights/rules-vs-reality-dashboard',
        'advanced-insights/behavior-patterns',
        'advanced-insights/calendar-news-events',
        'advanced-insights/tags-management',
      ],
    },
    {
      type: 'category',
      label: '4. Reference',
      collapsible: false,
      items: [
        'reference/billing-subscription',
        'reference/ai-usage-limits',
        'reference/data-import-export',
        'reference/security',
      ],
    },
  ],
};

export default sidebars;
