import React from 'react'
import { css } from 'glamor'

const Group = ({ children, flexDirection }) => (
  <div role="group" { ...styles.group(flexDirection) }>
    { children }
  </div>
)

Group.defaultProps = {
  flexDirection: 'column'
}

const styles = {
  group: flexDirection => css({
    display: 'flex',
    alignItems: flexDirection === 'row' ? 'flex-end' : 'initial',
    flexDirection,
    border: 'none',
    padding: '5px 0',
    margin: 0
  })
}

export default Group
