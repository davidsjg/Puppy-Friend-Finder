import React from "react";
import styles from "./Searches.module.css";
import { Card, Container, Button } from "react-bootstrap";

function Search(props) {
  {
    console.log(props);

    if (props.results[0]) {
      return (
        <Card.Img
          //   className={styles["dogImage"]}
          variant="top"
          src={props.results.message[0]}
        />
      );
    }
    return (
      <Card.Img
        // className={styles["dogImage"]}
        variant="top"
        src={props.results.message}
      />
    );
  }
}

export default Search;
