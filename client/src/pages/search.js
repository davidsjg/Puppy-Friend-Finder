import React from "react";
import styles from "./Searches.module.css";

function Search() {
  return (
    <div>
      <h1>Hello from SEARCH!</h1>
      <div id={styles["dogSearch"]}>f</div>
      {/* https://dog.ceo/api/breed/Affenpinscher/images/random */}
    </div>
  );
}

export default Search;
