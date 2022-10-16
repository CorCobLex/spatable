<template>
  <div class="v-table">
    <div class="dropdown">
      <select @change="selectedType($event)">
        <option value="name">Name</option>
        <option value="count">Count</option>
        <option value="distance">Distance</option>
      </select>
      <select name="optionsChoose" id="optionsChoose" :disabled="localIsNumber">
        <option value="contains">{{ localIsNumber }}</option>
        <option value="equal">Equal</option>
        <option value="less">Less</option>
        <option value="more">More</option>
      </select>
      <input
        type="text"
        id="inputData"
        name="inputData"
        required
        minlenght="1"
      />
    </div>
    <div class="v-table__header">
      <p>Name</p>
      <p>Date</p>
      <p>Count</p>
      <p>Distance</p>
    </div>
    <div class="v-table__body">
      <v-table-row v-for="row in paginatedData" :key="row.id" :row_data="row" />
    </div>
    <div class="v-table__paggination">
      <div
        class="page"
        v-for="page in pages"
        :key="page"
        :class="{ page__selected: page == pageNumber }"
        @click="pageClick(page)"
      >
        {{ page }}
      </div>
    </div>
  </div>
</template>

<script>
import vTableRow from "./v-table-row.vue";
export default {
  name: "v-table",
  components: {
    vTableRow,
  },
  props: {
    isNumber: {
      type: Boolean,
      default: () => {
        return true;
      },
    },
    datas_array: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  watch: {
    selectedType() {},
  },
  data() {
    return {
      localIsNumber: this.isNumber,
      dataPerPage: 10,
      pageNumber: 1,
    };
  },
  computed: {
    pages() {
      return Math.ceil(this.datas_array.length / 10);
    },
    paginatedData() {
      let from = (this.pageNumber - 1) * this.dataPerPage;
      let to = from + this.dataPerPage;
      return this.datas_array.slice(from, to);
    },
  },
  methods: {
    pageClick(page) {
      this.pageNumber = page;
    },
    selectedType(event) {
      if (event.target.value == "name") {
        console.log(event.target.value);
        return (this.localIsNumber = false);
      }
    },
  },
};
</script>
<style scoped>
.v-table {
  max-width: 900px;
  margin: 0 auto;
}
.v-table__header {
  display: flex;
  justify-content: space-around;
  border-bottom: solid 1px #000;
}
.v-table p {
  text-align: center;
  flex-basis: 25%;
}
.v-table__paggination {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
}
.page {
  padding: 8px;
  margin-right: 10px;
  border: solid 1px #000;
}
.page:hover {
  background: #ccc;
  cursor: pointer;
  color: white;
}

.page__selected {
  background: #ccc;
  cursor: pointer;
  color: white;
}
.dropdown {
  display: flex;
  justify-content: center;
}
</style>
