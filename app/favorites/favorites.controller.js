class FavoritesCtrl {
  constructor(favoritesSvc) {
    this.favoritesSvc = favoritesSvc;
    favoritesSvc.getFavorites()
    .then((favorites) => {
      this.favs = favorites.map((e) => {
        return JSON.parse(e.body)
      });
      this.favorites = favorites;
      console.log(this.favs);
    })
  }

}

FavoritesCtrl.$inject = ['FavoritesService'];

export default FavoritesCtrl;
