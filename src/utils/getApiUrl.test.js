import {
  API_KEY,
  API_URL,
  NUMBER_OF_HERO_PER_PAGE_TO_DISPLAY,
  LIMIT_OF_HEROES_TO_DISPLAY,
} from "../constants";
import getApiUrl from "./getApiUrl";

describe("getApiUrl", () => {
  it("should return all heroes if search is empty and currentOfSet is 0", () => {
    const searchValue = "";
    const offSetValue = 0;
    const result = getApiUrl(searchValue, offSetValue);

    expect(result).toBe(
      `${API_URL}?limit=${LIMIT_OF_HEROES_TO_DISPLAY}&apikey=${API_KEY}`
    );
  });

  it("should return the page with the currentOffSet and search is empty", () => {
    const searchValue = "";
    const offSetValue = NUMBER_OF_HERO_PER_PAGE_TO_DISPLAY;
    const result = getApiUrl(searchValue, NUMBER_OF_HERO_PER_PAGE_TO_DISPLAY);

    expect(result).toBe(
      `${API_URL}?limit=${LIMIT_OF_HEROES_TO_DISPLAY}&offset=${offSetValue}&apikey=${API_KEY}`
    );
  });

  it("should return the search if its not empty and whatever the currentOffSet value is", () => {
    const searchValue = "spi";
    const result = getApiUrl(searchValue, 40);
    expect(result).toBe(
      `${API_URL}?nameStartsWith=${searchValue}&apikey=${API_KEY}`
    );

    const result2 = getApiUrl(searchValue, 0);
    expect(result2).toBe(
      `${API_URL}?nameStartsWith=${searchValue}&apikey=${API_KEY}`
    );
  });
});
