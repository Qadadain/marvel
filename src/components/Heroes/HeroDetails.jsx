import React from "react";

// loadHeroDetails = (hero_details) => {
//     if (hero_details.id) {
//         return
//     }
// }
const HeroDetails = (hero_details, value) => {
  console.log("hero details value", value);
  console.log("hero details ", hero_details);
  return <div style={{ color: "white" }}>{hero_details.name}</div>;
};

export default HeroDetails;
