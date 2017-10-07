import test from 'ava'
import query from '../src/dom/query'

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
  const allElements = query('*', wrapper)
  const idElement = query('#form-email')

  t.true(classElements instanceof HTMLCollection && classElements.length === 1, 'should query with `getElementsByClassName`')
  t.true(Array.isArray(idElement) && idElement.length === 1, 'should query with `getElementById`')
  t.true(tagElements instanceof HTMLCollection && tagElements.length === 1, 'should query with `getElementsByTagName`')
  t.true(allElements instanceof HTMLCollection && allElements.length === 4, 'should query with `getElementsByTagName`')

  // Slowest
  const queryElements = query('input.email-input[type="email"]', wrapper)

  t.true(queryElements instanceof NodeList && queryElements.length === 1, 'should query with `querySelectorAll`')
})
