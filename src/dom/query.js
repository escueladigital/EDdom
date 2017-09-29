import { isString, isArrayLike, isNullable } from '../shared/utils'

/**
 * Obtiene el tipo de selector
 *
 * @type {RegExp}
 */
const SELECTOR_TYPE_REGEX = /^([#.]?)[\w-]+$/

/**
 * Consulta y obtiene elemento(s) del DOM
 *
 * @param {(string|HTMLElement|NodeList|HTMLCollection|Array)=} selector
 * @param {HTMLElement} context
 *
 * @return {HTMLElement|NodeList|HTMLCollection|Array}
 *
 * @api private
 */
export default (selector, context) => {
  if (isString(selector)) {
    const method = _getOptimumMethod(selector)
    const isSelectorID = method === 'getElementById'

    if (isSelectorID || method === 'getElementsByClassName') {
      selector = selector.replace(/^[#.]/, '')
    }

    selector = (isSelectorID ? document : context)[method](selector)
  }

  return isNullable(selector) || isArrayLike(selector) ? selector : [selector]
}

/**
 * Obtiene el método más óptimo para seleccionar los elementos del DOM
 *
 * @param {string} selector
 *
 * @return {string}
 *
 * @api private
 */
export function _getOptimumMethod (selector) {
  const match = SELECTOR_TYPE_REGEX.exec(selector)

  // Selector complejo
  if (!match) return 'querySelectorAll'

  // Selector simple
  switch (match[1]) {
    case '#': return 'getElementById'
    case '.': return 'getElementsByClassName'
    default : return 'getElementsByTagName'
  }
}
