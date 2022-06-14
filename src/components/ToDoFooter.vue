<template>
    <div class="clearAllContainer">
        <span class="clearAllBtn" v-on:click="clearToDo"> Clear All </span>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    methods: {
        ...mapMutations({
            clearToDo : "clearToDo",
        })
        // clearToDo() {
        //     // localStorage.clear();
        //     this.$store.commit("clearToDo");
        // },
    }
};
</script>

<style scoped>
.clearAllContainer {
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto;
}

.clearAllBtn {
    color: #e20303;
    display: block;
}
</style>
