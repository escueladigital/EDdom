import test from 'ava'
import EDdom from '../src/classes/EDdom'


let root


test.before('setup `root` element', () => {
  root = document.createElement('div')
})


test.beforeEach('setup HTML mock', () => {
  root.innerHTML = `
    <nav class="simple-navigation">
      <ul class="menu" id="menu">
        <li class="item"><a href="#link-1">Link 1</a></li>
        <li class="item active"><a href="#link-2">Link 2</a></li>
        <li class="item"><a href="#link-3">Link 3</a></li>
      </ul>
    </nav>
  `

  document.body.appendChild(root)
})


test('EDdom constructor', t => {
  const tag = 'LI'
  const $items = new EDdom(tag, root)

  t.is($items.context, root, 'context should be `root`')
  t.is($items.selector, tag, 'selector should be `tag`')
  t.is($items.length, 3, 'length should be 3')

  $items.each(({ tagName }, index) => {
    t.is(tagName, tag, `tag at index ${index} should be LI`)
  })
})


test('#on', t => {
  let callCount = 0
  const $links = new EDdom('a')

  $links.on('click', e => {
    callCount++
  })

  $links.each(link => link.click())

  t.is(callCount, 3, 'callCount should be 3')
})


test('#off', t => {
  let callCount = 0
  const $ul = new EDdom('#menu', root)

  const incrementCallCount = e => {
    callCount++
  }

  $ul.on('click', incrementCallCount)
  $ul[0].click()

  $ul.off('click', incrementCallCount)
  $ul[0].click()

  t.is(callCount, 1, 'callCount should be 1')
})


test('#addClass', t => {
  const $links = new EDdom('a', root)
  const classes = 'link link-hoverable'

  $links.addClass(classes)

  $links.each(({ className }, index) => {
    t.is(className, classes, `className at index ${index} should be \`classes\``)
  })
})


test('#removeClass', t => {
  const $items = new EDdom('li', root)

  $items.removeClass('item active')

  $items.each(({ className }, index) => {
    t.is(className, '', `should remove \`item\` and \`active\` classes at index ${index}`)
  })
})


test('#toggleClass', t => {
  const $all = new EDdom('*', root)
  const klass = 'element'

  $all.toggleClass(klass)

  $all.each(({ classList }, index) => {
    t.true(classList.contains(klass), `should add \`element\` class at index ${index}`)
  })

  $all.toggleClass(klass)

  $all.each(({ classList }, index) => {
    t.false(classList.contains(klass), `should remove \`element\` class at index ${index}`)
  })
})


test('#wrap', t => {
  const $nav = new EDdom('nav', root)
  const wrapper = document.createElement('header')

  $nav.wrap(wrapper)

  t.is($nav[0].parentElement.tagName, wrapper.tagName, 'should wrap correctly')
})


test('#hasClass', t => {
  const $all = new EDdom('*', root)

  t.true($all.hasClass('menu'), 'should `menu` class exists')
})


test.todo('#attr')
test.todo('#append')
test.todo('#prepend')
