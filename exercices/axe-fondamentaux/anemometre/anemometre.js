// @ts-check

const rapport_kmh_ms = 3.6;

/**
 *
 * @param {*} speedKmh
 * @returns
 */
export function kmhToMs(speedKmh) {
  return Number(speedKmh / rapport_kmh_ms);
}

/**
 * Calcule l'écart entre une rafale et le vent moyen.
 */
export function gustGap(gustKmh, averageKmh) {
  return Number(gustKmh - averageKmh);
}

/**
 * Calcule la moyenne de trois mesures.
 */
export function averageOfThree(speed1, speed2, speed3) {
  // TODO
}

/**
 * Indique si le vent atteint au moins 75 km/h.
 */
export function isStormAlert(speedKmh) {
  // TODO
}

/**
 * Construit le bulletin météo d'une station.
 */
export function windReport(station, speedKmh) {
  // TODO
}
