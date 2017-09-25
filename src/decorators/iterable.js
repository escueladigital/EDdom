/**
 * Itera todos los elementos y los pasa al método "decorado"
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
  const original = descriptor.value

  descriptor.value = function (...args) {
    this.each(element => {
      original.call(this, element, ...args)
    })

    return this
  }
}
