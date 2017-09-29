import test from 'ava'
import {
  isString,
  isArrayLike,
  isObject,
  isNullable,
  isElement
} from '../src/shared/utils'

let fakes, fakeValues

test.before('setup fakes', () => {
  fakes = {
    // Primitives
    string: 'fake string',
    boolean: true,
    number: 123.45,

    // Complex
    function: function () {}, // noop
    object: { key: 'value' },
    array: ['value 1', 'value 2'],
    arrayLike: { 0: 'value 1', 1: 'value 2', length: 2 },
    element: document.createElement('div'),

    // Special
    null: null,
    undefined: undefined
  }

  fakeValues = Object.values(fakes)
})

test('isString()', assertUtil(isString, ['string']))
test('isArrayLike()', assertUtil(isArrayLike, ['arrayLike', 'array']))
test('isObject()', assertUtil(isObject, ['object', 'array', 'arrayLike', 'element']))
test('isNullable()', assertUtil(isNullable, ['undefined', 'null']))
test('isElement', assertUtil(isElement, ['element']))

function assertUtil (fn, types) {
  return t => {
    const filtered = fakeValues.filter(fn)
    const values = types.map(type => fakes[type])

    t.is(filtered.length, values.length, `length should be ${values.length}`)

    values.forEach((value, index) => {
      t.true(filtered.includes(value), `should contain ${value}`)
    })
  }
}
