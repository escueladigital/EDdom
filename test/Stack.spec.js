import test from 'ava'
import Stack from '../src/classes/Stack'


let stack, fakeDiv, fakeSpan


test.before('setup fakes', () => {
  fakeDiv = document.createElement('div')
  fakeSpan = document.createElement('span')
})


test.beforeEach('setup `Stack` class', () => {
  stack = new Stack()
})


test('#add', t => {
  stack.add(fakeDiv, fakeSpan)

  t.is(stack.length, 2, 'length should be 2')
  t.is(stack[0], fakeDiv, 'index 0 should be `fakeDiv`')
  t.is(stack[1], fakeSpan, 'index 1 should be `fakeSpan`')
})


test('#each', t => {
  const fakeStack = []
  const fakeDivClone = fakeDiv.cloneNode(true)

  stack.add(fakeDiv, fakeSpan, fakeDivClone)

  stack.each(element => {
    fakeStack.push(element)
  })

  t.is(fakeStack.length, 3, '`fakeStack` length should be 3')

  t.is(fakeStack[0], stack[0], 'element at index 0 should be the same')
  t.is(fakeStack[1], stack[1], 'element at index 1 should be the same')
  t.is(fakeStack[2], stack[2], 'element at index 2 should be the same')
})


test('#some', t => {
  const stack = new Stack()
  const correct = 'correct'

  stack.add('inc', 'incorrect', correct, 'inct')

  t.true(stack.some(item => item === correct), 'correct item')
})
