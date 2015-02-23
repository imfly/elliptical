import asyncEach from 'async-each'

import createPhrase from '../create-phrase'
import InputOption from '../input-option'

export default createPhrase({
  name: 'choice',
  _handleParse(input, options, applyLimit, data, done) {
    const eachChild = (child, done) => {
      const childData = (input) => {
        var inputData = input.getData()
        inputData.result[this.props.id] = input.result[child.props.id]
        data(new InputOption(inputData))
      }

      // parse the child
      var newInput = input
      var inputData
      if (this.props.limit) {
        inputData = input.getData()
        inputData.limit = applyLimit(input)
        newInput = new InputOption(inputData)
      }
      child.parse(newInput, options, childData, done)
    }

    // Parse each child asyncronously
    asyncEach(this.props.children, eachChild, done)
  }
})