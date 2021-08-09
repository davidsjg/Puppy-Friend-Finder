import React from "react";
import { Card } from "react-bootstrap";

function DispPup(props) {
  {
    console.log(props);
    if (props.props.props.finalImage[0]) {
      return (
        <Card.Img
          //   className={styles["dogImage"]}
          variant="top"
          src={props.props.props.finalImage.message[0]}
        />
      );
    }
    return (
      <Card.Img
        // className={styles["dogImage"]}
        variant="top"
        src={props.props.props.finalImage.message}
      />
    );
  }
}

export default DispPup;
