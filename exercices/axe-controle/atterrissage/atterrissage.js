// @ts-check

export const DESCENT_SPEED = -10;
export const MAX_WIND = 3;

/**
 * Calcule la vitesse verticale en tenant compte du vent.
 * @param {number} wind la force du vent
 * @returns {number} la vitesse réelle
 */

export function verticalSpeed(wind) {
  return DESCENT_SPEED + wind;
}

/**
 * Calcule l'altitude suivante du drone.
 * @param {number} altitude l'altitude du drone
 * @param {number} wind la force du vent
 * @returns {number} l'altitude apres 1s de descente
 */

export function nextAltitude(altitude, wind) {
  if (altitude + DESCENT_SPEED + wind < 0) {
    return 0;
  }
  return altitude + DESCENT_SPEED + wind;
}

/**
 * Génère une valeur aléatoire de vent.
 * @returns {number} retourne un vent aléatoire
 */

export function randomWind() {
  return Math.random() * MAX_WIND;
}

/**
 * Simule un atterrissage et compte sa durée.
 * @param {number} startAltitude l'altitude de depars du drone
 * @returns {number} le temps que le drone a pris a se poser
 */

export function landingDuration(startAltitude) {
  let wind = 0;
  let s = 0;
  while (startAltitude > 0) {
    wind = randomWind();
    startAltitude = nextAltitude(startAltitude, wind);
    s++;
  }
  return s;
}

/**
 * Indique si le drone atterrit avant l'épuisement de sa batterie.
 * @param {number} startAltitude l'altitude a laquelle le drone pars
 * @param {number} battery la batterie restante du dron
 * @returns {boolean} retourne true si le drone a réhussi a se pauser
 */

export function hasGracefullyLanded(startAltitude, battery) {
  let wind = 0;
  while (startAltitude > 0) {
    wind = randomWind();
    startAltitude = nextAltitude(startAltitude, wind);
    battery--;
    if (battery < 0) {
      return false;
    }
  }
  return true;
}
