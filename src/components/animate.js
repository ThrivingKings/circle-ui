import React, { PropTypes } from 'react'
import { css } from 'glamor'

import { animated } from '../styles/variables'
import animations from '../styles/animations'

const Animate = ({ name, seconds, children }) => (
  <div
    { ...css(
        animated,
        styles.animation(name),
        styles.duration(seconds)
      )
    } >

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
  })
}

export default Animate
