import React from 'react'
import { storiesOf } from '@storybook/react'

import { Button } from '../src'

storiesOf('Button', module)
  .add('Default', () => (
    <div>
      <Button>primary</Button>
      <Button color='danger'>danger</Button>
      <Button color='disabled'>disabled</Button>
    </div>
  ))
  .add('Pill', () => (
    <div>
      <Button shape='pill'>primary</Button>
      <Button shape='pill' color='danger'>danger</Button>
      <Button shape='pill' color='disabled' disabled>disabled</Button>
    </div>
  ))
