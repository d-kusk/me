import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Layout } from '../layouts/Layout'
// import Top from '../pages/Top'
import { About } from '../pages/About'
import { Blog } from '../pages/Blog'
import { Portfolio } from '../pages/Portfolio'

const Router = () => {
  return (
    <Switch>
      <Route path="/blog" render={props => <Layout content={<Blog />} />} />
      <Route path="/about" render={props => <Layout content={<About />} />} />
      <Route
        exact
        path="/"
        render={props => <Layout content={<Portfolio />} />}
      />
    </Switch>
  )
}

export { Router }
