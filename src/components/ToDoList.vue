<template>
    <div>
        <ul>
            <li v-for="(toDoItem, index) in propsData" v-bind:key="index" class="shadow">
                <i class="fas fa-check checkBtn" v-bind:class="{ checkBtnCompleted: toDoItem.completed }" v-on:click="toggleComplete(toDoItem)"></i>
                <span v-bind:class="{ textCompleted: toDoItem.completed }">{{ toDoItem.item }}</span>
                <!-- <span class="textCompleted">{{ toDoItem.item }}</span> -->
                <span class="removeBtn" v-on:click="removeToDo(toDoItem, index)">
                    <i class="fas fa-trash"></i>
                </span>
            </li>
        </ul>
    </div>
</template>

<script scoped>
export default {
    methods: {
        removeToDo: function (toDoItem, index) {
            localStorage.removeItem(toDoItem);
            this.toDoItems.splice(index, 1);
        },

        toggleComplete: function (toDoItem) {
            toDoItem.completed = !toDoItem.completed;
            localStorage.removeItem(toDoItem.item);
            localStorage.setItem(toDoItem.item, JSON.stringify(toDoItem));
        },
    },

    props: {
        propsData: Array,
    },
};
</script>

<style>
li {
    display: flex;
    margin: 0.5rem 0;
    height: 50px;
    min-height: 50px;
    padding: 0 0.9rem;
    border-radius: 5px;
    line-height: 50px;
    background: white;
}

.checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
}

.checkBtnCompleted {
    color: #b3adad;
}

.textCompleted {
    text-decoration: line-through;
    color: #b3adad;
}

.removeBtn {
    margin-left: auto;
    color: #de4343;
}
</style>
