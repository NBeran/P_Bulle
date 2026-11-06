// @ts-check

/**
 *
 * @param {*} value
 * @returns
 */
export function convertCode(value) {
  return parseInt(value);
}

/**
 *
 * @param {*} value1
 * @param {*} value2
 * @returns
 */
export function sameCodeLoose(value1, value2) {
  if (value1 == value2) {
    return true;
  } else {
    return false;
  }
}

/**
 *
 * @param {*} value1
 * @param {*} value2
 */
export function sameCodeStrict(value1, value2) {
  if (value1 === value2) {
    return true;
  } else {
    return false;
  }
}

/**
 *
 * @param {*} code
 * @returns
 */
export function isEvenCode(code) {
  if (code % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

/**
 * Indique si la conversion de la valeur produit NaN.
 */
export function isInvalidCode(value) {
  if (isNaN(value)) {
    return true;
  } else {
    return false;
  }
}
