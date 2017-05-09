import React from 'react'
import { css } from 'glamor'
import { storiesOf, action } from '@kadira/storybook'

import { ChiaText } from '../src'

storiesOf('ChiaText', module)
  .add('Default', () => (
    <div { ...styles.demo }>
      <ChiaText />
    </div>
  ))

const styles = {
  demo: css({
    width: 400
  })
}
