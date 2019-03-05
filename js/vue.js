var test = new Vue({
    el:'.movies',
    data () {
      image = 'http://image.tmdb.org/t/p/w1280/'
        return {
          info: null
        }
      },
    created(){
      axios.get('https://api.themoviedb.org/3/movie/popular?api_key=411534f1c508f09504c90436791ef840&language=en-US&page=1')
      .then(response => {
        this.info = response.data.results
        console.log(response.data)
      })
    }
})
