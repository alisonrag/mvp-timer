<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <div class="row row-banner">
          <div class="col-md-12">
            <img
              :src="require('@/assets/img/mvp.png')"
              alt=""
              srcset=""
              class="img-fluid mx-auto d-block"
            />
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col-md-12">
            <MVPForm />
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <MVPTable />
          </div>
        </div>
      </div>
    </div>
  </div>
  <audio
    id="mvp-sound"
    :src="require('@/assets/sound/mvp.mp3')"
    preload
  ></audio>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import MVPForm from "@/components/MVPForm/MVPForm.vue";
import MVPTable from "@/components/MVPTable/MVPTable.vue";

export default {
  name: "HomeView",
  components: {
    MVPForm,
    MVPTable,
  },
};
</script>

<style scoped>
.row-banner {
  background: url("~@/assets/img/banner.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
