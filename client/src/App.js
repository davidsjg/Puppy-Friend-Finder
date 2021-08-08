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
    likes: 0,
    dogArr: [],
  };

  componentDidMount() {
    let query = "/breeds/image/random";
    this.searchDogs(query);
  }

  searchDogs = (query) => {
    API.search(query)
      .then((res) => {
        console.log(res);
        this.setState({ result: res.data });
      })

      .catch((err) => console.log(err));
  };

  searchDogs2 = (query) => {
    API.search(query)
      .then((res) => {
        console.log(res);
        console.log(this.state.dogArr);
        console.log(this.state.likes);
        var joined = this.state.dogArr.concat(res.data.message);

        this.setState({
          likes: this.state.likes + 1,
          result: res.data,
          dogArr: joined,
        });
      })

      .catch((err) => console.log(err));
  };

  handleIncrement = () => {
    // this.setState({ result: this.state.likes + 1 });
    const rndInt = Math.floor(Math.random() * 5) + 1;
    console.log(rndInt);

    let randomArr = [
      "error",
      "like",
      "dislike",
      "dislike",
      "dislike",
      "dislike",
    ];

    let randomLike = randomArr[rndInt];

    let like = "like";
    let query = "/breeds/image/random";

    if (like === randomLike) {
      // this.state.likes = this.state.likes + 1;
      // console.log("currLikes = " + currLikes);
      console.log(this.state.result.message);

      this.searchDogs2(query);

      // console.log(tempDog2);
      // this.setState({
      //   likes: this.state.likes + 1,
      //   result: this.searchDogs2(query),
      // });
    } else {
      this.searchDogs(query);
    }
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
            <Discover
              searchDogs={this.searchDogs}
              finalImage={this.state.result}
              handleIncrement={this.handleIncrement}
              numDogLikes={this.state.likes}
            />
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
