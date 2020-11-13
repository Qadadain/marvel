const {
  API_URL,
  API_KEY,
  LIMIT_OF_HEROES_TO_DISPLAY,
} = require("../constants");

const getApiUrl = (searchValue, currentOffSet) => {
  const searchValueIsNotEmpty = searchValue.length;
  const isNotOnFirstHeroesDisplay = currentOffSet !== 0;

  if (searchValueIsNotEmpty) {
    return `${API_URL}?nameStartsWith=${searchValue}&apikey=${API_KEY}`;
  }

  if (isNotOnFirstHeroesDisplay) {
    return `${API_URL}?limit=${LIMIT_OF_HEROES_TO_DISPLAY}&offset=${currentOffSet}&apikey=${API_KEY}`;
  }

  return `${API_URL}?limit=${LIMIT_OF_HEROES_TO_DISPLAY}&apikey=${API_KEY}`;
};

export default getApiUrl;
