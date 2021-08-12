import React, { Component } from "react";
import styles from "./Search2.module.css";
import API from "../utils/API";
import { Dropdown } from "react-bootstrap";
import SearchForm from "../components/SearchForm/SearchForm";

export default class Search2 extends Component {
  state = {
    search: "",
    breeds: [],
    results: [],
    error: "",
  };

  componentDidMount() {
    API.getBaseBreedList().then((res) =>
      this.setState({ breeds: res.data.message })
    );
  }

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.getDogsOfBreedList(this.state.search).then((res) => {
      if (res.data.status === "error") {
        throw new Error(res.data.message);
      }
      this.setState({ results: res.data.message, error: "" });
    });
  };

  render() {
    {
      console.log(this.state.result);
    }

    return (
      <div className={styles["myCont"]}>
        <h3>Search for A Dog</h3>

        <SearchForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          breeds={this.state.breeds}
        />
      </div>
    );
  }
}
