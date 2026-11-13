// @ts-check

/**
 * Additionne les numéros de ronde de 1 au nombre indiqué.
 * @param {Number} numberOfRounds le nombre de tour
 * @returns {Number} l'addition de touts les numéros de tour
 */

export function sumRounds(numberOfRounds) {
  let sum = 0;
  for (let i = 0; i < numberOfRounds; i++) {
    sum += i + 1;
  }
  return sum;
}

/**
 * Compte le nombre de caractères d'un code.
 * @param {string} code le code donné
 * @returns le nombre de charactere total du code
 */

export function countSymbols(code) {
  let sum = 0;
  for (let a of code) {
    sum++;
  }
  return sum;
}

/**
 * Compte le nombre de caractères `X` dans un code.
 * @param {*} code le code donné
 * @returns le nombre de X dans le code
 */

export function countX(code) {
  let sum = 0;
  for (let a of code) {
    if (a == "X") {
      sum++;
    }
  }
  return sum;
}

/**
 * Calcule le nombre de tours complets possibles avant épuisement de l'énergie.
 * @param {Number} energy le nombre d'énergie actuel
 * @param {Number} consumption la consommation a chaque tour
 * @returns {Number} le nombre de tour total
 */

export function turnsBeforeEmpty(energy, consumption) {
  let sum = 0;
  while (energy >= consumption) {
    energy -= consumption;
    sum++;
  }
  return sum;
}

/**
 * Retourne la première ronde pour laquelle le total dépasse une limite.
 */
export function firstRoundAbove(limit) {
  // TODO
}
