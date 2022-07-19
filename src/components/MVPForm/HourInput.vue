<template>
  <input
    type="text"
    class="form-control"
    name="hour"
    id="hour"
    placeholder="Type Hour"
    :value="modelValue"
    @keyup="maskHour($event)"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
<script>
export default {
    name: 'HourInput',
    props: {
      modelValue: String
    },
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
