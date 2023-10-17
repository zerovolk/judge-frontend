<script>
export default {
    components: {}
}
</script>

<template>
    <div class="navbar">
        <div @click="$router.push('/')" class="__logo">Web-приложение</div>
        <div class="__btns">
            <my-button 
            @click="$router.push('/create')"
            >Создать</my-button>
        </div>
    </div>
</template>

<style lang="scss">
    .navbar {
        display: flex;
        justify-content: space-between;
        height: 50px;
        background-color: $main-color;
        color: #fff;
        align-items: center;
        padding: 0 15px;
        box-shadow: 2px 2px 4px grey;

        .__logo {
            font-size: 20px;
            &:hover {
                color: chocolate;
                cursor: pointer;
            }
        }
    }
</style>