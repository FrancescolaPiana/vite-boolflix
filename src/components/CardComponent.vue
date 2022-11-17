<template>
    
    <div class="box">
        <div class="innerbox" >
            <div class="front">
                <img  class="img" :src="item.poster_path ? imgBasePath + item.poster_path : `https://via.placeholder.com/342x500/131313/ffffff ?text=${item.title || item.name} `" alt="">
            </div>

            <div class="back" >
                <div class="title">{{item.original_title || item.original_name}}</div>

                <div class="orititle">{{item.title || item.name}}</div>

                <div class="vote">
                <span v-for="n in 5" class="fa-star" :class="(n <= star) ? 'fa-solid' : 'fa-regular' "></span>
                <!-- {{item.vote_average}} -->
                </div>
                
                <div v-if="availableFlag.includes(item.original_language)" >
                    <img class="flag" :src="'/images/' + item.original_language + '.png' " alt="">
                </div>

                <div v-else class="orlang">{{item.original_language}}</div>

                <div class="ovr">{{item.overview}}</div>
            </div>
        </div>
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
            }
        },
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
    .box{
        background-color: transparent;
        width: 230px;
        height: 350px;
        perspective: 1000px;
        overflow-y: hidden;
        .innerbox{
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            transition: transform 0.6s;
            transform-style: preserve-3d;
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        .front{
            background-color: #bbb;
            color: black;
            .img{
                height: 100%;
                width: 100%;
            }
        }
        .back{
            background-color: $darkgrey;
            color: white;
            transform: rotateY(180deg);
            overflow-y: auto;
            // border: 1px solid $red;
            display: flex;
            flex-direction: column;
            text-align: start;
            padding: 1rem;
            .title{
            color: $white;
            font-size: 1.6rem;
            font-weight: 700;
            }
            .orititle{
                color: $lightgrey;
                font-size: 1.2rem;
            }
            .vote{
                margin-top: 5px;
                margin-bottom: 5px;
                color: rgb(255, 174, 0);
            }
            .flag{
                width: 20px;
            }

            .ovr{
                margin: 10px;
               font-size: 0.8rem;
               font-style: italic;
            }
        }
        }
    }

    .box:hover .innerbox {
        transform: rotateY(180deg);
    }
    .front, .back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }

</style>