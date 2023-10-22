<script>
import MyButton from './UI/MyButton.vue';
import MyInput from './UI/MyInput.vue';
import MySelect from './UI/MySelect.vue';

export default {
    components: { MySelect, MyInput, MyButton },
    emits: [
      'update:modelValue'
    ],
    data() {
        return {
            selectedOption: "",
            templateList: ["Постановка вопроса", "Запрос информационного письма", "Иные задачи"],
            courtName: "",
            courtNumber: "",
            description: "",
        }
    }
}
</script>


<template>
        <h3 class="header">Создание заявки</h3>
        <div class="form">
            <div class="input-item">
                <MyInput
                    class="input-item__case-number"
                    v-model="courtNumber"
                />
                <MyInput
                    class="input-item__header"
                    v-model="courtName"
                /> 
            </div>
            <div class="input-item">
                <MySelect
                    v-model="selectedOption"
                    :options="templateList"
                    class="input-item__select"
                ></MySelect>
            </div>
            <div class="input-item">
                <textarea 
                class="input-item__text"
                v-model="description"
                ></textarea>
            </div>
            <div class="input-item">
                <MyButton>Прикрепить файл</MyButton>
                <MyButton>Отправить</MyButton>
            </div>
        </div>
        <div class="right-filler"></div>
</template>


<style lang="scss">
    .header {
        flex: 1;
        font-size: 24px;
    }

    .form {
        display: flex;
        flex-direction: column;
        flex: 2;
        align-self: center;

        .input-item {
            margin-top: 10px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .input-item__case-number {
                width: auto;
                margin-right: 10px;
            }
            .input-item__text {
                height: 12rem;
                width: 100%;
                resize: vertical;
                border: 2px solid $main-color;
                padding: 5px;
                font-size: 18px;
            }
            .input-item__header {
                width: 100%;
            }
            .input-item__select {
                width: 100%;
            }
        }
    }
    .right-filler {
        flex: 1;
    }
</style>