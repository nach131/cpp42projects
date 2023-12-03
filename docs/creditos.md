---
editLink: false
head:
  - - meta
    - name: og:description
      content: Créditos del proyecto
  - - meta
    - name: og:title
      content: Creditos - Doofy's Projects
---
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/53992512?v=4',
    name: 'Nacho Mota',
    title: 'Fundador del proyecto',
    links: [
       { icon: 'github', link: 'https://github.com/nach131' },
      { icon: 'youtube', link: 'https://www.youtube.com/enunpimpam.com' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/33827060?v=4',
    name: 'Valerio Duchi',
    title: 'Desarrollador',
    links: [
      { icon: 'github', link: 'https://github.com/edward6374' },
    ]
  }
]
</script>

# Creditos

<VPTeamMembers size="small" :members="members" />

<!-- https://api.github.com/users/nach131 -->