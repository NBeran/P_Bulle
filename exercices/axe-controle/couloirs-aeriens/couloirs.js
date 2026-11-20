// @ts-check

export const MAX_DRONES_PER_CORRIDOR = 5;

/**
 * Valide une altitude autorisée.
 * @param {number} altitude l'altitude du drone
 * @returns {number} l'altitude si il n'y a pas d'erreur
 */

export function validateAltitude(altitude) {
  switch (altitude) {
    case 50:
      return altitude;
      break;
    case 100:
      return altitude;
      break;
    case 150:
      return altitude;
      break;
    default:
      throw new Error(`Altitude interdite : ${altitude} m`);
  }
}

/**
 * Compte les drones présents à une altitude.
 * @param {*} altitudes liste de touts les dornes
 * @param {*} altitude l'altitude ou on veut regarder le nombre
 * @returns {number} le nombre de drone dans l'altitude demandée
 */

export function countAtAltitude(altitudes, altitude) {
  let nbr = 0;
  for (let a of altitudes) {
    if (a == altitude) {
      nbr++;
    }
  }
  return nbr;
}

/**
 * Vérifie qu'un couloir ne dépasse pas sa capacité.
 * @param {*} altitudes la liste des altitude
 * @param {*} altitude l'altitude que on veut verifier
 * @returns {number} le nombre de drone a l'altitude demandée si il n'y a pas d'erreur
 */

export function checkCorridor(altitudes, altitude) {
  if (countAtAltitude(altitudes, altitude) > MAX_DRONES_PER_CORRIDOR) {
    throw new Error(`Collision à ${altitude} m`);
  } else {
    return countAtAltitude(altitudes, altitude);
  }
}

/**
 * Vérifie les altitudes et la capacité de tous les couloirs.
 * @param {*} altitudes la liste de tous les drones dans le ciel
 * @returns {string} dit que l'espace aérien est sur si tout est ok
 */

export function checkAirspace(altitudes) {
  for (let a of altitudes) {
    validateAltitude(a);
  }
  for (let a = 50; a <= 150; a += 50) {
    checkCorridor(altitudes, a);
  }
  return "Espace aérien sûr";
}

/**
 * Produit un rapport sans propager les erreurs de validation.
 * @param {*} altitudes liste des différentes hauteur de drones
 * @returns {*} retourne un texte qui dit l'erreur ou que tout vas
 */

export function airspaceReport(altitudes) {
  try {
    checkAirspace(altitudes);
    return "Espace aérien sûr";
  } catch (error) {
    if (error instanceof Error) {
      return `Alerte : ${error.message}`;
    }
  }
}
