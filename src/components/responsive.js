import React, { PropTypes } from 'react'
import { css, media } from 'glamor'

import {
  smallViewportWidth,
  mediumViewportWidth,
  largeViewportWidth
} from '../styles/variables'

const Responsive = ({
  isDesktopHidden,
  isTabletHidden,
  isMobileHidden,

  children
}) => (
  <div {...css(
    isDesktopHidden && styles.desktopHidden,
    isTabletHidden && styles.tabletHidden,
    isMobileHidden && styles.mobileHidden
  )}>

    { children }
  </div>
)

Responsive.propTypes = {
  isDesktopHidden: PropTypes.bool,
  isTabletHidden: PropTypes.bool,
  isMobileHidden: PropTypes.bool
}

const styles = {
  desktopHidden: media(`(min-width: ${largeViewportWidth})`, {
    display: 'none'
  }),
  tabletHidden: media(`(min-width: ${smallViewportWidth}) and (max-width: ${mediumViewportWidth})`, {
    display: 'none'
  }),
  mobileHidden: media(`(max-width: ${smallViewportWidth})`, {
    display: 'none'
  })
}

export default Responsive
