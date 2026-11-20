// @ts-check

export const UNIVERSITIES = [
  "Académie Babbage",
  "Institut Lovelace",
  "Université Hopper",
  "École Dijkstra",
  "Collège Von Neumann",
];

export const MASTER_REQUIRED = ["Institut Lovelace", "École Dijkstra"];

/**
 * Indique si une université est connue.
 * @param {string} university l'universite du visiteur
 * @returns {boolean} true si l'universite du visiteur fait partie de la liste sinon false
 */

export function isKnownUniversity(university) {
  for (let i = 0; i < UNIVERSITIES.length; i++) {
    if (university == UNIVERSITIES[i]) {
      return true;
    }
  }
  return false;
}

/**
 * Convertit un titre en niveau numérique.
 * @param {string} title le titre du visiteur
 * @returns {number} le numero donné en fonction du titre
 */

export function titleLevel(title) {
  switch (title) {
    case "Bachelor":
      return 1;
      break;
    case "Master":
      return 2;
      break;
    default:
      return 0;
  }
}

/**
 * Indique si une université exige un Master.
 * @param {string} university l'universite
 * @returns {boolean} retourne true si l'univerite require un master sinon non
 */

export function requiresMaster(university) {
  for (let i = 0; i < MASTER_REQUIRED.length; i++) {
    if (university == MASTER_REQUIRED[i]) {
      return true;
    }
  }
  return false;
}

/**
 * Indique si un visiteur est considéré comme fiable.
 * @param {string} university l'universite du visiter
 * @param {string} title le titre du visiter
 * @returns {boolean} retourne true si le visiteur est "digne de confiance" sinon false
 */

export function isTrusted(university, title) {
  let UniReconnue = UNIVERSITIES.includes(university);
  let master = title == "Master";
  let Bachelor = title == "Bachelor" || title == "Master";
  let besoimaster = MASTER_REQUIRED.includes(university);

  if (UniReconnue && Bachelor && (!besoimaster || master)) {
    return true;
  } else {
    return false;
  }
}

/**
 * Construit le message d'accueil selon l'université et le titre.
 * @param {string} university l'universite du visiteur
 * @param {String} title le titre du visiteur
 * @returns {*} un message en fonction de ce que l'utilisateur a
 */

export function welcomeMessage(university, title) {
  let UniReconnue = UNIVERSITIES.includes(university);
  let master = title == "Master";
  let Bachelor = title == "Bachelor" || title == "Master";
  let besoimaster = MASTER_REQUIRED.includes(university);
  if (!UniReconnue) {
    return "Université inconnue";
  } else if (!Bachelor) {
    return "Titre inconnu";
  } else if (besoimaster && !master) {
    return "Master requis";
  } else {
    return "Bienvenue dans la Citadelle";
  }
}

/**
 * Vérifie que tous les visiteurs sont fiables.
 * @param {string} universities toutes les unis des visiteurs
 * @param {string} titles touts les titres des visiteurs
 * @returns {boolean} true si toutle monde est de confiance
 */

export function allTrusted(universities, titles) {
  let trust = 0;
  for (let a = 0; a <= universities.length; a++) {
    if (isTrusted(universities[a], titles[a])) {
      trust++;
    }
  }
  return trust == universities.length;
}
