import React from "react";
import styles from "./CardShuffle.module.css";
import { Card, Button, Container } from "react-bootstrap";

function CardShuffle(props) {
  const dogPic2 = props.props.finalImage.message;

  // handleIncrement() {
  //   let query = "/breeds/image/random";
  //   let tempQuery = props.props.searchDogs(query)
  //   this.setState({ result: this.state.count + 1})
  // }

  return (
    <>
      <div className={styles["shuffle"]}>
        <Container className={styles["myCont"]}>
          <Card className={styles["CardShuffle"]}>
            <Card.Img
              className={styles["dogImage"]}
              variant="top"
              src={dogPic2}
            />
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
