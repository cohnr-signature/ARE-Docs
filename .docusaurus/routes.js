
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','520'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post','6c7'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post','f06'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post','bee'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus','ddf'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook','ede'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','4c2'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola','752'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','bfa'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','86e'),
    routes: [
      {
        path: '/docs/WSYWAT/academic-and-professional-training-programs',
        component: ComponentCreator('/docs/WSYWAT/academic-and-professional-training-programs','82d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/WSYWAT/accountability-and-boards',
        component: ComponentCreator('/docs/WSYWAT/accountability-and-boards','3ae'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/WSYWAT/artistic-and-curatorial-practices',
        component: ComponentCreator('/docs/WSYWAT/artistic-and-curatorial-practices','060'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/WSYWAT/commercial-and-broadway',
        component: ComponentCreator('/docs/WSYWAT/commercial-and-broadway','a07'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/WSYWAT/compensation',
        component: ComponentCreator('/docs/WSYWAT/compensation','228'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/WSYWAT/cultural-competency',
        component: ComponentCreator('/docs/WSYWAT/cultural-competency','3db'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/WSYWAT/funding-and-resources',
        component: ComponentCreator('/docs/WSYWAT/funding-and-resources','02a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/WSYWAT/overview',
        component: ComponentCreator('/docs/WSYWAT/overview','853'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/WSYWAT/press',
        component: ComponentCreator('/docs/WSYWAT/press','9fd'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/WSYWAT/transparency',
        component: ComponentCreator('/docs/WSYWAT/transparency','995'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/WSYWAT/unions',
        component: ComponentCreator('/docs/WSYWAT/unions','78d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/WSYWAT/working-conditions-hiring-practices',
        component: ComponentCreator('/docs/WSYWAT/working-conditions-hiring-practices','f99'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
