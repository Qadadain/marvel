import { API_KEY, API_URL, NUMBER_OF_HERO_PER_PAGE } from "../constants"
import getApiUrl from "./getApiUrl"

describe("getApiUrl", () => {
  // En l'absence de recherhe et de pagination, page home
  test("it should return all hero url if search is empty and offset is 0", () => {
    const searchValue = ""
    const offsetValue = 0
    const result = getApiUrl(searchValue, offsetValue)

    expect(result).toBe(`${API_URL}?apikey=${API_KEY}`)
  })

  // La pagination doit fonctioner
  test(`it should return all page 1 url if search is empty and offset is ${NUMBER_OF_HERO_PER_PAGE}`, () => {
    const searchValue = ""
    const offsetValue = NUMBER_OF_HERO_PER_PAGE
    const result = getApiUrl(searchValue, NUMBER_OF_HERO_PER_PAGE)

    expect(result).toBe(`${API_URL}?offset=${offsetValue}&apikey=${API_KEY}`)
  })

  // La recherhe prime sur la pagination
  test(`if searchValue is not empty, it should return search url whatever the offset value is`, () => {
    const searchValue = "batman"
    const result = getApiUrl(searchValue, 10001)
    expect(result).toBe(
      `${API_URL}?nameStartsWith=${searchValue}&apikey=${API_KEY}`
    )

    const result2 = getApiUrl(searchValue, 0)
    expect(result2).toBe(
      `${API_URL}?nameStartsWith=${searchValue}&apikey=${API_KEY}`
    )
  })
})
