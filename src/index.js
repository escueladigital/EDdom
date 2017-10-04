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
export default function $ (...args) {
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
$.create = (tag, attrs = {}, children = []) => {
  if (Array.isArray(attrs)) {
    children = attrs
    attrs = {}
  }

  return $(document.createElement(tag)).attr(attrs).append(children)
}
