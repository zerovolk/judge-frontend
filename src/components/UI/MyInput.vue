<script>
export default {
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event) {
            this.$emit("update:modelValue", event.target.value)
        }
    }
}
</script>
<template>
    <input 
     class="text"
     type="text" 
     placeholder="№ дела"
     :value="modelValue"
     @input="updateInput">
</template>
<style lang="scss" scoped>
    @include allInputsStyle;
</style>