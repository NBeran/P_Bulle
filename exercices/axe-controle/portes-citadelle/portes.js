// @ts-check

/**
 * Retourne le message d'accès correspondant au niveau.
 * @param {Number} level le niveau actuel
 * @returns {string} retourne le message a afficher en fonction du niveau
 */

export function accessMessage(level) {
  if (level >= 5) {
    return "Accès autorisé";
  } else {
    return "Accès refusé";
  }
}

/**
 * Retourne l'état textuel d'une porte.
 * @param {boolean} isOpen true si la porte est actuellement ouverte
 * @returns {string} retourne un texte qui dit si elle est ouverte ou fermée
 */
export function doorStatus(isOpen) {
  if (isOpen) {
    return "Ouverte";
  } else {
    return "Fermée";
  }
}

/**
 * Retourne le nom de la zone correspondant à un code.
 * @param {string} code le code fourni
 * @returns {string} le nom de la zone
 */

export function zoneName(code) {
  switch (code) {
    case (code = "N"):
      return "Les Fondations";
    case (code = "E"):
      return "Les Archives";
    case (code = "SE"):
      return "La Forge";
    case (code = "SO"):
      return "La Citadelle";
    case (code = "O"):
      return "La Faille";
    default:
      return "Zone inconnue";
  }
}

/**
 * Détermine le niveau d'alerte selon l'énergie disponible.
 * @param {Number} energy l'énergie actuelle
 * @returns {string} un texte qui dit le niveau de batterie
 */
export function alertLevel(energy) {
  if (energy < 20) {
    return "CRITIQUE";
  } else if (energy <= 49) {
    return "FAIBLE";
  } else if (energy <= 79) {
    return "STABLE";
  } else {
    return "OPTIMAL";
  }
}
