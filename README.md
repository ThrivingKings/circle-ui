<p align="center">
  <img src="https://raw.githubusercontent.com/ThrivingKings/circle-ui/master/docs/assets/logo.png" width="100" />
</p>

<h1 align="center">Circle UI</h1>
<p align="center">
  A collection of self-contained React components.
  <pre align="center"><code>❯ yarn add circle-ui</code></pre>
</p>

<h2 align="center">About</h2>
The intention of this library is really for rapid prototyping of concepts. Every component is self-contained and doesn't require any meddling with stylesheets and classnames. Simply add the components you need, and prove your concept. Beacause of this, it's extremely opionated. The theme is basic and cannot be modified without cloning and editing the source. This is by design and won't change any soon. You're more than welcome to publish this to a production environment but be warned— it's truly meant for the back alleys of development environments.

Enjoy! :)

<h2 align="center">Components</h2>

### Layout
The layout component is sort of the bread and butter of the ui. This unlocks numerous sub-componenets, but most importantly, it keeps everything within in perfect order.
```js
import { Layout } from 'circle-ui'

export default () => (
  <Layout>
    /* ... */
  </Layout>
)
```
#### Navbar
What would a layout be without a fixed navbar?
The navbar component exposes a few sub-componenets of its own to make things just a little easier, and customizable.
```js
import { Layout } from 'circle-ui'
const { Navbar } = Layout
const { Item } = Navbar

export default () => (
  <Layout>
    <Navbar>
      <Item><img src='path/to/my/logo.svg' /></Item>
      <Item>Pizza Parlour</Item>
    </Navbar>
   </Layout>
)
```
```js
import { Layout } from 'circle-ui'
const { Navbar } = Layout
const { Item, Menu, MenuItem } = Navbar

export default () => (
  <Layout>
    <Navbar>
      <Item><img src='path/to/my/logo.svg' /></Item>
      <Item>Pizza Parlour</Item>
      <Item grow /> // Pushes the menu all of the way to the right
      <Menu label='Drop pizza menu' anchor='right'>
        <MenuItem>Cheese Pizza</MenuItem>
        <MenuItem><a href='#'>Sausage Pizza</a></MenuItem>
      </Menu>
    </Navbar>
   </Layout>
)
```
or
```js
import { Layout } from 'circle-ui'
const { Navbar } = Layout
const { Item, Menu, MenuItem } = Navbar

export default () => (
  <Layout>
    <Navbar>
      <Item><img src='path/to/my/logo.svg' /></Item>
      <Item>Pizza Parlour</Item>
      <Item grow />
      <Tray label='Tray pizza menu' anchor='right'>
        <MenuItem>Cheese Pizza</MenuItem>
        <MenuItem><a href='#'>Sausage Pizza</a></MenuItem>
      </Tray>
    </Navbar>
   </Layout>
)
```
#### Content
Now that the layout is established, the content component simply gives a little breathing room.
```js
import { Layout } from 'circle-ui'
const { Content } = Layout

export default () => (
  <Layout>
    <Content>
      <h1>Neato!</h1>
    </Content>
   </Layout>
)
```
#### Columns/Column
With room to breath, the layout can really begin to take shape, and columns work just as you think they would
```js
import { Layout } from 'circle-ui'
const { Content, Columns, Column } = Layout

export default () => (
  <Layout>
    <Content>
      <Columns>
        <Column flexGrow='1' />
        <Column maxWidth='700px'>
          <h1>This is now right in the middle of the layout!</h1>
        </Column>
        <Column flexGrow='1' />
      </Columns>
    </Content>
   </Layout>
)
```
#### Paper
The most basic piece of paper (component). A white background and some padding to keep everything tidy.
```js
import { Layout } from 'circle-ui'
const { Content, Columns, Column, Paper } = Layout

export default () => (
  <Layout>
    <Content>
      <Columns>
        <Column>
          <Paper>
            <h3>Column 1</h3>
          </Paper>
        </Column>
        <Column>
          <Paper>
            <h3>Column 2</h3>
          </Paper>
        </Column>
      </Columns>
    </Content>
   </Layout>
)
```

### Form
Forms are an essential piece of any ui but native elements have there place as well. Hopefully, a small collection of basic form components is all that's needed for a successful prototype.
```js
import { Form, Button } from 'circle-ui'
const { Group, Label, Input, Textarea } = Form

export default () => (
  <form method='post'>
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
      <Button type='submit'>submit</Button>
    </Group>
  </form>
)
```
### Button
Used in the example above, the button component comes next. Quite straightforward and nothing too crazy.
```js
import { Button } from 'circle-ui'

export default () => (
  <div>
    <Button>Primary blue</Button>
    <Button color='danger' shape='pill'>Danger pill</Button>
    <Button color='disabled'>Disabled gray</Button>
  </div>
)
```
### ChiaText
What a strange name. Modeled after the status input on Facebook, this starts with a large font-size only to shrink as the input length grows.
```js
import { ChiaText } from 'circle-ui'

export default () => (
  <ChiaText maxFontSize={3} /> // font size is in em units
)
```
### Responsive
A really simple, and effective, way to alter the layout based on common breakpoints.
```js
import { Layout, Responsive } from 'circle-ui'
const { Navbar } = Layout
const { Item } = Navbar

export default () => (
  <Layout>
    <Navbar>
      <Responsive isMobileHidden>
        <Item><img src='path/to/my/logo.svg' /></Item>
      </Responsive>
      <Item>Pizza Parlour</Item>
    </Navbar>
   </Layout>
)
```
or change the layout completely
```js
import { Layout, Responsive } from 'circle-ui'
const { Content, Columns, Column, Paper } = Layout

export default () => (
  <Layout>
    <Content>
      <Responsive isMobileHidden>
        <Paper>
          <h3>Only visible on desktop and tablets</h3>
        </Paper>
      </Responsive>
      <Responsive isDesktopHidden isTabletHidden>
        <Paper>
          <h3>Only visible on mobile!</h3>
        </Paper>
      </Responsive>
    </Content>
   </Layout>
)
```
### Animate
A little pizaz is always nice. A handful of animations and reveals borrowed from [Animate.css](https://github.com/daneden/animate.css)
```js
import { Animate } from 'circle-ui'

export default () => (
  <Animate name='bounceIn'>
    <h1>Bouncing on in!</h1>
    <p>Me too!</p>
  </Animate>
)
```
**Animations included:** bounce, flash, pulse, rubberBand, shake, swing, tada, wobble, bounceIn, fadeIn, slideInUp, zoomIn
