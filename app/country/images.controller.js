class ImagesCtrl {
  constructor(countrySvc) {
    this.countrySvc = countrySvc;
    this.searchTerm = '';
    countrySvc.getImages(searchTerm)
    .then((images) => {
      this.images = images;
    })
  }

}

ImagesCtrl.$inject = ['CountryService'];

export default ImagesCtrl;
