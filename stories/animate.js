import React from 'react'
import { css } from 'glamor'
import { storiesOf } from '@storybook/react'

import { Animate } from '../src'

storiesOf('Animate', module)
  .add('Animations', () => (
    <div {...styles.demoContainer}>
      <Animate name='bounce'>
        <div {...styles.demo}>
          Bounce
        </div>
      </Animate>

      <Animate name='flash'>
        <div {...styles.demo}>
          Flash
        </div>
      </Animate>

      <Animate name='pulse'>
        <div {...styles.demo}>
          Pulse
        </div>
      </Animate>

      <Animate name='rubberBand'>
        <div {...styles.demo}>
          Rubberband
        </div>
      </Animate>

      <Animate name='shake'>
        <div {...styles.demo}>
          Shake
        </div>
      </Animate>

      <Animate name='swing'>
        <div {...styles.demo}>
          Swing
        </div>
      </Animate>

      <Animate name='tada'>
        <div {...styles.demo}>
          Tada
        </div>
      </Animate>

      <Animate name='wobble'>
        <div {...styles.demo}>
          Wobble
        </div>
      </Animate>
    </div>
  ))
  .add('Reveals', () => (
    <div {...styles.demoContainer}>
      <Animate name='bounceIn'>
        <div {...styles.demo}>
          BounceIn
        </div>
      </Animate>

      <Animate name='fadeIn'>
        <div {...styles.demo}>
          FadeIn
        </div>
      </Animate>

      <Animate name='zoomIn'>
        <div {...styles.demo}>
          ZoomIn
        </div>
      </Animate>

      <Animate name='slideInUp'>
        <div {...styles.demo}>
          SlideInUp
        </div>
      </Animate>
    </div>
  ))

const styles = {
  demo: css({
    backgroundColor: '#eee',
    marginRight: 10,
    padding: 15
  }),
  demoContainer: css({
    display: 'flex'
  })
}
