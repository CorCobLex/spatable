<template>
  <div class="v-table">
    <v-filters />

    <table class="v-table__header">
      <tr>
        <th>Name</th>
        <th>Date</th>
        <th>Count</th>
        <th>Distance</th>
      </tr>
      <div class="v-table__body">
        <v-table-row
          v-for="row in paginatedData"
          :key="row.id"
          :row_data="row"
        />
      </div>
    </table>
    <div class="v-table__pagination">
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
import VFilters from "./v-filters.vue";
export default {
  name: "v-table",
  components: {
    vTableRow,
    VFilters,
  },
  props: {
    datas_array: {
      type: Array,
      default: () => {
        return [];
      },
    },
    dataPerPage: {
      type: Number,
      default: () => {
        return 10;
      },
    },
  },

  data() {
    return {
      pageNumber: 1,
    };
  },
  computed: {
    pages() {
      return Math.ceil(this.datas_array.length / this.dataPerPage);
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
.v-table__pagination {
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
</style>
