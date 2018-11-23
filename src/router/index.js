import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import Top from '../pages/Top'
import { About } from '../pages/About'
import { Blog } from '../pages/Blog'
import { Portfolio } from '../pages/Portfolio'

const Router = () => {
  return (
    <Switch>
      <Route path="/blog" component={Blog} />
      <Route path="/about" component={About} />
      <Route exact path="/" component={Portfolio} />
    </Switch>
  )
}

export { Router }
