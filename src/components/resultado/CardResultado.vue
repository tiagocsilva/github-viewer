<template>
  <div
    class="result"
    ref="result"
    @click="redirect"
  >

    <div class="result-title">
      <font-awesome-icon
        :icon="['fas', 'code-branch']"
        class="title-icon"
      />
      {{result.name.toLowerCase()}}
    </div>

    <hr class="separator-title">

    <div class="result-description">
      {{result.description || "..."}}
    </div>

    <hr class="separator-footer">
    <div class="result-footer">

      <div>
        <a :href="result.owner.html_url">
          <img :src="result.owner.avatar_url">
        </a>
        &nbsp;
        <a :href="result.owner.html_url">
          {{result.owner.login}}
        </a>
      </div>

      <div>
        <b-badge
          pill
          variant="primary"
          class="bg-secondary"
          style="font-weight: normal"
        >{{result.language}}</b-badge>
      </div>

    </div>

  </div>
</template>

<script>
import gsap, { mapRange } from "gsap";

export default {
  props: ["result"],
  methods: {
    redirect() {
      location.href = this.result.html_url;
    },
  },
  mounted() {
    gsap.to(this.$refs.result, {
      opacity: 1,
      duration: Math.random(),
    });
  },
};
</script>

<style lang="scss" scoped>
.result {
  width: 30%;
  margin: 10px;
  min-width: 300px;
  padding: 10px;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  opacity: 0;

  .result-title {
    font-family: "OratorStd";
    font-size: 24px;

    .title-icon {
      font-size: 20px;
      margin-right: -10px;
      opacity: 0.5;
    }
  }

  .separator-title {
    margin-top: 5px;
    margin-bottom: 15px;
  }

  .result-description {
    font-size: 14px;
    text-align: left;
  }

  .separator-footer {
    margin-bottom: 40px;
  }

  .result-footer {
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 5px;
    width: calc(100% - 20px);
    margin: auto;
    padding-top: 10px;
  }

  transition: all 0.3s;

  &:hover,
  &:active {
    filter: sepia(1);
  }
}

img {
  width: 30px;
  border-radius: 50%;
}

@media screen and (max-width: 660px) {
  .result {
    flex-grow: 1;
  }
}
</style>