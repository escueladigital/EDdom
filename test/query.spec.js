import test from 'ava'
import query, { _getOptimumMethod } from '../src/dom/query'

test('_getOptimumMethod()', t => {
  // Fastest
  t.is(_getOptimumMethod('.test-class'), 'getElementsByClassName', 'from a class selector should be `getElementByClassName` the optimum method')
  t.is(_getOptimumMethod('test-tag'), 'getElementsByTagName', 'from a tag selector should be `getElementsByTagName` the optimum method')
  t.is(_getOptimumMethod('#test-id'), 'getElementById', 'from an id selector should be `getElementById` the optimum method')

  // Slowest
  t.is(_getOptimumMethod('tag .class > #id'), 'querySelectorAll', 'from a complex selector should be `querySelectorAll` the optimum method')
})

test('query()', t => {
  const wrapper = document.createElement('div')

  wrapper.innerHTML = `
    <span>Selected by tag!</span>
    <h1 class="title">Selected by ID!</h1>
    <form id="form-email">
      <input type="email" class="email-input">
    </form>
  `

  document.body.appendChild(wrapper)

  // Fastest
  const classElements = query('.title', wrapper)
  const tagElements = query('span', wrapper)

  t.true(classElements instanceof HTMLCollection && classElements.length === 1, 'should query with `getElementsByClassName`')
  t.true(query('#form-email', wrapper) instanceof HTMLFormElement, 'should query with `getElementById`')
  t.true(tagElements instanceof HTMLCollection && tagElements.length === 1, 'should query with `getElementsByTagName`')

  // Slowest
  const queryElements = query('input.email-input[type="email"]', wrapper)

  t.true(queryElements instanceof NodeList && queryElements.length === 1, 'should query with `querySelectorAll`')

  t.is(query(), undefined, 'should return undefined with no arguments')
  t.is(query(null), null, 'should return null with null selector')
  t.is(query(undefined), undefined, 'should return undefined with undefined selector')
})
