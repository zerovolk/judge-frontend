<template>
    <select 
    class="select text"
    @change="changeOption">
      <option value="">Свой шаблон</option>
      <option
          v-for="option in options"
          :key="option"
          :value="option"
      >
          {{ option }}
      </option>
      <slot></slot>
    </select>
  
    
  </template>
  
  <script>
  export default {
    name: 'my-select',
    props: {
      options: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      changeOption(event) {
        this.$emit('update:modelValue', event.target.value)
      }
    }
  }
  </script>
  
  <style scoped lang="scss">
      .select {
        height: 2rem;
        font-size: 18px;
        color: #000;
        background-color: #fcfcfc;
        border-width: 2px;
        border-style: solid;
        border-color:#000
      }
  </style>