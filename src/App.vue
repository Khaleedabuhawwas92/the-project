<template lang="pug">
doctype html
<div id="app">
  <Navbar />
    <router-view />
</div>
</template>
<script>
import SideBar from "@/components/sideBar.vue";
import Navbar from "@/components/navBar.vue";
export default {
  name: "App",
  components: {
    SideBar,
    Navbar,
  },
};
</script>

<style scoped lang="scss">
</style>
