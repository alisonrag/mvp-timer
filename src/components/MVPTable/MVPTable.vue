<template>
  <table class="table table-responsive" id="mvp-table" name="mvp-table">
    <thead class="thead-dark">
      <tr class="table-text-vertical-middle">
        <th scope="col"></th>
        <th scope="col">
          Name <i class="fa-solid fa-filter" @click="sortByName"></i>
        </th>
        <th scope="col">Location</th>
        <th scope="col">Hour</th>
        <th scope="col">
          Timer <i class="fa-solid fa-filter" @click="sortByTimer"></i>
        </th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody class="table-hover">
      <tr
        v-for="(mvp, index) in mvp_timer_list"
        :key="index"
        class="table-text-vertical-middle"
      >
        <td>
          <img
            :src="'https://static.ragnaplace.com/db/npc/gif/' + mvp.id + '.gif'"
            :alt="mvp.name"
            class="mvp-image"
          />
        </td>
        <td>{{ mvp.name }}</td>
        <td>{{ getLocationString(mvp) }}</td>
        <td>{{ getDateString(mvp) }}</td>
        <td :class="{ 'mvp-alive': mvp.alive, 'mvp-died': !mvp.alive }">
          {{ mvp.countdown }}
        </td>
        <td>
          <i
            class="fa-solid fa-rotate"
            data-toggle="tooltip"
            data-placement="top"
            title="Renew"
            @click="renewTimer(index)"
          ></i>
          <i
            class="fa-solid fa-xmark"
            aria-hidden="true"
            data-toggle="tooltip"
            data-placement="top"
            title="Delete"
            @click="removeTimer(index)"
          ></i>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import { addMilliseconds } from "date-fns/fp";
import {
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  differenceInMilliseconds,
} from "date-fns";

export default {
  name: "MVPTable",
  computed: mapState(["mvp_timer_list"]),
  methods: {
    ...mapMutations(["saveMVPListInLocalStorage"]),
    getLocationString: function (mvp) {
      let location_string = mvp.map;
      if (parseInt(mvp.x) > 0 && parseInt(mvp.y) > 0)
        location_string = location_string + " " + mvp.x + "," + mvp.y;
      let delay = parseInt(mvp.delay / 60000);
      location_string = location_string + " (" + delay + "min)";
      return location_string;
    },
    getDateString: function (mvp) {
      return mvp.died_time.toLocaleString("en-GB", {});
    },
    updateCountdowns: function () {
      this.mvp_timer_list.forEach((mvp_timer) => {
        let respawn_time = addMilliseconds(
          mvp_timer.died_time,
          parseInt(mvp_timer.delay)
        );
        let variance_time = addMilliseconds(
          respawn_time,
          parseInt(mvp_timer.variance)
        );
        let hours = differenceInHours(respawn_time, new Date());
        let minutes = differenceInMinutes(respawn_time, new Date()) % 60;
        let real_seconds = differenceInSeconds(respawn_time, new Date());
        let seconds = real_seconds % 60;

        mvp_timer.countdown =
          Math.abs(hours) + ":" + Math.abs(minutes) + ":" + Math.abs(seconds);

        if (real_seconds < 0) {
          mvp_timer.alive = true;
          if (mvp_timer.alerted == false) {
            document.getElementById("mvp-sound").play();
            mvp_timer.alerted = true;
          }
        } else {
          mvp_timer.alive = false;
        }

        let percent = 0;
        let milliseconds = differenceInMilliseconds(new Date(), variance_time);
        mvp_timer.next_respawn = milliseconds;

        if (mvp_timer.alive) {
          let difference = mvp_timer.variance - Math.abs(milliseconds);
          percent = (100 * difference) / mvp_timer.variance;
          if (percent > 100 || milliseconds > 0) percent = 100;
        }
        mvp_timer.countdown += " " + parseInt(percent) + "%";
      });
    },
    renewTimer: function (index) {
      this.mvp_timer_list[index].died_time = new Date();
      this.mvp_timer_list[index].alerted = false;
      this.saveMVPListInLocalStorage();
    },
    removeTimer: function (index) {
      this.mvp_timer_list.splice(index, 1);
      this.saveMVPListInLocalStorage();
    },
    sortByName: function () {
      this.mvp_timer_list.sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      );
    },
    sortByTimer: function () {
      this.mvp_timer_list.sort((a, b) =>
        a.next_respawn < b.next_respawn
          ? 1
          : b.next_respawn < a.next_respawn
          ? -1
          : 0
      );
    },
  },
  mounted() {
    setInterval(this.updateCountdowns, 1000);
  },
};
</script>
<style>
.mvp-image {
  max-width: 100%;
  max-height: 100px;
}
.table-text-vertical-middle {
  vertical-align: middle;
  text-align: center;
}
.fa-rotate {
  color: #0d6efd;
}

.mvp-alive,
.fa-xmark {
  color: #f71735;
}

.mvp-died {
  color: #00916e;
}

.fa-rotate,
.fa-xmark {
  margin: 5px;
}
</style>
