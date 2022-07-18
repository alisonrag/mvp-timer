<template>
  <div>
    <form class="form">
      <div class="row my-3">
        <div class="col-md-12">
          <label for="mvp-list" class="form-label">Pick a MVP</label>
          <MVPListSelect />
        </div>
      </div>
      <div class="row my-3">
        <div class="col-md-12">
          <label for="mvp-list" class="form-label">Pick a Map</label>
          <MVPMapListSelect />
        </div>
      </div>
      <div class="row my-3">
        <div class="col-md-4">
          <label for="position-x" class="form-label"
            >X Position (optional)</label
          >
          <input
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
            type="text"
            class="form-control"
            name="position-y"
            id="position-y"
            placeholder="Type Y position"
          />
        </div>
        <div class="col-md-4">
          <label for="hour" class="form-label">Hour</label>
          <HourInput />
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

export default {
  name: "MVPForm",
  components: {
    MVPListSelect,
    MVPMapListSelect,
    HourInput,
  },
};
</script>
<style></style>
