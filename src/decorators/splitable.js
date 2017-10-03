import iterable from './iterable'

/**
 * Expresión regular como separador
 *
 * @type {RegExp}
 */
const SEPARATOR_REGEX = /\s+/

/**
 * Divide el primer argumento con el separador y lo pasa al método "decorado"
 *
 * @param {Object} proto
 * @param {string} key
 * @param {Object} descriptor
 *
 * @return void
 *
 * @api private
 */
export default (proto, key, descriptor) => {
  iterable(proto, key, descriptor)

  const iterableFn = descriptor.value

  descriptor.value = function (separable, ...rest) {
    return iterableFn.call(
      this,
      separable.trim().split(SEPARATOR_REGEX),
      ...rest
    )
  }
}
