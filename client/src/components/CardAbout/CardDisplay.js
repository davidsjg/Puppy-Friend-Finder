import React from "react";
import { Card, Button } from "react-bootstrap";

import styles from "./Card.module.css";

function CardDisplay(props) {
  return (
    <>
      {/* <Card style={{ width: "18rem" }}> */}
      <Card className={styles["CardDisplay"]}>
        {/* <Card.Img variant="top" src={dogBackground} /> */}
        <Card.Body>
          <Card.Title className={styles["CardText"]}>
            <h1>Welcome to Puppy Friend Finder!</h1>
          </Card.Title>
          <Card.Text className={styles["CardText"]}>
            Who's a good boy?
          </Card.Text>
          <Button
            variant="primary"
            href="/discover"
            onClick={props.searchDogs3}
            className={styles["CardText"]}
          >
            Find A Pup!
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardDisplay;
