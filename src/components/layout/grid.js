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
  minWidth,
  flexGrow = 'initial',
  flexShrink = 'initial',
  ...props
}) => (
  <div {...styles.column(maxWidth, minWidth, flexGrow, flexShrink)} {...props}>
    { children }
  </div>
)

Column.propTypes = {
  maxWidth: PropTypes.string,
  minWidth: PropTypes.string,
  flexGrow: PropTypes.string,
  flexShrink: PropTypes.string
}

const styles = {
  column: (maxWidth, minWidth, flexGrow, flexShrink) => css({
    flexGrow,
    flexShrink,
    height: '100%',
    width: '100%',
    maxWidth,
    minWidth
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
