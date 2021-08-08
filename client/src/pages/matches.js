import React from "react";
import { Card } from "react-bootstrap";

function Matches(props) {
  console.log(props);
  let dogTempArr = [];
  dogTempArr = JSON.parse(localStorage.getItem("dogArr"));
  console.log(dogTempArr);

  // dogTempArr2 = localStorage.getItem("dogArr").map(function (i) {
  //   return i + 1;
  // });

  return (
    <>
      {dogTempArr.map((dog) => {
        {
          console.log(dog);
        }
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={`"${dog}"`} />
          Hello
        </Card>;
      })}
    </>
  );
}

export default Matches;
