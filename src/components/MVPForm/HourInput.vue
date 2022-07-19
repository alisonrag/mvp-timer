<template>
  <input
    type="text"
    class="form-control"
    name="hour"
    id="hour"
    placeholder="Type Hour"
    @keyup="maskHour($event)"
  />
</template>
<script>
export default {
    name: 'HourInput',
    methods: {
      maskHour: function(event) {
         if (event.target.value.length == 2) {
           if (event.keyCode == 8) {
            return
           }
           else {
            event.target.value += ":";
           }
        }
      }
    }
};
</script>
<style></style>
