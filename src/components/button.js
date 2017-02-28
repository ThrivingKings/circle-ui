import React, { PropTypes } from 'react'
import { css, hover, active, focus } from 'glamor'

import variables from '../styles/variables'

const Button = ({ children, color, shape, ...props }) => (
  <button
    { ...css(
        styles.button,
        styles.buttonColor(color),
        styles.buttonShape(shape)
      ) }
    { ...props } >

    { children }
  </button>
)

Button.defaultProps = {
  shape: 'classic',
  color: 'primary'
}

Button.propTypes = {
  color: PropTypes.string,
  shape: PropTypes.string
}

const styles = {
  button: css({
    border: variables.standardBorder,
    borderColor: 'transparent',

    color: 'white',
    cursor: 'pointer',
    fontSize: '.8em',
    padding: '6px 12px',
    userSelect: 'none'
  }),
  buttonColor: color => css({
    backgroundColor: `rgba(${ variables[`${color}Color`] }, 0.85)`
  }, hover({
    backgroundColor: `rgba(${ variables[`${color}Color`] }, 1)`
  }), active({
    backgroundColor: `rgba(${variables[`${color}Color`]}, 1)`,
    boxShadow: 'inset 0px 1px 3px rgba(0, 0, 0, 0.5)',
    outline: 'none'
  }), focus({
    outline: 'none'
  })),
  buttonShape: shape => css({
    borderRadius: shape === 'pill' ? 100 : variables.standardBorderRadius,
  })
}

export default Button
