import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/docs',
  title: "Gowok",
  description: "Golang Premwok",
  head: [['link', { rel: 'icon', href: '/docs/favicon.ico' }]],
  themeConfig: {
    search: {
      provider: 'local',
    },
    outline: {
      level: 'deep',
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/overview', activeMatch: '/guide/' },
      { text: 'Reference', link: 'https://pkg.go.dev/github.com/gowok/gowok' }
    ],

    sidebar: {
      '/guide/': [
        {
          // text: 'Examples',
          base: '/guide/',
          items: [
            { text: 'Overview', link: 'overview' },
            { text: 'Getting Started', link: 'getting-started' },
            { text: 'Configuration', link: 'configuration' },
            // { text: 'Project', link: 'project' },
            { text: 'Runner', link: 'runner' },
            { text: 'Some (Nil Safety)', link: 'some' },
            { text: 'Singleton', link: 'singleton' },
            { text: 'SQL', link: 'sql' },
            { text: 'Web', link: 'web' },
            { text: 'GRPC', link: 'grpc' }
          ]
        },
        {
          text: 'Tutorial',
          base: '/guide/tutorial/',
          collapsed: false,
          items: [
            { text: 'Project Setup', link: 'project-setup' },
          ]
        },
        { text: 'Config & API Reference', link: 'https://pkg.go.dev/github.com/gowok/gowok' },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gowok/gowok' }
    ],

    editLink: {
      pattern: 'https://github.com/gowok/docs/edit/master/:path',
      text: 'Edit this page on GitHub',
    },

    footer: {
      copyright: 'Copyright © 2025',
      message: 'Released under the MIT License.',
    }
  }
})
