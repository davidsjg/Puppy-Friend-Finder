import React from "react";
import styles from "./CardShuffle.module.css";
import { Card, Button, Container } from "react-bootstrap";
import DispPup from "../dispPup";

function CardShuffle(props) {
  console.log(props);

  return (
    <>
      <div className={styles["shuffle"]}>
        <Container className={styles["myCont"]}>
          <Card className={styles["CardShuffle"]}>
            <DispPup props={props} />
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
      </div>
    </>
  );
}

export default CardShuffle;
