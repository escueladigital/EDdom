import { isElement, isArrayLike, isNullable } from '../shared/utils'
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
  add (selector, context = this.context) {
    if (isElement(selector)) {
      this[this.length++] = selector
    } else if (isArrayLike(selector)) {
      proto.forEach.call(selector, this.add.bind(this))
    } else {
      this.add(query(selector, context))
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
