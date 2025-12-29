import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'TradeMonkey Docs - Behavior Dashcam for Traders',
  tagline: 'Your execution mirror for trading',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.trademonkey.app',
  baseUrl: '/',
  trailingSlash: false,

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
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          filename: 'sitemap.xml',
        },
        gtag: {
          trackingID: 'G-G3WCZWNCCY',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/trademonkey-social-card.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    metadata: [
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'og:type', content: 'website'},
      {name: 'og:site_name', content: 'TradeMonkey Docs'},
    ],
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
          href: 'https://app.trademonkey.app',
          label: 'TradeMonkey App',
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
          ],
        },
        {
          title: 'Support',
          items: [
            {
              label: 'Contact Support',
              href: 'mailto:hello@trademonkey.app',
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
