// @ts-check

/**
 * Double une charge.
 * @param {number} charge la charge actuelle
 * @returns {number} le double de la charge de depart
 */

export function doubleCharge(charge) {
  return charge * 2;
}

/**
 * Calcule une puissance à partir d'une base et d'un multiplicateur.
 * @param {number} base la puissance de base
 * @param {number} multiplier le numbre par lequel le multiplier
 * @returns {number} le resultat de cette multiplication
 */

export function forgePower(base, multiplier) {
  return base * multiplier;
}

/**
 * Stabilise une énergie avec un facteur, égal à 2 par défaut.
 * @param {number} energy l'énergie au depart
 * @param {number} factor le nombre par lequel le multiplier, de base 2
 * @returns {number} le resultat de la multiplication
 */

export function stabilizeEnergy(energy, factor = 2) {
  return energy * factor;
}

/**
 * Construit un message de la Forge.
 * @param {string} element l'element
 * @param {string} prefix le prefix
 * @returns {string} un texte de l'addition des 2
 */

export function forgeMessage(element, prefix = "Forge") {
  return `${prefix} : ${element}`;
}

/**
 * Calcule l'énergie restante après une perte.
 * @param {number} energy l'energie de base
 * @param {number} loss l'énergie perdue
 * @returns {number} le resultat de l'énergie moin les pertes
 */

export function calculateOutput(energy, loss) {
  let remainingEnergy = energy - loss;
  return remainingEnergy;
}

/**
 * Calcule puis amplifie l'énergie restante.
 * @param {number} energy l'énergie de base
 * @param {number} loss l'énergie perdue
 * @param {number} factor le nombre par lequel multiplier le resultat
 * @returns {number} le resultat de toutes les équations
 */

export function boostedOutput(energy, loss, factor = 2) {
  let result = calculateOutput(energy, loss);
  return stabilizeEnergy(result, factor);
}
