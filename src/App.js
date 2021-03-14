import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import Movie from './SingleMovie'

function App() {
  return (
    <Switch>
      <Route path='/' exact>
        <Home/>
      </Route>
      {/* dynamic routing, when some component don't know their children ahead of time, use children prop to pass children element directly into their output */}
      <Route path = '/movies/:id' children = {<Movie/>}/>
    </Switch>
  )
}

export default App
