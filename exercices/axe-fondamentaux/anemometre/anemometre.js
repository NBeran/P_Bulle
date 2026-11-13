// @ts-check

const rapport_kmh_ms = 3.6;

/**
 *
 * @param {Number} speedKmh // la vitesse en km/h
 * @returns {Number} // retourne la vitesse en m/s
 */
export function kmhToMs(speedKmh) {
  return speedKmh / rapport_kmh_ms;
}

/**
 *
 * @param {Number} gustKmh  //la vitesse de la rafalle de vent actuelle
 * @param {Number} averageKmh  //la vitesse moyenne du vent
 * @returns {Number} //retourne de combien le vent actuelle dépasse la moyenne
 */
export function gustGap(gustKmh, averageKmh) {
  return gustKmh - averageKmh;
}

/**
 *
 * @param {Number} speed1 // la première mesure de vent
 * @param {Number} speed2 // la deuxième mesure de vent
 * @param {Number} speed3 // la troisième mesure de vent
 * @returns {Number} //retourne la moyenne du vent
 */
export function averageOfThree(speed1, speed2, speed3) {
  return (speed1 + speed2 + speed3) / 3;
}

/**
 *
 * @param {number} speedKmh //la vitesse du vent
 * @returns {boolean} //retourne si il faut afficher une allerte tempete ou non
 */
export function isStormAlert(speedKmh) {
  return speedKmh >= 75;
}

/**
 *
 * @param {string} station // le nom de la station
 * @param {*} speedKmh // la vitesse du vent en km/h
 * @returns // retourne la vitesse du vent en km/h et m/s a la station donnée
 */
export function windReport(station, speedKmh) {
  return `${station} : vent de ${speedKmh} km/h (${kmhToMs(speedKmh)} m/s).`;
}
