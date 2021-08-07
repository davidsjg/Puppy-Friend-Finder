import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/about";
import Discover from "./pages/discover";
import Search from "./pages/search";
import NavBar from "./components/NavBar/NavBar";
import CardFooter from "./components/CardFooter/CardFooter";
import API from "./utils/API";

class App extends Component {
  state = {
    result: {},
  };

  componentDidMount() {
    let query = "/breeds/image/random";
    this.searchDogs(query);
  }

  searchDogs = (query) => {
    API.search(query)
      .then((res) => {
        console.log(res);
        this.setState({ results: res.data });
      })

      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path={"/"}>
            <About />
          </Route>
          <Route exact path={"/home"}>
            <About />
          </Route>
          <Route exact path={"/about"}>
            <About />
          </Route>
          <Route exact path={"/discover"}>
            <Discover />
          </Route>
          <Route exact path={"/search"}>
            <Search />
          </Route>
        </Switch>
        <CardFooter />
      </Router>
    );
  }
}
export default App;
