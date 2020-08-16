<template>
  <div class="resultado pt-4">

    <div class="username px-5">
      <h1>{{this.user.toLowerCase()}}</h1>
    </div>

    <div class="mt-3">
      <a
        class="mt-5 text-decoration-none text-primary-dark"
        href="#"
        @click="$router.push({ name: 'Inicio' })"
      >
        <font-awesome-icon
          :icon="['fas', 'chevron-left']"
          class="title-icon mr-1"
        /> Pesquisar outro usuário
      </a>
    </div>

    <div
      class="loading-container"
      ref="loadingContainer"
      v-if="loading"
    >
      <scaling-squares-spinner
        :animation-duration="1250"
        :size="85"
        color="#f9c5af"
      />
    </div>

    <div v-else>
      <div
        v-if="results.length > 0"
        class="results-container mt-4 pb-4"
      >
        <card-resultado
          v-for="(result, i) in results"
          :key="i"
          :class="result.color"
          :result="result"
        />
      </div>

      <div
        class="mt-4 message"
        v-else
      >
        {{errorMsg}}
      </div>
    </div>
  </div>
</template>

<script>
import { ScalingSquaresSpinner } from "epic-spinners";
import * as repositoryService from "@/api/repository";
import CardResultado from "@/components/resultado/CardResultado";

export default {
  data() {
    return {
      isError: false,
      loading: true,
      results: [],
    };
  },
  components: {
    ScalingSquaresSpinner,
    CardResultado,
  },
  computed: {
    user() {
      return this.$route.params.user;
    },
    errorMsg() {
      if (this.isError)
        return "Não foi possível encontrar o usuário informado...";
      else if (this.results.length == 0)
        return "Nenhum repositório encontrado para o usuário informado...";
    },
  },
  methods: {
    setColors(results) {
      const colors = ["bg-tertiary", "bg-primary", "bg-quarterly"];

      let currColor = 0;
      results.forEach((elm) => {
        if (currColor > colors.length - 1) currColor = 0;

        elm.color = colors[currColor];
        currColor++;
      });

      this.results = results;
    },
  },
  mounted() {
    repositoryService
      .list(this.user)
      .then((res) => {
        this.setColors(res.data);
      })
      .catch(() => (this.isError = true))
      .finally(() => (this.loading = false));
  },
};
</script>

<style lang="scss">
.username {
  h1 {
    color: $primary-dark;
  }

  border-bottom: solid 1px $primary-dark;
  width: fit-content;
  margin: auto;
}

.loading-container {
  width: 100%;
  margin: auto;
  text-align: center;
  display: flex;
  justify-content: center;
  margin-top: 80px;
}

.results-container {
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
}

.message {
  font-size: 20px;
}
</style>