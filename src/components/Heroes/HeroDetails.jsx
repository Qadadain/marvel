import React from "react";

// loadHeroDetails = (hero_details) => {
//     if (hero_details.id) {
//         return
//     }
// }
const HeroDetails = (hero_details, value) => {
  return <div style={{ color: "white" }}>{hero_details.name}</div>;
};

export default HeroDetails;
