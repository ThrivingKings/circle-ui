import React from 'react'
import Button from 'components/button'
import { Group, Label, Input, Textarea } from 'components/form/index'

const ClassicButtons = () => (
  <form style={{width:400}}>
    <Group>
      <Label>Name</Label>
      <Input />
    </Group>

    <Group>
      <Label>Last name</Label>
      <Input placeholder="A single initial is acceptable" />
    </Group>
    <Group>
      <Textarea />
    </Group>
    <Group flexDirection="row">
      <Button>submit</Button>
    </Group>
  </form>
)

export default {
  name: 'Form',
  demos: [
    {
      title: 'Default',
      component: ClassicButtons,
      props: {},
    }
  ]
}
