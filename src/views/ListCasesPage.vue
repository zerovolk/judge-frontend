<script>
import CaseList from '@/components/CaseList.vue';
export default {
    components: {
        CaseList
    },
    data() {
        return {
            cases: ["ddd"]
        }
    }
}
</script>

<template>
    <case-list
    :cases="cases"></case-list>
</template>

<style></style>