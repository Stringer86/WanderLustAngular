class TravelCtrl {
  constructor(countrySvc) {
    this.countrySvc = countrySvc;
    this.searchTerm = '';
    countrySvc.getTravelInfo(searchTerm)
    .then((info) => {
      this.travelInfo = info;
    })
  }

}

TravelCtrl.$inject = ['CountryService'];

export default TravelCtrl;
