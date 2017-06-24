import React from 'react'
import { css } from 'glamor'

const Content = ({ children, ...props }) => (
  <div {...styles.content} {...props}>
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
