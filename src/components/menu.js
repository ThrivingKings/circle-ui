import React, { Component, PropTypes } from 'react'
import { css } from 'glamor'

import { boxShadow, transitionSpeed } from '../styles/variables'

const Menu = ({ children, width, label, anchor }, { isExpanded, toggleExpanded }) => (
  <div { ...styles.menuContainer }>
    <div onClick={toggleExpanded} { ...styles.label }>
      { label }
    </div>
    <div { ...styles.menu(isExpanded, width, anchor) }>
      { children }
    </div>
  </div>
)

Menu.defaultProps = {
  width: 200,
  anchor: 'left'
}

Menu.contextTypes = {
  isExpanded: PropTypes.bool,
  toggleExpanded: PropTypes.func
}

const styles = {
  label: css({
    cursor: 'pointer'
  }),
  menu: (isExpanded, width, anchor) => css({
    position: 'absolute',
    top: '100%',
    left: anchor === 'left' ? 0 : 'initial',
    right: anchor === 'right' ? 0 : 'initial',
    transition: `transform ${transitionSpeed}`,
    width,
    backgroundColor: 'white',
    transformOrigin: 'top',
    transform: isExpanded ? 'scaleY(1)' : 'scaleY(0)',
    overflow: 'hidden',
    boxShadow,
  }),
  menuContainer: css({
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    width: 'initial',
    userSelect: 'none',
    position: 'relative'
  })
}

export default Menu
