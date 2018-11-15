import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Top from '../pages/Top'

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Top} />
    </Switch>
  )
}

export { Router }
