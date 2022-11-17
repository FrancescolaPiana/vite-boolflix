<template>
    <div class="search-container">
        <form @submit.prevent="performSearch">
            <input type="text" placeholder="Search.." name="search" v-model.trim="store.params.query" >
            <!-- <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button> -->
        </form>
    </div>
</template>

<script>
    import { store } from '../store'
    export default {
        name: 'AppSearch',
        data() {
            return {
                text:'',
                store,
            }
        },
        methods: {
            performSearch(){
                console.log(this.text);
                store.params.query = this.text
            },
        },

    }
</script>

<style lang="scss" scoped>
@use '../styles/partials/_mixins.scss' as*;

</style>