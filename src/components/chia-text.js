import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import { css, focus, before } from 'glamor'

import { standardBorder, formBorderColor } from '../styles/variables'

export default class ChiaText extends Component {
  constructor (props) {
    super(props)

    this.state = {
      fontSize: props.maxFontSize,
      maxFontSize: props.maxFontSize,
      minFontSize: props.minFontSize
    }
  }

  componentDidMount () {
    const { width } = findDOMNode(this).getBoundingClientRect()
    this.setState({ width })
  }

  handleKeyUp = e => {
    const { width, maxFontSize, minFontSize } = this.state
    const textContent = findDOMNode(this).textContent

    const modifier = Math.floor((textContent.length / width) / 0.1) * 0.5
    const newFontSize = Math.max(maxFontSize - modifier, minFontSize)

    this.setState({ fontSize: newFontSize })

    const { onUpdate } = this.props
    onUpdate && onUpdate(e)
  }

  render () {
    const { fontSize } = this.state
    const { maxFontSize, minFontSize, onUpdate, ...props } = this.props // eslint-disable-line

    return (
      <div
        {...props}
        contentEditable
        onKeyUp={this.handleKeyUp}
        {...styles.text(fontSize)} />
    )
  }
}

ChiaText.defaultProps = {
  maxFontSize: 2,
  minFontSize: 1
}

ChiaText.propTypes = {
  maxFontSize: PropTypes.number,
  minFontSize: PropTypes.number,

  onUpdate: PropTypes.func
}

const styles = {
  text: fontSize => css({
    border: `${standardBorder} rgb(${formBorderColor})`,
    boxSizing: 'border-box',
    fontSize: `${fontSize}em`,
    width: '100%',
    transition: 'font-size 0.2s',
    padding: 5
  }, focus({
    outline: 'none'
  }), before({
    content: '"\\feff "'
  }))
}
