import { API_KEY, API_URL } from "../constants";
import getApiUrlHeroDetails from "./getApiUrlHeroDetails";

describe("getApiUrlHeroDetails", () => {
  it("should return hero details by id", () => {
    const id = 1009718;
    const result = getApiUrlHeroDetails(id);

    expect(result).toBe(`${API_URL}/${id}?&apikey=${API_KEY}`);
  });

  it("should return the comics from hero id", () => {
    const id = 1009718;
    const comics = "comics";
    const result = getApiUrlHeroDetails(id, comics);

    expect(result).toBe(`${API_URL}/${id}/${comics}?&apikey=${API_KEY}`);
  });

  it("should return the series from hero id", () => {
    const id = 1111111;
    const series = "series";
    const result = getApiUrlHeroDetails(id, series);

    expect(result).toBe(`${API_URL}/${id}/${series}?&apikey=${API_KEY}`);
  });
  it("should return the stories from hero id", () => {
    const id = 2222222;
    const stories = "stories";
    const result = getApiUrlHeroDetails(id, stories);

    expect(result).toBe(`${API_URL}/${id}/${stories}?&apikey=${API_KEY}`);
  });
});
