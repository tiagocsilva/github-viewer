<template>
  <div id="app">
    <navbar />
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view style="margin-top: 60px; margin-bottom: 30px" />
    </transition>
    <app-footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  components: {
    Navbar,
    AppFooter,
  },
};
</script>


<style lang="scss">
#app {
  font-family: "Roboto";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $secondary;
  background-color: $primary-light;
  min-height: calc(100vh - 70px);
}
</style>
