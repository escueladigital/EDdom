import { isString, isArrayLike, isNullable } from '../shared/utils'

/**
 * Obtiene el tipo y nombre de un selector
 *
 * @type {RegExp}
 */
const SELECTOR_REGEX = /^([#.]?)([\w-]+)$/

/**
 * Tipos de selector como clave, y métodos de consulta como valor
 *
 * @enum {string}
 */
const queryMethods = {
  '#': 'getElementById',
  '': 'getElementsByTagName',
  '.': 'getElementsByClassName'
}

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
    let queryMethod = 'querySelectorAll'
    const selectorMatch = SELECTOR_REGEX.exec(selector)

    if (selectorMatch) {
      selector = selectorMatch[2]
      queryMethod = queryMethods[selectorMatch[1]]
      if (selectorMatch[1] === '#') context = document
    }

    selector = context[queryMethod](selector)
  }

  return isNullable(selector) || isArrayLike(selector) ? selector : [selector]
}
