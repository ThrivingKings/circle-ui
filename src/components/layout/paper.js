import React, { Component } from 'react'
import { css } from 'glamor'

import { boxShadow } from '../../styles/variables'

const Paper = ({ children }) => (
  <div { ...styles.paper }>
    { children }
  </div>
)

const styles = {
  paper: css({
    backgroundColor: 'white',
    boxShadow,
    padding: 15
  })
}

export default Paper
