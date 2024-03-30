<script setup lang="ts">
import { useData } from 'vitepress'

const { frontmatter, title } = useData()
</script>

<template>
  <div v-if="frontmatter.comments !== false" :key="title" class="giscus">
    <component
      :is="'script'"
      src="https://giscus.app/client.js"
        data-repo="millieqiu/vitepress-notes"
        data-repo-id="R_kgDOLlKXGA"
        data-category="General"
        data-category-id="DIC_kwDOLlKXGM4CeVpc"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="dark_dimmed"
        data-lang="zh-TW"
        crossorigin="anonymous"
        async
    />
  </div>
</template>

<style scoped>
.giscus {
  margin-top: 2rem;
}
</style>