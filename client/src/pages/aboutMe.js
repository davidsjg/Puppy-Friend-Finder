import React from "react";
import CardDisplay from "../components/CardAbout/CardDisplay.js";

function AboutMe(props) {
  console.log(props);
  return (
    <>
      <CardDisplay props={props} />
    </>
  );
}

export default AboutMe;
