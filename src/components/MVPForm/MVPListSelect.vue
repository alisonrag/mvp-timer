<template>
  <select
    name="mvp-list"
    id="mvp-list"
    class="form-control col-md-12"
    @change="changeMVP($event)"
  >
    <option value="0">-</option>
    <option v-for="(mvp, index) in mvp_list" :value="mvp.id" :key="index">
      {{ mvp.name }}
    </option>
  </select>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "MVPListSelect",
  props: {
    modelValue: String,
  },
  computed: mapState(["mvp_list"]),
  methods: {
    ...mapMutations(["setCurrentMvpId"]),
    changeMVP: function (event) {
      this.setCurrentMvpId(event.target.value);
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
<style></style>
