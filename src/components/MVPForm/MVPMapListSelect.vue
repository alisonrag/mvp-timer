<template>
  <select name="mvp-map" id="mvp-map" class="form-control col-md-12">
    <option
      v-for="(respawn, index) in map_list"
      :value="respawn.map"
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
      }
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
