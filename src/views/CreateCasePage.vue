<script>
export default {

}
</script>


<template>
    <div class="wrap">
        <h3 class="header">Создание заявки</h3>
        <div class="form">
            <div class="input-item">
                <input 
                class="input-item__textarea"
                type="text" placeholder="№ дела">
                <input 
                class="input-item__textarea"
                placeholder="Наименование суда">
            </div>
            <div class="input-item">
                <select
                class="select">
                    <option value="placeholder">GG WP</option>
                </select>
            </div>
            <div class="input-item">
                <textarea 
                class="input-item__textarea textarea"
                ></textarea>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrap {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    .header {
        flex: 1;
        
    }

    .form {
        display: flex;
        flex-direction: column;
        flex: 2;
        align-self: center;

        .input-item {
            
            margin-top: 10px;

            .input-item__textarea, .select {
                height: 1.5rem;
            }
            .textarea {
                height: 12rem;
            }
        }
    }
}
</style>