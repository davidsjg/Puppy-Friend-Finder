import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import About from './pages/about'
import Discover from './pages/discover'
import Home from './pages/home'
import Search from './pages/search'

function App() {
  return (

    <Router>
      <Switch>
        <Route exact path={'/'}>
          <Home/>
        </Route>
        <Route exact path={'/home'}>
          <Home/>
        </Route>
        <Route exact path={'/about'}>
          <About/>
        </Route>
        <Route exact path={'/discover'}>
          <Discover/>
        </Route>
        <Route exact path={'/search'}>
          <Search/>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
