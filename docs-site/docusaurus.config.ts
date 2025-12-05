import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'TradeMonkey Documentation',
  tagline: 'Your execution mirror for trading',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'glorborg',
  projectName: 'trademonkey-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'TradeMonkey Docs',
      logo: {
        alt: 'TradeMonkey Logo',
        src: 'img/trademonkey-logo.jpg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/glorborg/trademonkey-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/',
            },
            {
              label: 'Core Workflows',
              to: '/core-workflows/rules-vs-reality',
            },
            {
              label: 'Advanced Insight Engines',
              to: '/advanced-insights/time-scoped-analytics',
            },
            {
              label: 'Reference',
              to: '/reference/billing-subscription',
            },
          ],
        },
        {
          title: 'Application',
          items: [
            {
              label: 'Open TradeMonkey',
              href: 'https://app.trademonkey.app/login',
            },
            {
              label: "What's New",
              href: '#',
            },
            {
              label: 'System Status',
              href: '#',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/glorborg/trademonkey-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TradeMonkey. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
