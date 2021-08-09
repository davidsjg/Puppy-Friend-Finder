import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import BR from "../components/BR";
// import styles from "./Matches.module.css";

function Matches(props) {
  let dogTempArr = [];
  dogTempArr = JSON.parse(localStorage.getItem("dogArr"));
  console.log(dogTempArr);

  return (
    <>
      <Container fluid className="App py-2 overflow-hidden">
        <Row className="justify-content-center">
          {dogTempArr.map((dog) => {
            console.log(`"${dog}"`);
            return (
              <Col className="card-example d-flex flex-row flex-nowrap overflow-auto">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={`${dog}`} />
                  <Card.Body>
                    <Card.Title>CHUM</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
        <BR />
        <Button href="/discover">Match With More Dogs!</Button>
        <BR />
        <BR />

        <Button href="/discover">Return Home</Button>
      </Container>
    </>
  );
}

export default Matches;
