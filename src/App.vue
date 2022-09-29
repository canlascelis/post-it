<template lang="pug">
NavBar
RouterView
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HomePage from './views/home/Home.vue';
import AboutPage from './views/about/AboutPage.vue';
import NavBar from './components/navbar/NavBar.vue';

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
    HomePage,
    AboutPage
  }
});
</script>