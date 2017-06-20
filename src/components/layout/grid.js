import React, { PropTypes } from 'react'
import { css } from 'glamor'

const Columns = ({ children }) => (
  <div {...styles.columns}>
    { children }
  </div>
)

const Column = ({ children, maxWidth, grow, shrink }) => (
  <div {...styles.column(maxWidth)}>
    { children }
  </div>
)

Column.propTypes = {
  maxWidth: PropTypes.string,
  grow: PropTypes.bool,
  shrink: PropTypes.bool
}

const styles = {
  column: (maxWidth, grow, shrink) => css({
    flexGrow: grow ? 1 : 'initial',
    flexShrink: shrink ? 1 : 'initial',
    height: '100%',
    width: '100%',
    maxWidth
  }),
  columns: css({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%'
  })
}

module.exports = {
  Column,
  Columns
}
