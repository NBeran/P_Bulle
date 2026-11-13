// @ts-check

/**
 * Calcule la quantité d'énergie manquante.
 *@param {number} maxEnergy l'énergie maximum
 *@param {number} currentEnergy l'énegie actuelle
 * @returns {Number} le nombre d'énergie manquante pour arriver au max
 */

export function missingEnergy(maxEnergy, currentEnergy) {
  return maxEnergy - currentEnergy;
}

/**
 *
 * Calcule le pourcentage d'énergie disponible.
 * @param {Number} maxEnergy l'énergie maximum
 * @param {Number} currentEnergy l'énergie actuelle
 * @returns {Number} le pourcentage d'énegie qu'il reste
 */
export function energyPercentage(maxEnergy, currentEnergy) {
  return (currentEnergy / maxEnergy) * 100;
}

/**
 * Calcule l'énergie disponible après une recharge.
 * @param {Number} currentEnergy l'énergie actuelle
 * @param {Number} recharge l'énergie qui a chargé
 * @returns {Number} la batterie apres avoir chargé
 */
export function energyAfterRecharge(currentEnergy, recharge) {
  return currentEnergy + recharge;
}

/**
 *
 * @param {Number} currentEnergy l'énergie actuelle
 * @returns {boolean} si il y a assez d'énergie ou non
 */
export function isGeneratorReady(currentEnergy) {
  return currentEnergy >= 500;
}

/**
 *
 * @param {string} name le nom du generateur
 * @param {number} currentEnergy sa batterie actuelle
 * @returns {string} un texte qui donne le generateur + sa batterie
 */
export function generatorStatus(name, currentEnergy) {
  return `${name} possède ${currentEnergy} unités d'énergie.`;
}
