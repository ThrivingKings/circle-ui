import React from 'react'
import Button from 'components/button'

const ClassicButtons = () => (
  <div>
    <Button>primary</Button>
    <Button color="danger">danger</Button>
    <Button color="disabled">disabled</Button>
  </div>
)

const PillButtons = () => (
  <div>
    <Button shape="pill">primary</Button>
    <Button shape="pill" color="danger">danger</Button>
    <Button shape="pill" color="disabled" disabled>disabled</Button>
  </div>
)

export default {
  name: 'Button',
  demos: [
    {
      title: 'Classic',
      component: ClassicButtons,
      props: {},
    },
    {
      title: 'Pill',
      component: PillButtons,
      props: {},
    }
  ]
}
