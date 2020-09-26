<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import { onAuth } from "@bcwdev/auth0-vue";
export default {
  name: "App",
  async beforeCreate() {
    await onAuth();
    if (this.$auth.isAuthenticated) {
      this.$store.dispatch("setBearer", this.$auth.bearer);
      this.$store.dispatch("getProfile");
    }
  },
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
@import "./assets/_variables.scss";
@import "bootstrap";
@import "./assets/_overrides.scss";
body {
  background-color: #595f60;
  background-image: linear-gradient(
    135deg,
    #3d3d3d 0%,
    #252525 24%,
    #0a0a0a 62%
  );
  min-height: 100vh;
}
</style>
