<template>
    <div id="root">
        <!-- <p>{{ this.$store.getters.originalPrice }}</p>
        <p>{{ this.$store.getters.doublePrice }}</p>
        <p>{{ this.$store.getters.triplePrice }}</p> -->

        <p>{{ originalPrice }}</p>
        <p>{{ doublePrice }}</p>
        <p>{{ triplePrice }}</p>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";

    export default {
        computed: {
            // originalPrice() {
            //     return this.$store.getters.originalPrice;
            // },
            // doublePrice() {
            //     return this.$store.getters.doublePrice;
            // },
            // triplePrice() {
            //     return this.$store.getters.triplePrice;
            // },

            ...mapGetters(["originalPrice", "doublePrice", "triplePrice"]),
        },
    };
</script>

<style></style>
