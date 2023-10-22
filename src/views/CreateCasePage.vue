<script>
import CaseInputs from '@/components/CaseInputs.vue';
export default {
    components: {
        CaseInputs
    },
    data() {
        return {
        }
    }
}
</script>


<template>
    <div class="wrap">
        <CaseInputs></CaseInputs>
    </div>
</template>

<style lang="scss" scoped>
.wrap {
    padding: 20px;
    display: flex;
    // justify-content: space-between;
    // align-items: flex-start;
}
</style>