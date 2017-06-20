import React from 'react'
import { compose, focus } from 'glamor'

import { textInput as textInputStyles, textInputState } from '../../styles/shared'
import { primaryColor } from '../../styles/variables'

const Textarea = props => (
  <textarea
    {...compose(
      textInputStyles,
      styles.input,
      textInputState(props)
    )}
    {...props} />
)

const styles = {
  textarea: focus({
    borderColor: 'transparent',
    borderLeftColor: `rgb(${primaryColor})`
  })
}

export default Textarea
