// @ts-check

/**
 * Convertit un relevé en nombre.
 * @param {string} value // la valeur en string
 * @returns {Number} // retourne la meme valeur mais en int
 */
export function readRainfall(value) {
  return Number(value);
}

/**
 * Additionne deux relevés après les avoir convertis en nombres.
 * @param {string} morning // la relevée d'eau le matin en string
 * @param {string} evening // la relevée d'eau le soir en string
 * @returns {Number} // retourne l'addition des 2 relevée d'eau
 */
export function totalRainfall(morning, evening) {
  return Number(morning) + Number(evening);
}

/**
 * Indique si l'heure correspond à un relevé automatique (toutes les 3 heures).
 * @param {Number} hour // l'heure de la relevée
 * @returns {Boolean} // si l'eure est dans les horraires des relevées
 */
export function isScheduledHour(hour) {
  return hour % 3 == 0;
}

/**
 * Indique si la conversion du relevé produit NaN.
 * @param {*} value // la valeur recue par les pluviometres
 * @returns {boolean} // si la valeur est bien un nombre ou non
 */
export function isFaultyReading(value) {
  return isNaN(value);
}

/**
 * Compare strictement deux relevés après conversion en nombres.
 * @param {*} manual // la relevée du gardien
 * @param {*} automatic // la relevée automatique
 * @returns {boolean} // retourne si les 2 valeurs sonts identiques ou non
 */

export function isConfirmedReading(manual, automatic) {
  return Number(manual) === Number(automatic);
}
