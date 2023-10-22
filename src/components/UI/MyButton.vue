<script>
export default {
    name: "my-button"
}
</script>
<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>


<style scoped lang="scss">
.btn {
    padding: 10px 15px;
    background: $main-color;
    color: $element-color;
    border: 2px solid $element-color;
    transition: background 600ms ease;
    cursor: pointer;


    &:hover {
    background: $element-color;
    color: $main-color;
    border: 2px solid $main-color;
}
}
</style>