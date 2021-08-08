import React from "react";
import CardShuffle from "../components/CardDiscover/CardShuffle";
import CardLikes from "../components/CardLikes/CardLikes";

function Discover(props) {
  return (
    <>
      <CardShuffle props={props} />
      <CardLikes props={props} />
    </>
  );
}

export default Discover;
