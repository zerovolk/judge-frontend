<script>
import CaseList from '@/components/CaseList.vue';
export default {
    components: {
        CaseList
    },
    data() {
        return {
            cases: ["228", "134", "fdfs"]
        }
    }
}
</script>

<template>
    <case-list
    :cases="cases"></case-list>
</template>

<style></style>