<template>
    <textarea 
    :value="modelValue"
    @input="updateInput"
    class="textarea"></textarea>
  </template>
  
  <script>
  export default {
    name: 'my-textarea',
    props: {
      modelValue: [String, Number],
    },
    methods: {
      updateInput(event) {
        this.$emit('update:modelValue', event.target.value)
      }
    }
  }
  </script>
  
  <style scoped lang="scss">
  </style>