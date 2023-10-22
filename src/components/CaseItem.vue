<script>
export default {
    props: {
        lawsuit: {
            type: String,
            required: true,
        }
    }
}
</script>

<template>
    <div class="case">
        <div class="__lawsuit">Дело № {{ lawsuit }}</div>
        <div class="__description">Описание: </div>
    </div>
</template>

<style lang="scss">
    .case {
        padding: 11px;
        border: 2px solid $main-color;
        margin-top: 15px;
        display: flex;
        /* align-self: center; */
        justify-content: space-between;
        background: rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(4px);
        cursor: pointer;

        .__lawsuit {
            flex: 1;
        }
        .__description {
            flex: 2;
        }
    }
</style>