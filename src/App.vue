<template>
  <header>
    <AppHeader/>
  </header>
  <main>
    <AppMain title="Movies" :items="store.movie"/>
    <AppMain title="Tv Series" :items="store.tv"/>
  </main>
</template>

<script>
  import axios from 'axios';
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';
  import {store} from './store';

  export default {
    components: {
    AppHeader,
    AppMain
    },
    
    data() {
      return {
        store
      }
    },

    watch: {
      'store.params.query'(newVal,oldVal){
          if (newVal !== oldVal && newVal !== '') {
              this.getMovie();
              this.getTv();
          }


          console.log('nuovo valore', newVal);
          console.log('vecchio valore', oldVal);
      }
    },

    methods: {
      getMovie(){
        const apiurl = store.baseUrl + store.endPoint.movie;
        const params = store.params;
        axios.get(apiurl,{params}).then ((res) => {
          console.log(res.data.results);
          store.movie = res.data.results;
        })
      },
      getTv(){
        const apiurl = store.baseUrl + store.endPoint.tv;
        const params = store.params;
        axios.get(apiurl,{params}).then ((res) => {
          console.log(res.data.results);
          store.tv = res.data.results;
        })
      }


    },
    created() {
      this.getMovie()
      this.getTv()
    },
  }

  
</script>

<style lang="scss" scoped>

</style>