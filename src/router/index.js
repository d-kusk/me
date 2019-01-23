import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Layout } from '../layouts/Layout'
import { Top } from '../pages/Top'
import { About } from '../pages/About'

const Router = () => {
  return (
    <Switch>
      <Route path="/about" render={props => <Layout content={<About />} />} />
      <Route path="/" render={props => <Layout content={<Top />} />} />
    </Switch>
  )
}

export { Router }
