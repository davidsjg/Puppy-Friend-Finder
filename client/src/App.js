import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Discover from "./pages/discover";
import Search from "./pages/search";
import NavBar from "./components/NavBar/NavBar";
import CardFooter from "./components/CardFooter/CardFooter";
import API from "./utils/API";
import Matches from "./pages/matches";
import AboutMe from "./pages/aboutMe";
import Search2 from "./pages/search2";

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
        this.setState({ result: res.data });
      })

      .catch((err) => console.log(err));
  };

  searchDogs2 = (query) => {
    API.search(query)
      .then((res) => {
        var joined = this.state.dogArr.concat(res.data.message);

        this.setState({
          likes: this.state.likes + 1,
          result: res.data,
          dogArr: joined,
        });
      })

      .catch((err) => console.log(err));
  };

  searchDogs3 = () => {
    let query1 = "/breed/hound/images";
    API.search(query1)
      .then((res) => {
        this.setState({
          result: res.data,
        });
      })

      .catch((err) => console.log(err));
  };

  handleIncrement = (value) => {
    // this.setState({ result: this.state.likes + 1 });
    const rndInt = Math.floor(Math.random() * 5) + 1;

    let randomArr = ["error", "like", "like", "like", "like", "dislike"];

    let randomLike = randomArr[rndInt];

    let like = "like";
    let query = "/breeds/image/random";

    if (like === randomLike) {
      // this.state.likes = this.state.likes + 1;
      // console.log("currLikes = " + currLikes);
      let tempLikes = parseInt(this.state.likes) + 1;
      console.log(typeof tempLikes);
      console.log("Current likes = " + tempLikes);
      this.searchDogs2(query);

      // console.log(tempDog2);
      // this.setState({
      //   likes: this.state.likes + 1,
      //   result: this.searchDogs2(query),
      // });
    } else {
      this.searchDogs3(query);
    }
  };

  render() {
    return (
      <Router>
        <NavBar searchDogs3={this.searchDogs3} finalImage={this.state.result} />
        <Switch>
          <Route exact path={"/"}>
            <AboutMe
              result={this.state.result}
              searchDogs3={this.searchDogs3}
            />
          </Route>
          <Route exact path={"/home"}>
            <AboutMe
              result={this.state.result}
              searchDogs3={this.searchDogs3}
            />
          </Route>
          <Route exact path={"/about"}>
            <AboutMe
              result={this.state.result}
              searchDogs3={this.searchDogs3}
            />
          </Route>
          <Route exact path={"/discover"}>
            <Discover
              searchDogs={this.searchDogs}
              finalImage={this.state.result}
              handleIncrement={this.handleIncrement}
              numDogLikes={this.state.likes}
              doggieArr={this.state.dogArr}
            />
          </Route>
          <Route exact path={"/search"}>
            <Search2 />
          </Route>
          <Route exact path={"/matches"}>
            <Matches numDogLike={this.state.dogArr} />
          </Route>
        </Switch>
        <CardFooter />
      </Router>
    );
  }
}
export default App;
