import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Movie } from './pages/Movie'
import { NotFound } from './pages/NotFound'

export const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={ Home }/>
      <Route exact path='/movie/:id' component={ Movie }/>
      <Route component={ NotFound } />
    </Switch>
  );
}
