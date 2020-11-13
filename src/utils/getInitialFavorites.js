export default function getInitialFavorites() {
  const getMyLocalFavoritesHeroes = localStorage.getItem(
    "addToFavoritesHeroes"
  );
  const myFavHeroes = getMyLocalFavoritesHeroes
    ? JSON.parse(getMyLocalFavoritesHeroes)
    : [];
  return myFavHeroes;
}
