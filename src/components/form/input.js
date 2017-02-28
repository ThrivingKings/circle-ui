import React from 'react'
import { css, focus } from 'glamor'

import { textInput } from '../../styles/shared'
import { primaryColor } from '../../styles/variables'

const Input = props => (
  <input
    { ...textInput }
    { ...styles.input }
    { ...props } />
)

const styles = {
  input: focus({
    borderColor: 'transparent',
    borderBottomColor: `rgb(${primaryColor})`
  })
}

export default Input
