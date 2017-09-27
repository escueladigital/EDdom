import { isString, isObject, isArrayLike, isNullable } from '../shared/utils'
import query from '../dom/query'
import iterable from '../decorators/iterable'
import Stack from './Stack'


export default class EDdom extends Stack {

  /**
   * Selector de elementos
   *
   * @member {string}
   */
  selector = ''


  /**
   * Contexto al consultar elementos
   *
   * @member {HTMLElement}
   */
  context = document.body


  /**
   * Crea una nueva instancia de EDdom
   *
   * @constructor
   *
   * @param {*} selector
   * @param {*} context
   */
  constructor (selector, context) {
    super()

    if (!isNullable(context)) {
      this.context = context
    }

    if (isString(selector)) {
      this.selector = selector
    }

    const elements = query(selector, this.context)

    if (isArrayLike(elements)) this.add(...elements)
  }


  /**
   * Escucha un evento en todos los elementos de la colección
   *
   * @alias Element.prototype.addEventListener
   *
   * @param {string} event
   * @param {Function} listener
   *
   * @return {EDdom}
   *
   * @api public
   */
  @iterable
  on (element, event, listener) {
    element.addEventListener(event, listener)
  }


  /**
   * Deja de escuchar un evento de todos los elementos de la colección
   *
   * @alias Element.prototype.removeEventListener
   *
   * @param {string} event
   * @param {Function} listener
   *
   * @return {EDdom}
   *
   * @api public
   */
  @iterable
  off (element, event, listener) {
    element.removeEventListener(event, listener)
  }


  /**
   * Añade una clase a todos los elementos en la colección
   *
   * @param {string} klass
   *
   * @return {EDdom}
   *
   * @api public
   */
  @iterable
  addClass (element, klass) {
    element.classList.add(klass)
  }


  /**
   * Añade/remueve una clase de todos los elementos en la colección
   *
   * @param {string} klass
   *
   * @return {EDdom}
   *
   * @api public
   */
  @iterable
  toggleClass (element, klass) {
    element.classList.toggle(klass)
  }


  /**
   * Remueve la clase dada en todos los elementos de la colección
   *
   * @param {string} klass
   *
   * @return {EDdom}
   *
   * @api public
   */
  @iterable
  removeClass (element, klass) {
    element.classList.remove(klass)
  }


  /**
   * Envuelva a cada elemento de la colección con el elemento dado
   *
   * @param {HTMLElement} wrapper
   *
   * @return {EDdom}
   *
   * @api public
   */
  @iterable
  wrap (element, wrapper) {
    const wrapperClone = wrapper.cloneNode(false)
    element.parentElement.insertBefore(wrapperClone, element)
    wrapperClone.appendChild(element)
  }


  /**
   * Verifica si en la colección un elemento tiene la clase dad
   *
   * @param {string} klass
   *
   * @return {boolean}
   *
   * @api public
   */
  hasClass (klass) {
    return this.some(element => element.classList.contains(klass))
  }


  /**
   * Añade/remueve atributos de los elementos en la colección
   *
   * @param {string|Object} name
   * @param {string=} value
   *
   * @return {EDdom|string|null}
   *
   * @api public
   */
  attr (name, value) {
    if (isObject(name)) {
      const attributes = name

      for (const attribute in attributes) {
        if (attributes.hasOwnProperty(attribute)) {
          this.attr(attribute, attributes[attribute])
        }
      }
    } else if (arguments.length === 1) {
      return this[0] && this[0].getAttribute(name)
    } else {
      const method = isNullable(value) ? 'removeAttribute' : 'setAttribute'

      this.each(element => {
        element[method](name, value)
      })
    }

    return this
  }


  /**
   * Añade al final los elementos dados como hijos de cada elemento de la colección
   *
   * @param {*} children
   *
   * @return {EDdom}
   *
   * @api public
   */
  append (children) {
    const $children = new EDdom(children)

    this.each(element => {
      $children.each(child => {
        element.appendChild(child.cloneNode(true))
      })
    })

    return this
  }


  /**
   * Añade al inicio los elementos dados como hijos de cada elemento de la colección
   *
   * @param {*} children
   *
   * @return {EDdom}
   *
   * @api public
   */
  prepend (children) {
    const $children = new EDdom(children)

    this.each(element => {
      const referenceChild = element.firstElementChild

      $children.each(child => {
        element.insertBefore(child, referenceChild)
      })
    })

    return this
  }
}
