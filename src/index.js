import EDdom from './classes/EDdom'
import query from './dom/query'

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
 * Crea un elemento con los atributos e hijos pasados,
 * y lo retorna como un objeto EDdom
 *
 * @param {string} tag
 * @param {(Object|Array)=} attrs
 * @param {Array=} children
 *
 * @return {EDdom}
 *
 * @api public
 */
edDom.create = (tag, attrs = {}, children = []) => {
  if (Array.isArray(attrs)) {
    children = attrs
    attrs = {}
  }

  return edDom(document.createElement(tag)).attr(attrs).append(children)
}

// Exponemos la función interna
edDom.query = query

// Definir un alias en caso de que no esté definido
if (window.$ == null) window.$ = edDom
