class FavoritesCtrl {
  constructor(favoritesSvc) {
    this.favoritesSvc = favoritesSvc;
    favoritesSvc.getFavorites()
    .then((favorites) => {
      let favs = favorites.map((e) => {
        return JSON.parse(e.body)
      });
      this.favorites = favorites;
      console.log(this.favorites);
    })
  }

}

FavoritesCtrl.$inject = ['FavoritesService'];

export default FavoritesCtrl;
