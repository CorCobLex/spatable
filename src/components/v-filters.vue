<template>
  <div class="dropdown">
    <select @change="selectedType($event)">
      <option value="name">Name</option>
      <option value="count">Count</option>
      <option value="distance">Distance</option>
    </select>
    <select @change="selectedOption($event)" :disabled="localIsNumber">
      <option value="contains">Contains</option>
      <option value="equal">Equal</option>
      <option value="less">Less</option>
      <option value="more">More</option>
    </select>
    <input type="text" id="inputData" name="inputData" required minlenght="1" />
  </div>
</template>
<script>
export default {
  name: "v-filters",
  data() {
    return {
      localIsNumber: true,
    };
  },

  methods: {
    selectedType(event) {
      this.localIsNumber = event.target.value == "name";
    },
    selectedOption(event) {
      console.log(event.target.value);
    },
  },
};
</script>
<style>
.dropdown {
  display: flex;
  justify-content: center;
}
</style>
