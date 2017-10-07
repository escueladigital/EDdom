/**
 * Obtiene el tipo y nombre de un selector
 *
 * @type {RegExp}
 */
const SELECTOR_REGEX = /^([#.]?)(\*|[\w-]+)$/

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
 * @param {string} selector
 * @param {HTMLElement} context
 *
 * @return {NodeList|HTMLCollection|Array}
 *
 * @api private
 */
export default (selector, context) => {
  let shouldWrapResult = false
  let queryMethod = 'querySelectorAll'
  const selectorMatch = SELECTOR_REGEX.exec(selector)

  if (selectorMatch) {
    selector = selectorMatch[2]
    queryMethod = queryMethods[selectorMatch[1]]

    if (selectorMatch[1] === '#') {
      context = document
      shouldWrapResult = true
    }
  }

  const elements = context[queryMethod](selector)

  return shouldWrapResult ? [elements] : elements
}
