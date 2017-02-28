import { css } from 'glamor'

import {
  standardBorder,
  formBorderColor,
  formTransitionSpeed
} from './variables'

module.exports = {
  textInput: css({
    border: `${standardBorder} rgb(${formBorderColor})`,
    boxSizing: 'border-box',
    fontSize: '1em',
    outline: 'none',
    padding: 5,
    transition: `border-color ${formTransitionSpeed}, border-bottom-color ${formTransitionSpeed}`
  })
}
