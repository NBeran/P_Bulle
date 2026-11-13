// @ts-check

/**
 * Retourne le type JavaScript de la valeur.
 * @param {*} value la valeur fournie
 * @returns {string} retourne le type de la valeur donnée
 */
export function valueType(value) {
  return typeof value;
}

/**
 * Indique si la valeur est undefined.
 * @param {*} value la valeur fournie
 * @returns {boolean} retourne true si la valeur est undefined
 */
export function isUndefined(value) {
  return value === undefined;
}

/**
 * Indique si la valeur est null.
 * @param {*} value la valeur fournie
 * @returns {boolean} retourne true si la valeur est null
 */
export function isNull(value) {
  return value === null;
}

/**
 * Indique si une valeur est connue, c'est-à-dire
 * différente de undefined et de null.
 * @param {*} value la valeur fournie
 * @returns {boolean} retourne true si la valeur est pas null ni undefined
 */
export function hasKnownValue(value) {
  return value !== null && value !== undefined;
}

/**
 * Compare l'énergie disponible à l'énergie minimale.
 * Les deux valeurs sont converties en nombres.
 * @param {*} energy l'énergie actuelle
 * @param {*} minimumEnergy l'énergie minimale
 * @returns {boolean} retourne si il y a assez d'énergie
 */
export function hasEnoughEnergy(energy, minimumEnergy) {
  return Number(energy) >= Number(minimumEnergy);
}

/**
 * Compare strictement le nom de la zone attendue.
 * @param {string} zone la zone actuelle
 * @param {string} expectedZone la zone qui doit etre
 * @returns {boolean} retourne si les 2 zones sonts bien iddentiques
 */
export function isCorrectZone(zone, expectedZone) {
  return zone === expectedZone;
}
