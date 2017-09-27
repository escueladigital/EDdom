import babel from 'rollup-plugin-babel'

export default {
  plugins: [
    babel({
      babelrc: false,
      presets: [
        ['env', { modules: false, loose: true }]
      ],
      plugins: [
        'transform-decorators-legacy',
        'transform-class-properties'
      ]
    })
  ]
}
