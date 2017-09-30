import { isElement, isNullable } from '../shared/utils'
import query from '../dom/query'

/**
 * @alias Array.prototype
 */
const proto = Array.prototype

export default class Stack {
  /**
   * Número de elementos en la colección
   *
   * @member {number}
   */
  length = 0

  /**
   * Añade elementos a la colección
   *
   * @param {string|HTMLElement|NodeList|HTMLCollection|Array} selector
   * @param {HTMLElement=} context
   *
   * @return {Stack}
   *
   * @api public
   */
  add (selector, context = document.body) {
    const elements = query(selector, context)

    if (!isNullable(elements)) {
      proto.forEach.call(elements, element => {
        if (isElement(element)) {
          this[this.length++] = element
        }
      })
    }

    return this
  }

  /**
   * Itera los elementos de la colección
   *
   * @param {Function} iterator
   *
   * @return {Stack}
   *
   * @api public
   */
  each (iterator) {
    proto.forEach.call(this, iterator)
    return this
  }

  /**
   * Verifica algún elemento en la colección si cumple
   * con la confición que retorna el `callback`
   *
   * @param {Function} callback
   *
   * @return {boolean}
   *
   * @api public
   */
  some (callback) {
    return proto.some.call(this, callback)
  }
}

if (typeof Symbol === 'function' && !isNullable(Symbol.iterator)) {
  // Hacer iterable el Stack
  Stack.prototype[Symbol.iterator] = proto[Symbol.iterator]
}
