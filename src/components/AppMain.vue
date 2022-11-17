<template>
    <div>
        <h2>{{ title }}</h2>
    </div>

    <div v-for="(item,index) in items" :key="item.id" >
        <CardComponent :item="item"/>
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

</style>