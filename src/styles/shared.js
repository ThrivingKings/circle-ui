import { css } from 'glamor'

import {
  standardBorder,
  formBorderColor,
  formTransitionSpeed,
  dangerColor,
  warningColor,
  successColor
} from './variables'

module.exports = {
  textInput: css({
    border: `${standardBorder} rgb(${formBorderColor})`,
    boxSizing: 'border-box',
    fontSize: '1em',
    outline: 'none',
    padding: 5,
    transition: `border-color ${formTransitionSpeed}, border-bottom-color ${formTransitionSpeed}`
  }),
  textInputState: ({ isSuccess, isError, isWarning }) => css(
    isSuccess && {
      borderColor: `rgb(${successColor})`,
      backgroundColor: `rgba(${successColor}, 0.2)`
    },
    isWarning && {
      borderColor: `rgb(${warningColor})`,
      backgroundColor: `rgba(${warningColor}, 0.2)`
    },
    isError && {
      borderColor: `rgb(${dangerColor})`,
      backgroundColor: `rgba(${dangerColor}, 0.2)`
    }
  )
}
