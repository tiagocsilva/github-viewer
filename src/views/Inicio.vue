<template>
  <div
    class="inicio d-flex"
    ref="inicioContainer"
  >
    <img
      ref="icon"
      class="img-icon"
      src="@/assets/img/icon.png"
    >

    <div class="question-container">
      <h2
        class="mb-2"
        ref="question"
      >
        SOBRE QUAL USUÁRIO GITHUB VOCÊ QUER SABER?
      </h2>

      <div
        class="input-wrapper"
        ref="userInput"
      >
        <b-input
          @keyup.enter="search"
          v-model="user"
          class="transparent-input"
          placeholder="Digite aqui o nome do usuário..."
          autocomplete="off"
        />
      </div>

      <small
        class="instruction"
        ref="instruction"
      >
        *Utilize o nome exato do usuário, por exemplo: "tiagocsilva"
      </small>

      <div class="clear-fix">
        <span id="tooltip-wrapper">
          <b-btn
            class="px-5 py-1 mt-3"
            variant="primary"
            @click="search"
            ref="button"
            :disabled="invalidUser"
          >
            BUSCAR
          </b-btn>
        </span>
      </div>

      <b-tooltip
        target="tooltip-wrapper"
        triggers="hover"
        :disabled="!invalidUser"
      >
        Por favor, informe o usuário acima.
      </b-tooltip>
    </div>

  </div>
</template>

<script>
import gsap from "gsap";

export default {
  data() {
    return {
      user: "",
    };
  },
  computed: {
    invalidUser() {
      return !this.user;
    },
  },
  methods: {
    search() {
      if (!this.user) return;

      this.$router.push(`user/${this.user}`);
    },
    animate(ref) {
      gsap.to(ref, {
        visibility: "visible",
      });

      return gsap.from(ref, {
        opacity: 0,
        y: -300,
        duration: 0.6,
      });
    },
  },
  async mounted() {
    const {
      icon,
      question,
      userInput,
      instruction,
      button,
      inicioContainer,
    } = this.$refs;

    await this.animate(icon);
    this.animate(question);
    await this.animate(button);
    this.animate(userInput);
    this.animate(instruction);

    gsap.to(inicioContainer, {
      visibility: "visible",
    });
  },
};
</script>

<style lang="scss">
.inicio {
  width: 80%;
  margin: auto;
  align-items: center;
  min-height: 65vh;
  visibility: hidden;
}

.instruction {
  color: $primary-dark;
}

.transparent-input {
  background: transparent;
  border: solid 1px $secondary;
  color: $secondary;

  &:focus {
    background: transparent;
  }
}

.question-container {
  text-align: left;
}

@media screen and (max-width: 600px) {
  .img-icon {
    display: none;
  }
}
</style>