<template>
  <b-navbar
    class="app-header p-2 d-flex justify-content-between align-items-center"
    fixed="top"
  >

    <h1
      class="ml-2 mb-0"
      @click="$router.push({ name: 'Inicio' })"
    >
      GitHub <b>Viewer</b>
    </h1>

    <img
      src="@/assets/img/icon.png"
      class="mr-3"
    />

  </b-navbar>
</template>

<style lang="scss" scoped>
.app-header {
  background: $primary;
  color: $primary-dark;
  font-family: "OratorStd";

  img {
    height: 50px;
    opacity: 0.6;
  }

  h1 {
    font-size: 1.8em;
    cursor: pointer;
  }
}
</style>