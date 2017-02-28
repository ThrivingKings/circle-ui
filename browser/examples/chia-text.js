import React from 'react'
import { css } from 'glamor'
import ChiaText from 'components/chia-text'

const ChiaTextDemo = () => (
  <div { ...styles.demo }>
    <ChiaText />
  </div>
)

export default {
  name: 'Chia text',
  demos: [
    {
      title: 'Default',
      component: ChiaTextDemo,
      props: {},
    }
  ]
}

const styles = {
  demo: css({
    width: 400
  })
}
