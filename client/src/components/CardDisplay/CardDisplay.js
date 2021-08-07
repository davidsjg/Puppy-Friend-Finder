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
          <Card.Title>Welcome to Puppy Friend Finder!</Card.Title>
          <Card.Text>Who's a good boy?</Card.Text>
          <Button variant="primary">Find A Pup!</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardDisplay;
