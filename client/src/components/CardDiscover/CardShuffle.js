import React from "react";
import styles from "./CardShuffle.module.css";
import { Card, Button, Container } from "react-bootstrap";
import DispPup from "../dispPup";

function CardShuffle(props) {
  console.log(props);

  return (
    <>
      <Container className={styles["myCont"]}>
        <Card className={styles["CardShuffle"]}>
          <DispPup className={styles["CardShuffle"]} props={props} />
          <Card.Body className={styles["center"]}>
            <Button variant="primary" className={styles["ButtonText"]}>
              Next Pup!
            </Button>
            <Button
              variant="primary"
              className={styles["ButtonText"]}
              onClick={props.props.handleIncrement}
            >
              Like this Pup!
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default CardShuffle;
