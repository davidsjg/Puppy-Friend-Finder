import React, { Component } from "react";
import styles from "./Search2.module.css";
import API from "../utils/API";
import { Dropdown } from "react-bootstrap";

export default class Search2 extends Component {
  state = {
    result: {},
    tempArr: ["horse", "blue", "hospital"],
  };

  searchDogs(dog) {
    API.getDogArr(dog).then((res) => {
      this.setState({ result: res.data });
    });
  }

  componentDidMount() {
    this.searchDogs("hound");
  }

  render() {
    {
      console.log(this.state);
    }
    {
      if ((this.state.result = "")) {
        return (
          <div className={styles["myCont"]}>
            <h3>Search for A Dog</h3>
            <div>
              <div className={styles["hello"]}>Breed Name:</div>
            </div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {this.state.result.map((dog) => {
                  return <Dropdown.Item>{dog}</Dropdown.Item>;
                })}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        );
      } else {
        return (
          <div className={styles["myCont"]}>
            <h3>Search for A Dog</h3>
            <div>
              <div className={styles["hello"]}>Breed Name:</div>
            </div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {this.state.tempArr.map((dog) => {
                  return <Dropdown.Item>{dog}</Dropdown.Item>;
                })}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        );
      }
    }
  }
}
