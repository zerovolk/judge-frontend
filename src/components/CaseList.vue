<script>
import CaseItem from '@/components/CaseItem.vue';
export default {
    components: {
        CaseItem
    },
    props: {
        cases: {
            type: Array,
            required: true
        }
    }
}
</script>

<template>
    <div class="background">
        <div 
        v-if="cases.length > 0"
        class="case-list">
            <h2 class="__header header">Список заявок</h2>
            <TransitionGroup name="case-list">
                <case-item
                
                v-for="lawsuit in cases"
                :lawsuit="lawsuit"
                :key="lawsuit"
                ></case-item>
            </TransitionGroup>
        </div>
        <h2 
        v-else
        class="header">
            Список заявок пуст
        </h2>
    </div>
</template>

<style lang="scss" scoped>

    .background {
        background: rgba(0,0,0, .1);
        height: 93.5vh;
        backdrop-filter: blur(2px);
        padding: 20px;
        color: #fff;
    }
    .case-list {
        display: flex;
        flex-direction: column;
        
       .case-list-item {
        display: inline-block;
        margin-right: 10px;
       }
       .case-list-enter-active,
       .case-list-leave-active {
        transition: all 0.4s ease;
       }
       .case-list-enter-from,
       .case-list-leave-to {
        opacity: 0;
        transform: translateX(-130px);
       }
       .case-list-move {
        transition: transform 0.4s ease;
       }
    }
    .header {
        text-align: center;
        color: $main-color;
    }
</style>