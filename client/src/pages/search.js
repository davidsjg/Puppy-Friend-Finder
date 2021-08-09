import React from "react";
import styles from "./Searches.module.css";
import { Card, Container } from "react-bootstrap";

function Search(props) {
  console.log(props);

  return (
    <>
      <div className={styles["shuffle"]}>
        <Container className={styles["myCont"]}>
          <Card className={styles["CardShuffle"]}>
            <Card.Img
              className={styles["dogImage"]}
              variant="top"
              //   src={props.props.finalImage.message}
            />
          </Card>
        </Container>
      </div>
    </>
  );
}

export default Search;
