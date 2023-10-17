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
    background: $element-color;
    color: black;
    border: 1px solid black;
    transition: background 600ms ease;
    cursor: pointer;


    &:hover {
    background: none;
    color: $element-color;
}
}
</style>