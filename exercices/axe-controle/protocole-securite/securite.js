// @ts-check

/**
 * Valide une quantité d'énergie.
 * @param {number} energy l'énergie actuelle
 * @returns {number} l'énergie si elle est positive
 */

export function validateEnergy(energy) {
  if (energy < 0) {
    throw new Error("Énergie invalide");
  } else {
    return energy;
  }
}

/**
 * Vérifie une énergie sans propager l'exception.
 * @param {number} energy l'énergie donnée
 * @returns {string} un texte qui dit si l'énergie est valide ou non
 */

export function safeEnergyCheck(energy) {
  try {
    validateEnergy(energy);
    return "Énergie valide";
  } catch {
    return "Énergie invalide";
  }
}

/**
 * Valide un code de porte autorisé.
 * @param {string} code le code donné a vérifier
 * @returns {string} le meme code si il est connu
 */

export function validateGateCode(code) {
  switch (code) {
    case "ALPHA":
      return "ALPHA";
      break;
    case "BETA":
      return "BETA";
      break;
    case "OMEGA":
      return "OMEGA";
      break;
    default:
      throw new Error("Code inconnu");
  }
}

/**
 * Vérifie un code de porte sans propager l'exception.
 * @param {*} code le code a faire validder
 * @returns {string} un message qui dit si le code est accepté ou non
 */

export function safeGateCheck(code) {
  try {
    validateGateCode(code);
    return "Code accepté";
  } catch {
    return "Code refusé";
  }
}

/**
 * Compte les tentatives valides représentées par `A` ou `B`.
 * @param {string} text le texte duquel il faut verifier les lettres
 * @returns {number} le nombre de A et B dans le texte
 */

export function countValidAttempts(text) {
  let valide = 0;
  for (let a of text) {
    if (a == "A" || a == "B") {
      valide++;
    }
  }
  return valide;
}

/**
 * Compte les tentatives effectuées jusqu'au troisième `X` ou à la fin.
 * @param {string} sequence la sequence a verifier
 * @returns {*} le nombre de choix avant de se bloquer
 */

export function attemptsBeforeLock(sequence) {
  let test = 0;
  let invalide = 0;
  for (let a of sequence) {
    test++;
    if (a == "X") {
      invalide++;
    }
    if (invalide >= 3) {
      return test;
    }
  }
  return test;
}
