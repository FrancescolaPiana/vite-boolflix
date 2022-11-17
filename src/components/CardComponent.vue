<template>
    
    <div class="card">
        <div class="img" >
            <img :src="item.poster_path ? imgBasePath + item.poster_path : 'https//via.placeholder.com/342x500'" alt="">
        </div>

        <div class="title">{{item.original_title || item.original_name}}</div>

        <div class="orititle">{{item.title || item.name}}</div>

        <div class="vote">
        <span v-for="n in 5" class="fa-star" :class="(n <= star) ? 'fa-solid' : 'fa-regular' "></span>
        
        <!-- {{item.vote_average}} -->
        </div>
        
        <div class="flag" v-if="availableFlag.includes(item.original_language)" >
            <img :src="'/images/' + item.original_language + '.png' " alt="">
        </div>

        <div v-else class="orlang">{{item.original_language}}</div>

        <div class="ovr">{{item.overview}}</div>
    </div>

</template>

<script>
// poster_path
// original_title
// title
// vote_average
// original_language
// id

    export default {
        props:{
            item: Object
        },

        data() {
            return {
                availableFlag: ['de', 'fr', 'it', 'es','en'],
                imgBasePath: 'https://image.tmdb.org/t/p/w342',
            }
        },
        computed: {
            star(){
                return Math.ceil(this.item.vote_average / 2);
                console.log(Math.ceil(this.item.vote_average / 2));
            }
        },
    }
</script> 

<style lang="scss" scoped>
    .card{
        background-color: black;
    }
</style>