import React from "react";
import styles from "./CardShuffle.module.css";
import { Card, Button, Container } from "react-bootstrap";

function CardShuffle() {
  const dogPic =
    "https://images.unsplash.com/photo-1542491787-21e4d00411c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80";
  return (
    <>
      <div className={styles["shuffle"]}>
        <Container className={styles["myCont"]}>
          <Card className={styles["CardShuffle"]}>
            <Card.Img variant="top" src={dogPic} />
            <Card.Body className={styles["center"]}>
              <Button variant="primary" className={styles["ButtonText"]}>
                Next Pup!
              </Button>
              <Button variant="primary" className={styles["ButtonText"]}>
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
