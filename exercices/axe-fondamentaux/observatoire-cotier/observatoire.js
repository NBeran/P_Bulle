// @ts-check

/**
 * Retourne le type JavaScript de la donnée.
 * @param {*} value  la valeur qui nous est arrivée
 * @returns {string}  retourne le type de la valeur
 */
export function dataType(value) {
  return typeof value;
}

/**
 * Indique si le comptage vaut undefined.
 * @param {*} count la valeur fournie
 * @returns {boolean} retourne true si il n'y a aucune valeur (undefined)
 */

export function isNotTransmitted(count) {
  return count === undefined;
}

/**
 * Indique si le comptage vaut null.
 * @param {*} count la valeur fournie
 * @returns {boolean} retourne true si la valeur est égale a null
 */

export function isOffline(count) {
  return count === null;
}

/**
 * Indique si un comptage est disponible, c'est-à-dire
 * différent de undefined et de null.
 * @param {*} count la valeur fournie
 * @returns {boolean} retourne true si c'est une vraie valeur et pas null/undefined
 */

export function hasBirdCount(count) {
  return count != null && count != undefined;
}

/**
 * Additionne les deux comptages.
 * Un comptage indisponible compte pour 0.
 * @param {*} northCount la valeur fournie au nord
 * @param {*} southCount la valeur fournie au sud
 * @returns {Number} retourne le résultat de l'addition des 2
 */

export function totalBirds(northCount, southCount) {
  if (northCount === null || northCount === undefined) {
    northCount = 0;
  }
  if (southCount === null || southCount == undefined) {
    southCount = 0;
  }
  return Number(northCount) + Number(southCount);
}

/**
 * Indique si la hauteur est de type number et n'est pas NaN.
 * @param {*} height la valeur fournie
 * @returns {boolean} retourne true si c'est un nombre qui n'est pas NaN
 */

export function isValidWaveHeight(height) {
  return typeof height == "number" && !isNaN(height);
}
