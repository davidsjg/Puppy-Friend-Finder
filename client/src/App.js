import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import About from './pages/about'
import Discover from './pages/discover'
import Search from './pages/search'
import NavBar from './components/NavBar/NavBar';

function App() {
  return (

    <Router>
      <NavBar/>
      <Switch>
        <Route exact path={'/'}>
          <About/>
        </Route>
        <Route exact path={'/home'}>
          <About/>
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
