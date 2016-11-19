class CountryService {
  constructor($http, $state) {
    this.$http = $http;
    this.$state = $state;

  }

  getDescription(searchTerm) {
    return this.$http.get('/api/descriptions')
        .then((response) => {
          return response.data.results[0].description;
        })
        .catch((err) => {
          console.log("error");
          Materialize.toast(`${err.data}`, 4000, 'red rounded');
        });
  }

  getImages(searchTerm) {
    return this.$http.get('/api/images')
        .then((response) => {
          return response.data.hits;
        })
        .catch((err) => {
          console.log("error");
          Materialize.toast(`${err.data}`, 4000, 'red rounded');
        });
  }

  getTravelInfo(searchTerm) {
    return this.$http.get('/api/travel')
        .then((response) => {
          return response.data;
        })
        .catch((err) => {
          console.log("error");
          Materialize.toast(`${err.data}`, 4000, 'red rounded');
        });
  }

}

CountryService.$inject = ['$http', '$state'];

export default CountryService;
