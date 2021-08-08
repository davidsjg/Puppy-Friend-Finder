import React from "react";
import CardShuffle from "../components/CardDiscover/CardShuffle";

function Discover(props) {
  console.log("hello from discover");
  console.log(props);
  return (
    <>
      <CardShuffle props={props} />
    </>
  );
}

export default Discover;
