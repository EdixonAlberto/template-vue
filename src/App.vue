<template>
  <div id="app">
    <app-header />
    <router-view class="app-container" />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@components/header';
import AppFooter from '@components/footer';

export default {
  name: 'App',

  components: {
    AppHeader,
    AppFooter
  }
};
</script>

<style lang="scss">
.app-container {
  margin-top: $height-navbar;
}
</style>
