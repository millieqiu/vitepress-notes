import DefaultTheme from 'vitepress/theme'
import { onMounted } from 'vue';
import mediumZoom from 'medium-zoom';
import Layout from './Layout.vue'


import './custom.css'

export default {
  ...DefaultTheme,
  Layout,
  setup() {
    onMounted(() => {
      mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' });
    });
  },
};