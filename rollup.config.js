import { readFileSync } from 'fs'
import babel from 'rollup-plugin-babel'

export default {
  footer: `\n${readFileSync('./src/_footer_')}`,
  plugins: [
    babel()
  ]
}
