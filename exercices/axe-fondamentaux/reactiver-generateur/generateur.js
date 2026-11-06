// @ts-check

/**
 * Calcule la quantité d'énergie manquante.
 *@param {number} maxEnergy
 *@param {number} currentEnergy
 */

export function missingEnergy(maxEnergy, currentEnergy) {
  return maxEnergy - currentEnergy;
}

/**
 *
 * @param {*} maxEnergy
 * @param {*} currentEnergy
 * @returns
 */
export function energyPercentage(maxEnergy, currentEnergy) {
  return (currentEnergy / maxEnergy) * 100;
}

/**
 *
 * @param {*} currentEnergy
 * @param {*} recharge
 * @returns
 */
export function energyAfterRecharge(currentEnergy, recharge) {
  return currentEnergy + recharge;
}

/**
 * Indique si le générateur possède au moins 500 unités d'énergie.
 */
export function isGeneratorReady(currentEnergy) {
  if (currentEnergy < 500) {
    return false;
  } else {
    return true;
  }
}

/**
 *
 * @param {*} name
 * @param {*} currentEnergy
 * @returns
 */
export function generatorStatus(name, currentEnergy) {
  return name + " possède " + currentEnergy + " unités d'énergie.";
}
