<template>
    <div class="con">
        <h2>{{ title }}</h2>
    </div>

    <div class="slider">
        <div v-for="(item,index) in items" :key="item.id" >
        <CardComponent :item="item"/>
    </div>
    </div>

</template>

<script>
import CardComponent from './CardComponent.vue';

    export default {
    components: { CardComponent },
    props: {
        items: Array,
        title: String
    }
}
</script>

<style lang="scss" scoped>
@use '../styles/partials/_mixins.scss' as* ;
@use '../styles/partials/variables' as* ;

    /* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: #e50914 #131313;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 13px;
  }

  *::-webkit-scrollbar-track {
    background: #131313;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #e50914;
    border-radius: 13px;
    border: 3px solid #131313;
  }
    .con{
        background-color: $darkgrey;
        padding: 0.8rem;
        h2{
            color: $white;
            margin: 0;
            text-transform: uppercase;
        }

    }
    .slider{
        background-color:  #000000;
        display: flex;
        flex-wrap: nowrap;        
        overflow-x: auto;
    }
</style>