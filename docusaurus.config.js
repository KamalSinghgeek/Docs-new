// const { themes } = require('prism-react-renderer');

// const code_themes = {
//   light: themes.github,
//   dark: themes.dracula,
// };

// /** @type {import('@docusaurus/types').Config} */
// const meta = {
//   title: 'Fleet Stack Docs',
//   tagline:
//     'Explore comprehensive documentation for Dyte, including guides, references, and best practices.',
//   url: 'https://docs.fleetstackglobal.com',
//   baseUrl: '/',
//   favicon: 'favicon.png',
//   i18n: {
//     defaultLocale: 'en',
//     locales: ['en'],
//   },
// };

// /** @type {import('@docusaurus/plugin-content-docs').Options[]} */
// const docs = [
//   {
//     id: 'web-application',
//     path: 'docs/web-application',
//     routeBasePath: '/web-application',
//     versions: {
//       current: {
//         label: 'Lite',
//       },
//     },
//   },

//   {
//     id: 'android',
//     path: 'docs/Fleet-Stack-Pro',
//     routeBasePath: '/Fleet-Stack-Pro',
//     versions: {
//       current: {
//         label: 'Pro',
//       },
//     },
//   },

//   {
//     id: 'mobile-application',
//     path: 'docs/mobile-application',
//     routeBasePath: '/mobile-application',
//     versions: {
//       current: {
//         label: 'Lite',
//       },
//     },
//   },
// ];

// /** @type {import('@docusaurus/plugin-content-docs').Options} */
// const defaultSettings = {
//   breadcrumbs: true,
//   editUrl: 'https://github.com/dyte-io/docs/tree/main/',
//   showLastUpdateTime: true,
//   sidebarCollapsible: true,
//   remarkPlugins: [
//     [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
//   ],
//   sidebarPath: require.resolve('./sidebars-default.js'),
// };

// /**
//  * Create a section
//  * @param {import('@docusaurus/plugin-content-docs').Options} options
//  */
// function create_doc_plugin({
//   sidebarPath = require.resolve('./sidebars-default.js'),
//   ...options
// }) {
//   return [
//     '@docusaurus/plugin-content-docs',
//     /** @type {import('@docusaurus/plugin-content-docs').Options} */
//     ({
//       ...defaultSettings,
//       sidebarPath,
//       ...options,
//     }),
//   ];
// }

// const { webpackPlugin } = require('./plugins/webpack-plugin.cjs');
// const tailwindPlugin = require('./plugins/tailwind-plugin.cjs');
// const docs_plugins = docs.map((doc) => create_doc_plugin(doc));

// const plugins = [
//   tailwindPlugin,
//   ...docs_plugins,
//   webpackPlugin,
//   [
//     '@docusaurus/plugin-client-redirects',
//     {
//       createRedirects(path) {
//         if (path.startsWith('/guides/capabilities/chat/export-chat-dump')) {
//           return ['/capabilities/export-chat-dump'];
//         }

//         if (path.startsWith('/guides/capabilities/misc/embed')) {
//           return ['/guides/capabilities/embed'];
//         }

//         if (path.startsWith('/web-application/basics/integrate')) {
//           return ['/web-application/basics/components-basics'];
//         }

//         if (
//           path.startsWith(
//             '/guides/capabilities/misc/livestreaming-other-platforms'
//           )
//         ) {
//           return ['/guides', '/guides'];
//         }

//         if (
//           path.startsWith('/guides/capabilities/video/add-virtual-background')
//         ) {
//           return [
//             '/guides/capabilities/middleware/add-virtual-background',
//             '/guides/capabilities/customization/add-virtual-background',
//           ];
//         }

//         if (path.startsWith('/guides/live-video/concepts')) {
//           return ['/guides/live-video/concepts-live-video'];
//         }

//         if (path.startsWith('/guides/voice-conf/concepts')) {
//           return ['/guides/voice-conf/concepts-voice-conf'];
//         }

//         if (path.startsWith('/guides/livestream/concepts')) {
//           return ['/guides/livestream/concepts-ils'];
//         }

//         if (path.startsWith(''))
//           if (path.startsWith('/')) {
//             return [path.replace('/', '/')];
//           }
//         if (path.startsWith('/rn-core/livestreaming')) {
//           return [
//             path.replace(
//               '/rn-core/livestreaming',
//               '/rn-core/livestreaming/livestream-apis'
//             ),
//           ];
//         }
//         if (path.startsWith('/react-web-core/livestreaming')) {
//           return [
//             path.replace(
//               '/react-web-core/livestreaming',
//               '/react-web-core/livestreaming/livestream-apis'
//             ),
//           ];
//         }
//         if (path.startsWith('/')) {
//           return [path.replace('/', '/')];
//         }
//         if (path.startsWith('/rn-core/stage')) {
//           return [
//             path.replace(
//               '/rn-core/stage',
//               '/rn-core/livestreaming/state-management-apis'
//             ),
//           ];
//         }
//         if (path.startsWith('/react-web-core/stage')) {
//           return [
//             path.replace(
//               '/react-web-core/stage',
//               '/react-web-core/livestreaming/state-management-apis'
//             ),
//           ];
//         }
//         if (path.startsWith('/guides/capabilities/webhooks')) {
//           return [
//             path.replace('/guides/capabilities/webhooks', '/guides/webhooks'),
//             path.replace(
//               '/guides/capabilities/webhooks',
//               '/guides/features/webhooks'
//             ),
//           ];
//         }
//         if (path.startsWith('/guides/capabilities/recording')) {
//           return [
//             path.replace('/guides/capabilities/recording', '/guides/recording'),
//             path.replace(
//               '/guides/capabilities/recording',
//               '/guides/features/recording'
//             ),
//           ];
//         }
//         if (path.startsWith('/guides/capabilities/recording')) {
//           return [
//             path.replace('/guides/capabilities/recording', '/guides/recording'),
//             path.replace(
//               '/guides/capabilities/recording',
//               '/guides/features/recording'
//             ),
//           ];
//         }
//         if (path.startsWith('/guides/capabilities/embed')) {
//           return [
//             path.replace('/guides/capabilities/embed', '/guides/embed'),
//             path.replace(
//               '/guides/capabilities/embed',
//               '/guides/features/embed'
//             ),
//           ];
//         }
//         if (path.startsWith('/guides/capabilities/export-chat-dump')) {
//           return [
//             path.replace(
//               '/guides/capabilities/export-chat-dump',
//               '/guides/export-chat-dump'
//             ),
//             path.replace(
//               '/guides/capabilities/export-chat-dump',
//               '/guides/features/export-chat-dump'
//             ),
//           ];
//         }
//         if (path.startsWith('/guides/capabilities/breakoutroom')) {
//           return [
//             path.replace(
//               '/guides/capabilities/breakoutroom',
//               '/guides/breakoutroom'
//             ),
//             path.replace(
//               '/guides/capabilities/breakoutroom',
//               '/guides/features/breakoutroom'
//             ),
//           ];
//         }
    
//         return undefined; 
//       },
//     },
//   ],
// ];

// const fs = require('fs');
// const sdksHTML = fs.readFileSync('./src/snippets/sdks.html', 'utf-8');
// const resourcesHTML = fs.readFileSync('./src/snippets/resources.html', 'utf-8');

// /** @type {import('@docusaurus/types').Config} */
// const config = {
//   ...meta,
//   plugins,

//   trailingSlash: false,
//   themes: ['@docusaurus/theme-live-codeblock', '@docusaurus/theme-mermaid'],
//   clientModules: [require.resolve('./src/client/define-ui-kit.js')],
//   scripts: [{ src: 'https://cdn.statuspage.io/se-v2.js', async: true }],
//   markdown: {
//     mermaid: true,
//   },
//   presets: [
//     [
//       '@docusaurus/preset-classic',
//       /** @type {import('@docusaurus/preset-classic').Options} */
//       ({
//         docs: {
//           path: 'docs/guides',
//           id: 'guides',
//           routeBasePath: '/guides',
//           ...defaultSettings,
//         },
//         blog: false,
//         theme: {
//           customCss: [
//             require.resolve('./src/css/custom.css'),
//             require.resolve('./src/css/api-reference.css'),
//           ],
//         },
//         sitemap: {
//           ignorePatterns: ['**/tags/**', '/api/*'],
//         },
//         googleTagManager: {
//           containerId: 'GTM-5FDFFSS',
//         },
//       }),
//     ],
//   ],

//   themeConfig:
//     /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
//     ({
//       image: '/img/dyte-docs-card.png',
//       colorMode: {
//         defaultMode: 'light',
//       },
//       docs: {
//         sidebar: {
//           autoCollapseCategories: true,
//           hideable: true,
//         },
//       },
//       navbar: {
//         logo: {
//           href: '/',
//           src: '/logo/logo.png',
//           srcDark: '/logo/dark-logo.png',
//           alt: 'Fleet Stack Documentation',
//           height: '60px',
//           width: '230px',
//         },
//         items: [
//           {
//             label: 'Guides',
//             to: 'guides',
//             className: 'guides-top-header',
//           },
//           {
//             label: 'Software',
//             type: 'dropdown',
//             className: 'dyte-dropdown',
//             items: [
//               {
//                 type: 'html',
//                 value: sdksHTML,
//                 className: 'dyte-dropdown',
//               },
//             ],
//           },
//           {
//             label: 'REST API',
//             to: 'https://app.fleetstack.in/swagger/index.html',
//           },
//           {
//             label: 'Resources',
//             type: 'dropdown',
//             className: 'dyte-dropdown resources-dropdown',
//             items: [
//               {
//                 type: 'html',
//                 value: resourcesHTML,
//                 className: 'dyte-dropdown',
//               },
//             ],
//           },

//           {
//             label: 'Support',
//             to: 'https://fleetstackglobal.com/support',
//           },
//           {
//             label: 'Book a demo with expert',
//             href: 'https://fleetstackglobal.com/contact',
//             position: 'right',
//             className: 'navbar-book-demo',
//           },
//         ],
//       },
//       footer: {
//         logo: {
//           href: '/',
//           src: '/logo/logo.png',
//           srcDark: '/logo/logo.png',
//           alt: 'Fleet Stack Documentation',
//           height: '36px',
//         },
//         links: [
//           {
//             title: 'Product',
//             items: [
//               {
//                 label: 'Demo',
//                 href: 'https://app.dyte.io',
//               },
//               {
//                 label: 'Developer Portal',
//                 href: 'https://dev.dyte.io',
//               },
//               {
//                 label: 'Pricing',
//                 href: 'https://dyte.io/#pricing',
//               },
//             ],
//           },
//           {
//             title: 'Company',
//             items: [
//               {
//                 label: 'About Us',
//                 href: 'https://dyte.io',
//               },
//               {
//                 label: 'Join Us',
//                 href: 'https://dyte.freshteam.com/jobs',
//               },
//               {
//                 label: 'Privacy Policy',
//                 href: 'https://dyte.io/privacy-policy',
//               },
//               {
//                 label: 'Contact Us',
//                 href: 'https://dyte.io/contact',
//               },
//             ],
//           },
//           {
//             title: 'Resources',
//             items: [
//               {
//                 label: 'Documentation',
//                 href: '/',
//               },
//               {
//                 label: 'Blog',
//                 href: 'https://dyte.io/blog',
//               },
//               {
//                 label: 'Community',
//                 href: 'https://community.dyte.io',
//               },
//             ],
//           },
//         ],
//         copyright: 'Copyright © Dyte since 2023. All rights reserved.',
//       },
//       prism: {
//         theme: code_themes.light,
//         darkTheme: code_themes.dark,
//         additionalLanguages: [
//           'dart',
//           'ruby',
//           'groovy',
//           'kotlin',
//           'java',
//           'swift',
//           'objectivec',
//           'json',
//           'bash',
//         ],
//         magicComments: [
//           {
//             className: 'theme-code-block-highlighted-line',
//             line: 'highlight-next-line',
//             block: { start: 'highlight-start', end: 'highlight-end' },
//           },
//           {
//             className: 'code-block-error-line',
//             line: 'highlight-next-line-error',
//           },
//         ],
//       },
//       algolia: {
//         appId: 'HL0HSV62RK',
//         apiKey: '72ebf02146698733b7114c7b36da0945',
//         indexName: 'docs',
//         contextualSearch: true,
//         searchParameters: {},
//       },
//     }),

//   webpack: {
//     jsLoader: (isServer) => ({
//       loader: require.resolve('swc-loader'),
//       options: {
//         jsc: {
//           parser: {
//             syntax: 'typescript',
//             tsx: true,
//           },
//           target: 'es2017',
//         },
//         module: {
//           type: isServer ? 'commonjs' : 'es6',
//         },
//       },
//     }),
//   },
// };

// module.exports = config;

const { themes } = require('prism-react-renderer');

const code_themes = {
  light: themes.github,
  dark: themes.dracula,
};

/** @type {import('@docusaurus/types').Config} */
const meta = {
  title: 'Fleet Stack Docs',
  tagline:
    'Explore comprehensive documentation for Dyte, including guides, references, and best practices.',
  url: 'https://docs.fleetstackglobal.com',
  baseUrl: '/',
  favicon: 'favicon.png',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
};

/** @type {import('@docusaurus/plugin-content-docs').Options[]} */
const docs = [
  {
    id: 'web-application',
    path: 'docs/web-application',
    routeBasePath: '/web-application',
    versions: {
      current: {
        label: 'Lite',
      },
    },
  },

  {
    id: 'android',
    path: 'docs/Fleet-Stack-Pro',
    routeBasePath: '/Fleet-Stack-Pro',
    versions: {
      current: {
        label: 'Pro',
      },
    },
  },

  {
    id: 'mobile-application',
    path: 'docs/mobile-application',
    routeBasePath: '/mobile-application',
    versions: {
      current: {
        label: 'Lite',
      },
    },
  },
];

/** @type {import('@docusaurus/plugin-content-docs').Options} */
const defaultSettings = {
  breadcrumbs: true,
  editUrl: 'https://github.com/dyte-io/docs/tree/main/',
  showLastUpdateTime: true,
  sidebarCollapsible: true,
  remarkPlugins: [
    [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
  ],
  sidebarPath: require.resolve('./sidebars-default.js'),
};

/**
 * Create a section
 * @param {import('@docusaurus/plugin-content-docs').Options} options
 */
function create_doc_plugin({
  sidebarPath = require.resolve('./sidebars-default.js'),
  ...options
}) {
  return [
    '@docusaurus/plugin-content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      ...defaultSettings,
      sidebarPath,
      ...options,
    }),
  ];
}

const { webpackPlugin } = require('./plugins/webpack-plugin.cjs');
const tailwindPlugin = require('./plugins/tailwind-plugin.cjs');
const docs_plugins = docs.map((doc) => create_doc_plugin(doc));

const plugins = [
  tailwindPlugin,
  ...docs_plugins,
  webpackPlugin,
];

const fs = require('fs');
const sdksHTML = fs.readFileSync('./src/snippets/sdks.html', 'utf-8');
const resourcesHTML = fs.readFileSync('./src/snippets/resources.html', 'utf-8');

/** @type {import('@docusaurus/types').Config} */
const config = {
  ...meta,
  plugins,

  trailingSlash: false,
  themes: ['@docusaurus/theme-live-codeblock', '@docusaurus/theme-mermaid'],
  clientModules: [require.resolve('./src/client/define-ui-kit.js')],
  scripts: [{ src: 'https://cdn.statuspage.io/se-v2.js', async: true }],
  markdown: {
    mermaid: true,
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs/guides',
          id: 'guides',
          routeBasePath: '/guides',
          ...defaultSettings,
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/api-reference.css'),
          ],
        },
        sitemap: {
          ignorePatterns: ['**/tags/**', '/api/*'],
        },
        googleTagManager: {
          containerId: 'GTM-5FDFFSS',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: '/img/dyte-docs-card.png',
      colorMode: {
        defaultMode: 'light',
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true,
        },
      },
      navbar: {
        logo: {
          href: '/',
          src: '/logo/logo.png',
          srcDark: '/logo/dark-logo.png',
          alt: 'Fleet Stack Documentation',
          height: '60px',
          width: '230px',
        },
        items: [
          {
            label: 'Guides',
            to: 'guides',
            className: 'guides-top-header',
          },
          {
            label: 'Software',
            type: 'dropdown',
            className: 'dyte-dropdown',
            items: [
              {
                type: 'html',
                value: sdksHTML,
                className: 'dyte-dropdown',
              },
            ],
          },
          {
            label: 'REST API',
            to: 'https://app.fleetstack.in/swagger/index.html',
          },
          {
            label: 'Resources',
            type: 'dropdown',
            className: 'dyte-dropdown resources-dropdown',
            items: [
              {
                type: 'html',
                value: resourcesHTML,
                className: 'dyte-dropdown',
              },
            ],
          },
          {
            label: 'Support',
            to: 'https://fleetstackglobal.com/support',
          },
          {
            label: 'Book a demo with expert',
            href: 'https://fleetstackglobal.com/contact',
            position: 'right',
            className: 'navbar-book-demo',
          },
        ],
      },
      footer: {
        logo: {
          href: '/',
          src: '/logo/logo.png',
          srcDark: '/logo/logo.png',
          alt: 'Fleet Stack Documentation',
          height: '36px',
        },
        links: [
          {
            title: 'Product',
            items: [
              {
                label: 'Demo',
                href: 'https://app.dyte.io',
              },
              {
                label: 'Developer Portal',
                href: 'https://dev.dyte.io',
              },
              {
                label: 'Pricing',
                href: 'https://dyte.io/#pricing',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'About Us',
                href: 'https://dyte.io',
              },
              {
                label: 'Join Us',
                href: 'https://dyte.freshteam.com/jobs',
              },
              {
                label: 'Privacy Policy',
                href: 'https://dyte.io/privacy-policy',
              },
              {
                label: 'Contact Us',
                href: 'https://dyte.io/contact',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Documentation',
                href: '/',
              },
              {
                label: 'Blog',
                href: 'https://dyte.io/blog',
              },
              {
                label: 'Community',
                href: 'https://community.dyte.io',
              },
            ],
          },
        ],
        copyright: 'Copyright © Dyte since 2023. All rights reserved.',
      },
      prism: {
        theme: code_themes.light,
        darkTheme: code_themes.dark,
        additionalLanguages: [
          'dart',
          'ruby',
          'groovy',
          'kotlin',
          'java',
          'swift',
          'objectivec',
          'json',
          'bash',
        ],
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
          {
            className: 'code-block-error-line',
            line: 'highlight-next-line-error',
          },
        ],
      },
      algolia: {
        appId: 'HL0HSV62RK',
        apiKey: '72ebf02146698733b7114c7b36da0945',
        indexName: 'docs',
        contextualSearch: true,
        searchParameters: {},
      },
    }),

  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('swc-loader'),
      options: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          target: 'es2017',
        },
        module: {
          type: isServer ? 'commonjs' : 'es6',
        },
      },
    }),
  },
};

module.exports = config;
