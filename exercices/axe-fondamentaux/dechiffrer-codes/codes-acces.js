// @ts-check

/**
 * Convertit une valeur en nombre.
 * @param {string} value la valeur recue
 * @returns {Number} le nombre qui est dans la valeur
 */
export function convertCode(value) {
  return Number(value);
}

/**
 * Compare deux valeurs avec l'égalité souple.
 * @param {*} value1 la première valeur
 * @param {*} value2 la 2eme valeur
 * @returns {boolean} retourne true si c'est le meme texte
 */
export function sameCodeLoose(value1, value2) {
  return value1 == value2;
}

/**
 * Compare deux valeurs avec l'égalité stricte.
 * @param {*} value1 première valeur
 * @param {*} value2 deuxième valeur
 * @returns {boolean} retourne true si c'est strictement la meme valeur (2 int par ex)
 */
export function sameCodeStrict(value1, value2) {
  return value1 === value2;
}

/**
 * Indique si un code est pair.
 * @param {Number} code le code recu
 * @returns {boolean} retourne true si c'est pair
 */
export function isEvenCode(code) {
  return code % 2 == 0;
}

/**
 * Indique si la conversion de la valeur produit NaN.
 * @param {*} value la valeur recue
 * @returns {boolean} retourne true si le code est valide
 */
export function isInvalidCode(value) {
  return isNaN(value);
}
