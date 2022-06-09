<template>
    <div id="app">
        <to-do-header></to-do-header>
        <to-do-input></to-do-input>
        <to-do-list></to-do-list>
        <to-do-footer></to-do-footer>
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
