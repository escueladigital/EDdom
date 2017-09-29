import EDdom from './classes/EDdom'

/**
 * Envoltura para evitar tener que instanciar la clase `EDdom`
 *
 * @param {*} args
 *
 * @return {EDdom}
 *
 * @api public
 */
export default function edDom (...args) {
  return new EDdom(...args)
}

/**
 * Crea un elemento con los atributos y lo retorna como un EDdom object
 *
 * @param {string} tag
 * @param {Object} attrs
 * @param {Array} children
 *
 * @return {EDdom}
 *
 * @api public
 */
edDom.create = (tag, attrs = {}, children = []) => {
  return edDom(document.createElement(tag)).attr(attrs).append(children)
}

// Definir un alias en caso de que no esté definido
if (window.$ == null) window.$ = edDom
