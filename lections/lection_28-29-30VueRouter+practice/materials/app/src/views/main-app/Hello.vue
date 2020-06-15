<template>
    <div>
        Hello {{GET_USER_NAME}}

        <button @click="go()">Go Products</button>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        name: "Hello",
        computed: {
            ...mapGetters(['GET_USER_NAME'])
        },
        methods: {
            go() {
                this.$router.push('/products');
            }
        },
        created() {

        }
    }
</script>

<style scoped>

</style>