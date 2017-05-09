import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import { Layout } from '../src'
const { Navbar, Content, Paper } = Layout
const { Item } = Navbar

import imageFile from '../docs/assets/logo.png'

storiesOf('Layout', module)
  .add('Navbar', () => (
    <Layout>
      <Navbar>
        <Item><img src={imageFile} style={{ height: 40 }}/></Item>
        <Item><b>Package browser</b></Item>
      </Navbar>
    </Layout>
  ))
  .add('Content', () => (
    <Layout>
      <Content>
        <Paper>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet est at lacus ultrices efficitur ut sed ex. Proin volutpat, nisi a elementum placerat, dolor dolor viverra sem, id finibus erat libero tempus risus. Mauris sit amet mi non magna maximus pretium. Fusce ullamcorper at mauris at consequat. Suspendisse eu facilisis elit. Vestibulum sapien massa, malesuada nec ligula vitae, tempus condimentum nibh. Duis et ipsum urna. Ut pellentesque, augue vitae ultrices suscipit, purus massa luctus urna, at volutpat urna est sit amet erat. Nam in libero commodo, aliquam ex sit amet, lobortis justo. Vestibulum tempus auctor elit, quis placerat ante mollis vel. Proin orci ante, lacinia in urna euismod, hendrerit tincidunt mi. Nam est nulla, viverra sed cursus eget, cursus vitae turpis. Suspendisse ac feugiat lectus. Nulla suscipit leo a ex vestibulum tincidunt. Cras elementum dictum blandit. Maecenas nunc arcu, rutrum a lacinia nec, finibus eget orci.</p>

          <p>Sed vitae purus ut tellus placerat egestas in sed justo. Donec dictum lacus venenatis faucibus condimentum. Duis aliquet nisl quis odio tempus, at malesuada sapien dignissim. Sed id rutrum nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consequat lacus id ante vulputate tempus. Curabitur vehicula tempor hendrerit. Cras quis egestas risus, ut convallis sapien. Pellentesque ex nisi, faucibus ut tincidunt vel, varius ut lorem. Donec mi diam, facilisis eu felis a, dapibus molestie dolor. Maecenas venenatis gravida lectus, et aliquet leo luctus eget. Etiam ullamcorper leo id enim maximus tristique. Pellentesque eu tincidunt enim.</p>
        </Paper>
      </Content>
    </Layout>
  ))
