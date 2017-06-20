import React from 'react'
import { css } from 'glamor'
import { storiesOf } from '@kadira/storybook'

import { ChiaText } from '../src'

storiesOf('ChiaText', module)
  .add('Default', () => (
    <div {...styles.demo}>
      <ChiaText />
    </div>
  ))

const styles = {
  demo: css({
    width: 400
  })
}
