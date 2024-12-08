import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Gowok",
  description: "Golang Premwok",
  themeConfig: {
    search: {
      provider: 'local',
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/overview', activeMatch: '/guide/' },
      { text: 'Reference', link: 'https://pkg.go.dev/github.com/gowok/gowok' }
    ],

    sidebar: {
      '/guide/' : [
        {
          // text: 'Examples',
          base: '/guide/',
          items: [
            { text: 'Overview', link: 'overview' },
            { text: 'Getting Started', link: 'getting-started' },
            { text: 'Configuration', link: 'configuration' },
            { text: 'Runner', link: 'runner' },
            { text: 'Optional (Nil Safety)', link: 'optional' },
          ]
        },
        {
          text: 'Application',
          base: '/guide/application/',
          collapsed: false,
          items: [
            { text: 'HTTP', link: 'http' },
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
      pattern: 'https://github.com/gowok/docs/edit/main/:path',
      text: 'Edit this page on GitHub',
    },

    footer: {
      copyright: 'Copyright © 2025',
      message: 'Released under the MIT License.',
    }
  }
})
