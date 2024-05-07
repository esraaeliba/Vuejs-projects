<template>
<navBar></navBar>
  <router-view></router-view>
</template>

<script>
  import navBar from "../src/components/navbar.vue";

export default {
  name: 'App',
  components: {
    navBar
  }
}
</script>

<style>

</style>
