<template>
  <tr class="v-table-row">
    <td class="row">{{ row_data.name }}</td>
    <td class="row">{{ row_data.date }}</td>
    <td class="row">{{ row_data.count }}</td>
    <td class="row">{{ row_data.distance }}</td>
  </tr>
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
