---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Gowok"
  text: "Golang Premwok"
  tagline: Everything your project needs
  image:
    src: /gowok-logo-docs.png
    alt: VitePress
  actions:
    - theme: brand
      text: Overview
      link: /guide/overview
    - theme: alt
      text: Getting Started
      link: /guide/getting-started

features:
  - title: Opinionated
    details: |
      Once installed, your project will be ready to start end-to-end.
  - title: Highly Configurable
    details: |
      Configuration-centric make Gowok more dynamic.
  - title: Full Control
    details: |
      Minimum un-expected magical behaviour, so you have power of control.
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/hadihammurabi.png',
    name: 'hadihammurabi',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/hadihammurabi' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/hadihammurabi' }
    ]
  },
  {
    avatar: 'https://www.github.com/ekokurniawann.png',
    name: 'ekokurniawann',
    title: 'Maintainer',
    links: [
      { icon: 'github', link: 'https://github.com/ekokurniawann' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/ekokurniawann' }
    ]
  },
  {
    avatar: 'https://www.github.com/born2ngopi.png',
    name: 'born2ngopi',
    title: 'Maintainer',
    links: [
      { icon: 'github', link: 'https://github.com/born2ngopi' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/born2ngopi' }
    ]
  },
]

const thanksTo = [
  {
    avatar: 'https://ugc.production.linktr.ee/pWa4BPYcRtmOyhbms4qr_SBV5BvIkJT2k174N?io=true&size=avatar-v3_0',
    name: 'yusril.muhtadi',
    title: 'for making our logo',
    links: [
      { icon: 'gmail', link: 'mailto:muhtadi.yusril@gmail.com' },
      { icon: 'instagram', link: 'https://instagram.com/yusril.muhtadi' }
    ]
  },
]
</script>

## Our Teams
<VPTeamMembers size="medium" :members="members" />

## Thanks To
<VPTeamMembers size="medium" :members="thanksTo" />
