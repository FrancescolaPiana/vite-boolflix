<template>
    <header>
    <div>
        <h1>BOOLFLIX</h1>
    </div>
    <AppSearch/>
    </header>
</template>

<script>
import AppSearch from './AppSearch.vue';


    export default {
        name: "AppHeader",
        components: { AppSearch }
    }
</script>

<style lang="scss" scoped>
@use '../styles/partials/_mixins.scss' as* ;
@use '../styles/partials/variables' as* ;
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: rgb(0,0,0);
        background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(28,28,28,1) 50%, rgba(17,17,17,1) 100%);
        padding: 0.6rem;
        h1{
            color: $red;
            margin: 0;
        }
    }
</style>