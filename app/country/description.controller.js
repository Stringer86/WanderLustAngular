class DescriptionCtrl {
  constructor(countrySvc) {
    this.countrySvc = countrySvc;
    this.searchTerm = '';
    countrySvc.getDescription(searchTerm)
    .then((description) => {
      this.description = description;
    })
  }

}

DescriptionCtrl.$inject = ['CountryService'];

export default DescriptionCtrl;
