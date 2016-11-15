class FavoritesService {
  constructor($http, $state) {
    this.$http = $http;
    this.$state = $state;

  }

  getFavorites() {
    return this.$http.get('/favorites')
        .then((response) => {
          return response.data;
        })
        .catch((err) => {
          console.log("error");
          Materialize.toast(`${err.data}`, 4000, 'red rounded');
        });
  }

}

FavoritesService.$inject = ['$http', '$state'];

export default FavoritesService;
