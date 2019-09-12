import React from 'react'
import { storiesOf } from '@kadira/storybook'

import { Form, Button, Layout } from '../src'
const { Group, Label, Input, Textarea } = Form
const { Content, Paper } = Layout

storiesOf('Form', module)
  .add('Default', () => (
    <Layout>
      <Content>
        <Paper>
          <form style={{ width: 400 }}>
            <Group>
              <Label>Name</Label>
              <Input />
            </Group>

            <Group>
              <Label>Last name</Label>
              <Input placeholder='A single initial is acceptable' />
            </Group>
            <Group>
              <Textarea />
            </Group>
            <Group flexDirection='row'>
              <Button>submit</Button>
            </Group>
          </form>
        </Paper>
      </Content>
    </Layout>
  ))
