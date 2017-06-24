import React from 'react'
import { css } from 'glamor'

const Paper = ({ children, ...props }) => (
  <div {...styles.paper} {...props}>
    { children }
  </div>
)

const styles = {
  paper: css({
    backgroundColor: 'white',
    padding: 15
  })
}

export default Paper
