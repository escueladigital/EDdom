/**
 * @alias Array.prototype
 */
const proto = Array.prototype

// Clase encargada de emular algunos métodos de Array.prototype
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
   * @param {*} elements
   *
   * @return {Stack}
   *
   * @api public
   */
  add (...elements) {
    proto.push.apply(this, elements)
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
