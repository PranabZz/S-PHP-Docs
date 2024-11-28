import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "S-PHP Documentation",
  description: "PHP lightweight framework",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started/installation' },
      { text: 'GitHub', link: 'https://github.com/PranabZz/S-PHP' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is S-PHP?', link: '/introduction/what-is-sphp' },
          { text: 'Key Features', link: '/introduction/features' },
          { text: 'Directory Structure', link: '/introduction/directory-structure' }
        ]
      },
      {
        text: 'Getting Started',
        items: [
          { text: 'Installation', link: '/getting-started/installation' },
          { text: 'Configuration', link: '/getting-started/configuration' },
        ]
      },
      {
        text: 'Core Concepts',
        items: [
          { text: 'Routing', link: '/core-concepts/routing' },
          { text: 'Controllers', link: '/core-concepts/controllers' },
        ]
      },
      {
        text: 'Database',
        items: [
          { text: 'Database Connection', link: '/database/connection' },
          { text: 'CRUD Operations', link: '/database/crud' }
        ]
      },
      {
        text: 'Utilities',
        items: [
          { text: 'Helper Functions', link: '/utilities/helper-functions' },
        ]
      },
      {
        text: 'Advanced Topics',
        items: [
          { text: 'Custom Middleware', link: '/advanced/custom-middleware' },
        ]
      },
      {
        text: 'Contribution',
        items: [
          { text: 'Contribution', link: '/contribution' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/PranabZz/S-PHP' }
    ]
  }
})
