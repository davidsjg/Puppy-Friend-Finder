import React from "react";
import { Card, Button } from "react-bootstrap";

import styles from "./Card.module.css";

function CardDisplay() {
  return (
    <div>
      {/* <Card style={{ width: "18rem" }}> */}
      <Card className={styles["CardDisplay"]}>
        {/* <Card.Img variant="top" src={dogBackground} /> */}
        <Card.Body>
          <Card.Title className={styles["CardText"]}>
            <h1>Welcome to Puppy Friend Finder!</h1>
          </Card.Title>
          <Card.Text className={styles["CardText"]}>
            <h4>Who's a good boy?</h4>
          </Card.Text>
          <Button variant="primary" className={styles["CardText"]}>
            Find A Pup!
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardDisplay;
