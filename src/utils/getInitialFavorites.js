const getMyLocalFavoritesHeroes = localStorage.getItem("addToFavoritesHeroes");
const myFavHeroes = getMyLocalFavoritesHeroes
  ? JSON.parse(getMyLocalFavoritesHeroes)
  : [];

export default function getInitialFavorites() {
  return myFavHeroes;
}
