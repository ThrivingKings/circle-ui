import { Component, PropTypes } from 'react'

export default class Expandable extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isExpanded: false
    }
  }

  getChildContext () {
    return {
      toggleExpanded: () => this.setState({ isExpanded: !this.state.isExpanded }),
      isExpanded: this.state.isExpanded
    }
  }

  render () {
    return this.props.children
  }
}

Expandable.childContextTypes = {
  toggleExpanded: PropTypes.func,
  isExpanded: PropTypes.bool
}
