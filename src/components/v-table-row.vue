<template>
  <div class="v-table-row">
    <div class="row row_name">{{ row_data.name }}</div>
    <div class="row row_date">{{ row_data.date }}</div>
    <div class="row row_count">{{ row_data.count }}</div>
    <div class="row row_distance">{{ row_data.distance }}</div>
  </div>
</template>

<script>
export default {
  name: "v-table-row",
  props: {
    row_data: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  computed: {},
};
</script>
<style scoped>
.v-table-row {
  display: flex;
  justify-content: space-around;
}
.row {
  text-align: center;
  padding: 8px 16px;
  flex-basis: 25%;
}
</style>
