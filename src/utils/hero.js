export const getHeroImage = (hero, size) =>
  `${hero.thumbnail.path}/${size}.${hero.thumbnail.extension}`

export const isHeroDescriptionAvailable = (hero) => {
  const heroDescription = hero.description.length > 0
  if (heroDescription) {
    return <>{hero.description}</>
  } else {
    return <>No description available</>
  }
}
