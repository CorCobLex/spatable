<template>
  <div class="app">
    <v-filters :datas_array="DATAS" />
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import VFilters from "./components/v-filters.vue";

export default {
  name: "App",
  components: { VFilters },
  data: () => {
    return {};
  },
  computed: {
    ...mapGetters(["DATAS"]),
  },
  methods: {
    ...mapActions(["GET_DATAS_FROM_API"]),
  },
  mounted() {
    this.GET_DATAS_FROM_API();
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
