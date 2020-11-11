import { API_URL, API_KEY } from "../constants"

const getApiUrl = (searchValue, currentOffset) => {
  const searchValueIsNotEmpty = searchValue.length
  const isNotOnHomepage = currentOffset !== 0

  if (searchValueIsNotEmpty) {
    return `${API_URL}?nameStartsWith=${searchValue}&apikey=${API_KEY}`
  }

  if (isNotOnHomepage) {
    return `${API_URL}?offset=${currentOffset}&apikey=${API_KEY}`
  }

  return `${API_URL}?apikey=${API_KEY}`
}

export default getApiUrl
