<template>
  <div class="dropdown">
    <select v-model="localType" @change="selectedType()">
      <option value="name">Name</option>
      <option value="count">Count</option>
      <option value="distance">Distance</option>
    </select>
    <select v-model="selectOption" :disabled="localIsNotNumber">
      <option value="contains">Contains</option>
      <option value="equal">Equal</option>
      <option value="less">Less</option>
      <option value="more">More</option>
    </select>
    <input type="text" v-model="inputData" required minlenght="1" />
    <VTable class="vtable" :datas_array="filtration" />
  </div>
</template>
<script>
import VTable from "./v-table.vue";
export default {
  name: "v-filters",
  data() {
    return {
      localIsNotNumber: Boolean,
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
      this.localIsNotNumber = this.localType == "name";
    },
  },
  computed: {
    filtration() {
      switch (this.localType) {
        case "count":
          if (this.inputData.trim() == "") return this.datas_array;
          switch (this.selectOption) {
            case "equal":
              if (!isNaN(this.inputData)) return console.log("its int");
              else
                return this.datas_array.filter(
                  (data) => data.count === this.inputData
                );
            case "less":
              return;
            case "more":
              return;
            default:
              return this.datas_array.filter((data) => {
                return data.count.indexOf(this.inputData) !== -1;
              });
          }
        case "distance":
          switch (this.selectOption) {
            case "equal":
              return;
            case "less":
              return;
            case "more":
              return;
            default:
              return this.datas_array.filter((data) => {
                return data.distance.match(this.inputData);
              });
          }
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
