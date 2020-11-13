const { API_URL, API_KEY } = require("../constants");

const getApiUrlHeroDetails = (id, comics, series, stories) => {
  const comicsApiUrl = comics;
  const seriesApiUrl = series;
  const storiesApiUrl = stories;

  if (comics) {
    return `${API_URL}/${id}/${comicsApiUrl}?&apikey=${API_KEY}`;
  }
  if (series) {
    return `${API_URL}/${id}/${seriesApiUrl}?&apikey=${API_KEY}`;
  }
  if (stories) {
    return `${API_URL}/${id}/${storiesApiUrl}?&apikey=${API_KEY}`;
  }
  return `${API_URL}/${id}?&apikey=${API_KEY}`;
};

export default getApiUrlHeroDetails;
