import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Aside from './pages/Aside'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/aside' exact component={Aside} />
      <Route path='/navbar' exact component={Navbar} />
      <Route path='/footer' exact component={Footer} />
    </Switch>
  </BrowserRouter>
)

export default Routes
