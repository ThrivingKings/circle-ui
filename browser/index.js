import { render } from 'react-dom'
import React from 'react'

import Layout from 'components/layout/index'

// CommonJS/webpack dynamic require
const req = require.context('./examples', true, /^(.*\.(js$))[^.]*$/igm)
const examples = req.keys().map(function(key){
  return req(key).default
})

// An individual demo
const Demo = props => {
  const { demo } = props
  const {
    title,
    props: demoProps,
    component: DemoComponent
} = demo

  return (
    <div className="demo">
      <h4>{title}</h4>
      <div className="demo-component">
        <DemoComponent { ...demoProps } />
      </div>
    </div>
  )
}

const Examples = ({ examples }) => (
  <div>
    {examples.map((ex, i) => (
      <div key={i}>
        <h2>{ex.name}</h2>
        <Layout.Paper>
          {ex.demos.map((demo, i) =>
            <Demo key={i} demo={demo} />
          )}
        </Layout.Paper>
      </div>
    ))}
  </div>
)

const navbarMenuLabel = <div style={{padding:20}}>My menu</div>
const { Navbar, Content } = Layout
const { Item } = Navbar

render(
  <Layout>
    <Navbar>
      <Item><img src="logo.svg" style={{ height: 40 }}/></Item>
      <Item><b>Package browser</b></Item>
    </Navbar>
    <Content>
      <Examples examples={examples} />
    </Content>
  </Layout>
, document.querySelector('.example-browser'))
