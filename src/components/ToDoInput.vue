<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newToDoItem" v-on:keyup.enter="addToDo" />
        <button v-on:click="addToDo">add</button>
        <span class="addContainer">
            <i class="fas fa-plus addBtn"></i>
        </span>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            newToDoItem: "",
        };
    },
    methods: {
        addToDo: function () {
            // 저장하는 로직
            localStorage.setItem(this.newToDoItem, this.newToDoItem);
            this.clearInput();
        },

        clearInput: function () {
            // 입력창 초기화 로직
            this.newToDoItem = "";
        },
    },
};
</script>

<style scoped>
input:focus {
    outline: none;
}

.inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}

.inputBox input {
    border-style: none;
    font-size: 0.9rem;
}

.addContainer {
    float: right;
    background: linear-gradient(to right, #6478fb, #8763fb);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}

.addBten {
    color: white;
    vertical-align: middle;
}
</style>
