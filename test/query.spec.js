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
  const nativeClassElements = wrapper.getElementsByClassName('title')

  const tagElements = query('span', wrapper)
  const nativeTagElements = wrapper.getElementsByTagName('span')

  const allElements = query('*', wrapper)
  const nativeAllElements = wrapper.getElementsByTagName('*')

  const idElement = query('#form-email')
  const nativeIdElement = document.getElementById('form-email')

  // Slowest
  const queryElements = query('input.email-input[type="email"]', wrapper)
  const nativeQueryElements = wrapper.querySelectorAll('input.email-input[type="email"]')

  t.deepEqual(idElement, [nativeIdElement], 'should query with `getElementById`')
  t.deepEqual(tagElements, nativeTagElements, 'should query with `getElementsByTagName`')
  t.deepEqual(allElements, nativeAllElements, 'should query with `getElementsByTagName`')
  t.deepEqual(classElements, nativeClassElements, 'should query with `getElementsByClassName`')

  t.deepEqual(queryElements, nativeQueryElements, 'should query with `querySelectorAll`')
})
