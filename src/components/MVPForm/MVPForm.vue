<template>
  <div>
    <p class="text-danger">{{ errors }}</p>
    <form class="form" @submit="updateMVPTimerList($event)">
      <div class="row my-3">
        <div class="col-md-12">
          <label for="mvp-list" class="form-label">Pick a MVP</label>
          <MVPListSelect v-model="mvp_id" />
        </div>
      </div>
      <div class="row my-3">
        <div class="col-md-12">
          <label for="mvp-list" class="form-label">Pick a Map</label>
          <MVPMapListSelect v-model="mvp_map" />
        </div>
      </div>
      <div class="row my-3">
        <div class="col-md-4">
          <label for="position-x" class="form-label"
            >X Position (optional)</label
          >
          <input
            v-model="coord_x"
            type="text"
            class="form-control"
            name="position-x"
            id="position-x"
            placeholder="Type x position"
          />
        </div>
        <div class="col-md-4">
          <label for="position-y" class="form-label"
            >Y Position (optional)</label
          >
          <input
            v-model="coord_y"
            type="text"
            class="form-control"
            name="position-y"
            id="position-y"
            placeholder="Type Y position"
          />
        </div>
        <div class="col-md-4">
          <label for="hour" class="form-label">Hour</label>
          <HourInput v-model="hour" />
        </div>
      </div>
      <div class="col-md-12">
        <button
          id="button-add-mvp"
          name="button-add-mvp"
          class="btn btn-primary col-md-12"
        >
          Add MVP
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import MVPListSelect from "@/components/MVPForm/MVPListSelect";
import MVPMapListSelect from "@/components/MVPForm/MVPMapListSelect";
import HourInput from "@/components/MVPForm/HourInput";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "MVPForm",
  data() {
    return {
      mvp_id: "0",
      mvp_map: "",
      coord_x: null,
      coord_y: null,
      hour: "",
      errors: "",
    };
  },
  components: {
    MVPListSelect,
    MVPMapListSelect,
    HourInput,
  },
  computed: {
    ...mapGetters(["getMVPById"]),
  },
  methods: {
     ...mapMutations(["addMVPRow"]),
    updateMVPTimerList: function (event) {
      event.preventDefault();
      if (this.mvp_id == 0 || this.mvp_map === "") {
        this.errors = "Please Select MVP and Map";
      } else {
        this.errors = "";
        let mvp = this.getMVPById(this.mvp_id);
        let respawn = mvp.respawn.find(
          (respawn) => respawn.map === this.mvp_map
        );
        let died_time = new Date();
        if (this.hour.length == 5) {
          let hours = this.hour.split(":")[0];
          let minutes = this.hour.split(":")[1];
          if (hours >= 0 && hours <= 23) died_time.setHours(hours);
          if (minutes >= 0 && minutes <= 59) died_time.setMinutes(minutes);
        }
        this.addMVPRow({
          id: this.mvp_id,
          name: mvp.name,
          map: respawn.map,
          delay: respawn.delay,
          variance: respawn.variance,
          x: this.coord_x,
          y: this.coord_y,
          died_time: died_time,
          countdown: "",          
          alive: false,
          next_respawn: 0,
        });
      }
      return;
    },
  },
};
</script>
<style></style>
