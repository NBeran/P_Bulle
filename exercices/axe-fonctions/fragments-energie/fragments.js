// @ts-check

/**
 * Additionne un nombre variable de fragments d'énergie.
 * @param  {...any} fragments touts les nombres a additionner
 * @returns {number} le resultat de l'addition
 */

export function sumFragments(...fragments) {
  let result = 0;
  for (let a of fragments) {
    result += a;
  }
  return result;
}

/**
 * Compte le nombre de fragments reçus.
 * @param  {...any} fragments le nonbre a dditionner
 * @returns {number} le nombre de nombre dans la liste donnée
 */

export function countFragments(...fragments) {
  let result = 0;
  for (let a of fragments) {
    result++;
  }
  return result;
}

/**
 * Calcule la moyenne des fragments reçus.
 * @param  {...any} fragments les nombre a faire la moyenne
 * @returns {number} la moyenne des nombres
 */

export function averageFragments(...fragments) {
  let result = 0;
  for (let a of fragments) {
    result += a;
  }
  return result / fragments.length;
}

/**
 * Ajoute la somme des fragments à une valeur de base.
 * @param {number} base le nombre de base qui est indispensable
 * @param  {...any} fragments les autres nombre a additionner
 * @returns {number} le resultat de cette addition
 */

export function totalWithBase(base, ...fragments) {
  let result = base;
  result = result + sumFragments(...fragments);

  return result;
}

/**
 * Construit un libellé indiquant le nombre de valeurs.
 * @param {string} name le nom de la valeur
 * @param  {...any} values les différentes valeur
 * @returns {string} une phrase qui fusionne les 2
 */

export function formulaLabel(name, ...values) {
  let result = countFragments(...values);
  return `${name} : ${result} valeurs`;
}

/**
 * Prépare un résumé contenant la somme des valeurs.
 */
export function prepareMixture(name, ...values) {
  let result = sumFragments(...values);
  return `${name} = ${result}`;
}
