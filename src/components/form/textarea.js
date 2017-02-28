import React from 'react'
import { css, focus } from 'glamor'

import { textInput as textInputStyles } from '../../styles/shared'
import { primaryColor } from '../../styles/variables'

const Textarea = props => (
  <textarea
    { ...textInputStyles }
    { ...styles.textarea }
    { ...props } />
)

const styles = {
  textarea: focus({
    borderColor: 'transparent',
    borderLeftColor: `rgb(${primaryColor})`
  })
}

export default Textarea
