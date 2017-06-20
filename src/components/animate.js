import React, { PropTypes } from 'react'
import { css } from 'glamor'

import { animated } from '../styles/variables'
import animations from '../styles/animations'

const Animate = ({ name, seconds, iterate, children, ...props }) => (
  <div
    {...css(
      animated,
      styles.animation(name),
      styles.duration(seconds),
      styles.iteration(iterate)
    )}
    {...props} >

    { children }
  </div>
)

Animate.defaultProps = {
  name: 'bounce',
  seconds: 1
}

Animate.propTypes = {
  name: PropTypes.string,
  seconds: PropTypes.number
}

const styles = {
  animation: name => css({
    animation: animations[name]
  }),
  duration: seconds => css({
    animationDuration: `${seconds}s`
  }),
  iteration: iterate => css({
    animationIterationCount: iterate
  })
}

export default Animate
