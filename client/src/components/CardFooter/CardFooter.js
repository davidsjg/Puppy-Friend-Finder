import React from "react";
import { Card, Button } from "react-bootstrap";

import styles from "./Card.module.css";

function CardFooter() {
  return (
    <footer className={styles["footer"]}>
      <span>Puppy Friend Finder 2021</span>
    </footer>
  );
}

export default CardFooter;
