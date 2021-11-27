// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Signature AR&E Documentation',
  tagline: 'Doing the work',
  url: 'https://are-docs.sigtheatre.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'cohnr-signature', // Usually your GitHub org/user name.
  projectName: 'are-docs', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/cohnr-signature/are-docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/cohnr-signature/are-docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        style: 'dark',
        logo: {
          alt: 'Signature Logo',
          src: 'img/logo-primary.svg',
        },
        items: [
          /* {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'}, */
          {
            href: 'https://github.com/cohnr-signature/are-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'AR&E Docs',
            items: [
              {
                label: 'Cultural Competency',
                to: '/docs/WSYWAT/cultural-competency',
              },
              {
                label: 'Working Conditions & Hiring Practices',
                to: '/docs/WSYWAT/working-conditions-hiring-practices',
              },
              {
                label: 'Artistic & Curatorial Practices',
                to: '/docs/WSYWAT/artistic-and-curatorial-practices',
              },
              {
                label: 'Transparency',
                to: '/docs/WSYWAT/transparency',
              },
              {
                label: 'Compensation',
                to: '/docs/WSYWAT/compensation',
              },
              {
                label: 'Accountability & Boards',
                to: '/docs/WSYWAT/accountability-and-boards',
              },
              {
                label: 'Funding & Resources',
                to: '/docs/WSYWAT/funding-and-resources',
              },
              {
                label: 'Commercial Theatre & Broadway',
                to: '/docs/WSYWAT/commercial-and-broadway',
              },
              {
                label: 'Unions',
                to: '/docs/WSYWAT/unions',
              },
              {
                label: 'Press',
                to: '/docs/WSYWAT/press',
              },
              {
                label: 'Academic & Professional Training Programs',
                to: '/docs/WSYWAT/academic-and-professional-training-programs',
              },
            ],
          },
          /* {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          }, */
        ],
        //copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
