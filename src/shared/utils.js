/**
 * Determina si el valor pasado es una cadena
 *
 * @param {*} value
 *
 * @return {boolean}
 *
 * @api private
 */
export function isString (value) {
  return typeof value === 'string'
}


/**
 * Determina si el valor pasado se comporta como arreglo
 *
 * @param {*} value
 *
 * @return {boolean}
 *
 * @api private
 */
export function isArrayLike (value) {
  return isObject(value) && 'length' in value
}


/**
 * Determina si el valor pasado es un objeto
 *
 * @param {*} value
 *
 * @return {boolean}
 *
 * @api private
 */
export function isObject (value) {
  return value !== null && typeof value === 'object'
}


/**
 * Determina si el valor pasado es nulo o indefinido
 *
 * @param {*} value
 *
 * @return {boolean}
 *
 * @api private
 */
export function isNullable (value) {
  return value == null
}


/**
 * Determina si el valor pasado es un elemento HTML
 *
 * @param {*} value
 *
 * @return {boolean}
 */
export function isElement (value) {
  return value instanceof HTMLElement
}
