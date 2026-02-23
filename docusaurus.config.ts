import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '바이브 코딩 베이직',
  tagline: 'AI와 함께 첫 번째 앱을 만들어보세요',
  favicon: 'img/favicon.ico',

  future: { v4: true },

  url: 'https://restnfeel.github.io',
  baseUrl: '/vibe_coding_basic/',
  organizationName: 'restnfeel',
  projectName: 'vibe_coding_basic',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/restnfeel/vibe_coding_basic/edit/master/',
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
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: '바이브 코딩 베이직',
      logo: {
        alt: 'Vibe Coding Basic',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '가이드',
        },
        {
          href: 'https://github.com/restnfeel/vibe_coding_basic',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://restnfeel.github.io/vibe_coding_effiency/',
          label: '⚡ 효율화 가이드',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '가이드',
          items: [
            { label: '시작하기', to: '/intro' },
            { label: '바이브 코딩이란?', to: '/what-is-vibe' },
            { label: '첫 프로젝트', to: '/first-project' },
          ],
        },
        {
          title: '시리즈',
          items: [
            { label: '⚡ 효율화 가이드 (중급)', href: 'https://restnfeel.github.io/vibe_coding_effiency/' },
            { label: '디지로그랩스', href: 'https://digiloglabs.com' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 디지로그랩스 주식회사. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'python', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
