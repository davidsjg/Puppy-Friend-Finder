import React from "react";
import styles from "./Searches.module.css";
import { Button, DropdownButton, Dropdown } from "react-bootstrap";

function Search(props) {
  let query = "breed/Affenpinscher/images/random";
  let dogResult = props.results.message;
  console.log(dogResult);

  return (
    <>
      <h1>Hello from SEARCH!</h1>
      <div id={styles["dogSearch"]}>f</div>
      <Button onClick={props.searchDogs3}>Click Me</Button>

      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
        <Dropdown.Item
          // { dogResult.map((option, key) => <option key={key} >{option}</option>) }
          href="#/action-1"
        >
          Action
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownButton>
    </>
  );
}

export default Search;

{
  /* <select>
{ this.state.options.map((option, key) => <option key={key} >{option}</option>) }
</select> */
}
