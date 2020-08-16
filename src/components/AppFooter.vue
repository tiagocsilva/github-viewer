<template>
  <div class="app-footer p-2 position-fixed pl-3">

    Fonte das Informações:

    <font-awesome-icon
      :icon="['fab', 'github']"
      class="title-icon mr-1"
    />

    <a
      target="_blank"
      href="http://github.com/"
    >http://github.com/</a>
  </div>
</template>

<style lang="scss" scoped>
.app-footer {
  background: $primary;
  color: $secondary;
  bottom: 0px;
  left: 0px;
  width: 100%;
  border-top: solid 1px $primary-light;
  text-align: left;
  font-size: 12px;
}
</style>