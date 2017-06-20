import React from 'react'
import { css } from 'glamor'

const Content = ({ children }) => (
  <div {...styles.content}>
    { children }
  </div>
)

const styles = {
  content: css({
    boxSizing: 'border-box',
    padding: 20
  })
}

export default Content
