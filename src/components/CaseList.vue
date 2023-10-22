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
        <h2 class="header">Список заявок</h2>
        <div 
        v-if="cases.length > 0"
        class="case-list">
            
            <TransitionGroup name="case-list" class="list">
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
        <div class="right-filter"></div>
    </div>
</template>

<style lang="scss" scoped>

    .background {
        background: none;
        height: 93.5vh;
        // backdrop-filter: blur(2px);
        padding: 20px;
        color: #fff;
        display: flex;

        .right-filter {
            flex: 1;
        }
    }
    .case-list {
        display: flex;
        flex-direction: column;
        flex: 3;
        
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
        justify-self:center;
        color: $main-color;
        flex: 1;
    }
</style>