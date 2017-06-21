import React, { PropTypes } from 'react'
import { css } from 'glamor'

import { navbarBorder, transitionSpeed, trayBg } from '../../styles/variables'

const Tray = ({ children, width, label, anchor }, { isExpanded, toggleExpanded }) => (
  <div {...styles.trayContainer}>
    <div onClick={toggleExpanded} {...styles.label()}>
      { label }
    </div>
    <div {...styles.tray(isExpanded, width, anchor)}>
      <div onClick={toggleExpanded} {...styles.label(anchor)}>
        {anchor === 'right'
          ? `❮`
          : `❯`
        }
      </div>
      { children }
    </div>
  </div>
)

Tray.defaultProps = {
  width: 200,
  anchor: 'right'
}

Tray.contextTypes = {
  isExpanded: PropTypes.bool,
  toggleExpanded: PropTypes.func
}

const styles = {
  label: anchor => css({
    cursor: 'pointer',
    padding: 15,
    textAlign: anchor === 'left' ? 'right' : 'left'
  }),
  tray: (isExpanded, width, anchor) => css({
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: anchor === 'left' ? 0 : 'initial',
    right: anchor === 'right' ? 0 : 'initial',
    transition: `transform ${transitionSpeed}`,
    width,
    backgroundColor: trayBg,
    transformOrigin: anchor,
    transform: isExpanded
      ? 'translateX(0)'
      : `translateX(${anchor === 'left' ? `-${width}px` : `${width}px`})`,
    overflow: 'hidden',
    borderLeft: `1px solid ${navbarBorder}`,
    borderRight: `1px solid ${navbarBorder}`
  }),
  trayContainer: css({
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    width: 'initial',
    userSelect: 'none',
    position: 'relative'
  })
}

export default Tray
