import createPhrase from '../create-phrase'
import value from './value'

export default createPhrase({
  name: 'literal',
  computeLiteral(inputString, data, done) {
    data({
      text: this.props.text,
      value: this.props.value
    })
    return done()
  },
  getValue(result) {
    return result.literal
  },
  describe() {
    return value({
      id: 'literal',
      compute: this.computeLiteral,
      category: this.props.category,
      join: this.props.join
    })
  }
})