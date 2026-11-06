// @ts-check

/**
 * Calcule la quantité d'énergie manquante.
 *@param {number} maxEnergy l'énergie maximum
 *@param {number} currentEnergy l'énegie actuelle
 * @returns {Number} le nombre d'énergie manquante pour arriver au max
 */

export function missingEnergy(maxEnergy, currentEnergy) {
  return Number(maxEnergy - currentEnergy);
}

/**
 *
 * Calcule le pourcentage d'énergie disponible.
 * @param {*} maxEnergy l'énergie maximum
 * @param {*} currentEnergy l'énergie actuelle
 * @returns {Number} le pourcentage d'énegie qu'il reste
 */
export function energyPercentage(maxEnergy, currentEnergy) {
  return Number((currentEnergy / maxEnergy) * 100);
}

/**
 * Calcule l'énergie disponible après une recharge.
 * @param {*} currentEnergy l'énergie actuelle
 * @param {*} recharge l'énergie qui a chargé
 * @returns {Number} la batterie apres avoir chargé
 */
export function energyAfterRecharge(currentEnergy, recharge) {
  return Number(currentEnergy + recharge);
}

/**
 *
 * @param {*} currentEnergy l'énergie actuelle
 * @returns {boolean} si il y a assez d'énergie ou non
 */
export function isGeneratorReady(currentEnergy) {
  if (currentEnergy <= 500) {
    return Boolean(false);
  } else {
    return Boolean(true);
  }
}

/**
 *
 * @param {*} name
 * @param {*} currentEnergy
 * @returns
 */
export function generatorStatus(name, currentEnergy) {
  return `${name} possède ${currentEnergy} unités d'énergie`;
}
