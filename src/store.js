import { reactive } from "vue";

export const store = reactive({
    baseUrl: 'https://api.themoviedb.org/3',
    endPoint:'/search/movie',
    param: {
        api_key: '647e018ad95b7abcc0fed83002452046',
        query: ''
    }
})

