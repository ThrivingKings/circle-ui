import React from 'react'
import { css } from 'glamor'

const Paper = ({ children }) => (
  <div {...styles.paper}>
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
