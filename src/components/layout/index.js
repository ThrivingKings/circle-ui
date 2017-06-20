import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import { css } from 'glamor'

import Navbar from './navbar'
import Paper from './paper'
import Content from './content'
import { Columns, Column } from './grid'

import { defaultBg, textColor, defaultFont } from '../../styles/variables'

class Layout extends Component {
  constructor (props) {
    super(props)

    this.state = {
      navbarPadding: 0
    }
  }

  getChildContext = () => ({
    registerNavbar: this.registerNavbar
  })

  registerNavbar = component =>
    this.setState({
      navbarPadding: findDOMNode(component).getBoundingClientRect().height
    })

  render () {
    const { children, ...props } = this.props
    const { navbarPadding } = this.state
    return (
      <div {...styles.layout(navbarPadding)} {...props}>
        { children }
      </div>
    )
  }
}

Layout.childContextTypes = {
  registerNavbar: PropTypes.func
}

const styles = {
  layout: paddingTop => css({
    backgroundColor: defaultBg,
    boxSizing: 'border-box',
    color: textColor,
    fontFamily: defaultFont,
    minHeight: '100vh',
    position: 'relative',
    paddingTop
  })
}

Layout.Navbar = Navbar
Layout.Paper = Paper
Layout.Columns = Columns
Layout.Column = Column
Layout.Content = Content
export default Layout
