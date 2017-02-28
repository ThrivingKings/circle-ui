import React from 'react'
import { css } from 'glamor'

const Label = ({ children, ...props }) => (
  <label { ...styles.label } { ...props }>
    { children }
  </label>
)

const styles = {
  label: css({
    margin: '0 5px 5px 0'
  })
}

export default Label
