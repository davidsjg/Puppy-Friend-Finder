import React from "react";
import { Card, Button } from "react-bootstrap";
import styles from "./Card.module.css";

function CardLlikes(props) {
  console.log("hello from CardLikes");
  console.log(props);

  let currDogArr = [];

  // let tempDogArr = new Array[props.doggieArr.length]();

  props.props.doggieArr.map((dog) => {
    currDogArr.push(dog);
  });

  console.log(currDogArr);

  localStorage.setItem("dogArr", JSON.stringify(currDogArr));
  return (
    <div className={styles["cardContainer"]}>
      <Card className={styles["cardLikes"]}>
        <Card.Body>
          <Card.Text>Total likes = {props.props.numDogLikes}</Card.Text>
          <Button variant="primary" href="/matches">
            See Matched Pups!
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardLlikes;
