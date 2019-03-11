/**
 * Function gets age in seconds  and 
 * returns array of his age on each planet of Solar system
 * in years.
 */
const getAgeOnEachPlanet = (age) => {
  const yearEarthMatrix = {
    earth: 1,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
  };

  const year = 365*24*60*60; 
  const res = {};
  for (let planet in yearEarthMatrix) {
    res[planet] = yearEarthMatrix[planet]*(age/year);
  }
  return res;
}

console.log(getAgeOnEachPlanet(3600*24*365*19));