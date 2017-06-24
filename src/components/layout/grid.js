import React, { PropTypes } from 'react'
import { css } from 'glamor'

const Columns = ({ children, ...props }) => (
  <div {...styles.columns} {...props}>
    { children }
  </div>
)

const Column = ({
  children,
  maxWidth,
  flexGrow = 'initial',
  flexShrink = 'initial',
  ...props
}) => (
  <div {...styles.column(maxWidth, flexGrow, flexShrink)} {...props}>
    { children }
  </div>
)

Column.propTypes = {
  maxWidth: PropTypes.string,
  flexGrow: PropTypes.bool,
  flexShrink: PropTypes.bool
}

const styles = {
  column: (maxWidth, flexGrow, flexShrink) => css({
    flexGrow,
    flexShrink,
    height: '100%',
    width: '100%',
    maxWidth
  }),
  columns: css({
    display: 'flex',
    height: '100%',
    width: '100%'
  })
}

module.exports = {
  Column,
  Columns
}
