<template>
  <div class="dropdown">
    <select v-model="localType" @change="selectedType()">
      <option value="name">Name</option>
      <option value="count">Count</option>
      <option value="distance">Distance</option>
    </select>
    <select v-model="selectOption" :disabled="localIsNumber">
      <option value="contains">Contains</option>
      <option value="equal">Equal</option>
      <option value="less">Less</option>
      <option value="more">More</option>
    </select>
    <input
      @change="searchFilter($event)"
      type="text"
      v-model="inputData"
      required
      minlenght="1"
    />
    <VTable class="vtable" :datas_array="filtration" />
  </div>
</template>
<script>
import VTable from "./v-table.vue";
export default {
  name: "v-filters",
  data() {
    return {
      localIsNumber: true,
      localType: "",
      inputData: "",
      selectOption: "",
    };
  },
  props: {
    datas_array: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  methods: {
    selectedType() {
      this.localIsNumber = this.localType == "name";
    },
  },
  computed: {
    filtration() {
      console.log(this.localType);
      switch (this.localType) {
        case "count":
          return this.datas_array.filter((data) => {
            return data.count.match(this.inputData);
          });
        case "distance":
          return this.datas_array.filter((data) => {
            return data.distance.match(this.inputData);
          });
        default:
          return this.datas_array.filter((data) => {
            return data.name.match(this.inputData);
          });
      }
    },
  },
  components: { VTable },
};
</script>
<style>
.dropdown {
  text-align-last: center;
}
</style>
