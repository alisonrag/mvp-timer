<template>
  <table class="table table-responsive" id="mvp-table" name="mvp-table">
    <thead class="thead-dark">
      <tr>
        <th scope="col"></th>
        <th scope="col">Name</th>
        <th scope="col">Location</th>
        <th scope="col">Hour</th>
        <th scope="col">Timer</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody class="table-hover">
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "MVPTable",
  computed: mapState(["mvp_list"]),
};
</script>
<style></style>
