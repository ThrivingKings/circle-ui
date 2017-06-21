import React, { Component, PropTypes } from 'react'
import { css, hover, select } from 'glamor'

import Expandable from '../expandable'
import Menu from '../menu'

import { navbarBg, navbarHoverBg, navbarBorder, linkColor } from '../../styles/variables'

class Navbar extends Component {
  componentDidMount () {
    this.context.registerNavbar(this)
  }

  render () {
    return (
      <nav {...styles.navbar}>
        { this.props.children }
      </nav>
    )
  }
}

Navbar.contextTypes = {
  registerNavbar: PropTypes.func
}

const NavbarMenu = props => (
  <div {...styles.menu}>
    <Expandable>
      <Menu {...props} />
    </Expandable>
  </div>
)

  <Expandable>
  </Expandable>
)

const Item = ({ children, grow, ...props }) => (
  <div {...styles.item(grow)} {...props}>
    { children }
  </div>
)

Item.propTypes = {
  grow: PropTypes.bool
}

const MenuItem = ({ children, ...props }) => (
  <div {...styles.menuItem} {...props}>
    { children }
  </div>
)

const styles = {
  navbar: css({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: `rgb(${navbarBg})`,
    borderBottom: `1px solid ${navbarBorder}`,
    display: 'flex',
    alignItems: 'center'
  }),
  item: grow => css({
    padding: 15,
    flexGrow: grow ? 1 : 'initial'
  }, select(' a', {
    color: 'inherit',
    textDecoration: 'none'
  })),
  menu: css({
    padding: '0 15px',
    height: '100%'
  }),
  menuItem: css({
    padding: 15,
    color: linkColor
  }, select(' a', {
    textDecoration: 'none',
    color: 'inherit'
  }), hover({
    backgroundColor: navbarHoverBg
  }))
}

Navbar.Menu = NavbarMenu
Navbar.Item = Item
Navbar.MenuItem = MenuItem
export default Navbar
