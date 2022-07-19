<template>
  <select
    name="mvp-map"
    id="mvp-map"
    class="form-control col-md-12"
    @change="changeMVPMap($event)"
  >
    <option
      v-for="(respawn, index) in map_list"
      :value="respawn.map"
      :id="respawn.map"
      :key="index"
    >
      {{ respawn.map }} ({{ parseInt(respawn.delay / 60000) }} min)
    </option>
  </select>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "MVPMapListSelect",
  props: {
    modelValue: String,
  },
  data() {
    return {
      map_list: [],
    };
  },
  methods: {
    updateMapList: function (id) {
      if (id == 0) {
        this.map_list = [];
      } else {
        let mvp = this.getMVPById(id);
        this.map_list = mvp.respawn;
        this.$emit("update:modelValue", this.map_list[0].map);
      }
    },
    changeMVPMap: function (event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
  computed: {
    ...mapGetters(["getMVPById"]),
  },
  watch: {
    "$store.state.current_mvp_id": {
      deep: true,
      handler(newValue) {
        this.updateMapList(newValue);
      },
    },
  },
};
</script>
<style></style>
