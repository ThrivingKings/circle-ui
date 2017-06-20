import React from 'react'
import { compose, focus } from 'glamor'

import { textInput as textInputStyles, textInputState } from '../../styles/shared'
import { primaryColor } from '../../styles/variables'

const Input = props => (
  <input
    {...compose(
      textInputStyles,
      styles.input,
      textInputState(props)
    )}
    {...props} />
)

const styles = {
  input: focus({
    borderColor: 'transparent',
    borderBottomColor: `rgb(${primaryColor})`
  })
}

export default Input
