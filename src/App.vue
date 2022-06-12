<template>
    <div id="app">
        <to-do-header></to-do-header>
        <to-do-input v-on:addToDoItem="addOneItem"></to-do-input>
        <to-do-list v-bind:propsData="toDoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></to-do-list>
        <to-do-footer v-on:clearAll="clearAllItems"></to-do-footer>
    </div>
</template>

<script>
import ToDoHeader from "./components/ToDoHeader.vue";
import ToDoInput from "./components/ToDoInput.vue";
import ToDoList from "./components/ToDoList.vue";
import ToDoFooter from "./components/ToDoFooter.vue";

export default {
    name: "App",
    components: {
        // 컴포넌트 태그명 : 컴포넌트 이름
        // 2개 같으면 그냥 하나만 써도 된다.
        ToDoHeader,
        ToDoList,
        ToDoInput,
        ToDoFooter,
    },

    data: function () {
        return {
            toDoItems: [],
        };
    },

    methods: {
        removeOneItem: function (toDoItem, index) {
            localStorage.removeItem(toDoItem.item);
            this.toDoItems.splice(index, 1);
        },

        addOneItem: function (insertedItem) {
            const obj = { completed: false, item: insertedItem };
            localStorage.setItem(insertedItem, JSON.stringify(obj));
            this.toDoItems.push(obj);
        },

        toggleOneItem: function (toDoItem, index) {
            // toDoItem.completed = !toDoItem.completed;
            this.toDoItems[index].completed = !this.toDoItems[index].completed;
            console.log(this.toDoItems[index]);
            localStorage.removeItem(toDoItem.item);
            localStorage.setItem(toDoItem.item, JSON.stringify(toDoItem));
        },

        clearAllItems: function () {
            localStorage.clear();
            this.toDoItems = [];
        },
    },

    created: function () {
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
                    const temp = JSON.parse(localStorage.getItem(localStorage.key(i)));
                    this.toDoItems.push(temp);
                }
            }
        }
    },
};
</script>

<style>
body {
    text-align: center;
    background-color: #f6f6f6;
}

input {
    border-style: groove;
    width: 200px;
}

button {
    border-style: groove;
}

.shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
