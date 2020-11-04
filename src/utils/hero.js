export const getHeroImage = (hero, size) =>
  `${hero.thumbnail.path}/${size}.${hero.thumbnail.extension}`;
