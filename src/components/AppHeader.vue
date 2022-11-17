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
        background-color: $darkgrey;
        padding: 1rem;
        h1{
            color: $red;
        }
    }
</style>