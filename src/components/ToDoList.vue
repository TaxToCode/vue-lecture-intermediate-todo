<template>
    <div>
        <ul>
            <!-- <li v-for="toDoItem in todoItems" v-bind:key="toDoItem">{{ toDoItem }}</li> -->
            <li class="shadow">
                {{ toDoItems[0] }}
                <span class="removeBtn">
                    <i class="fas fa-trash"></i>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            toDoItems: [],
        };
    },
    created: function () {
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
                    this.toDoItems.push(localStorage.key(i));
                }
            }
        }
    },

    methods: {
        removeToDo: function () {},
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

.checkBtnCompleted {``
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
