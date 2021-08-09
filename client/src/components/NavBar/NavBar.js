import React from "react";
import { Nav } from "react-bootstrap";
import styles from "./NavBar.module.css";

function NavBar(props) {
  console.log(props);
  return (
    <div>
      <Nav activeKey="/" className={styles["NavBarTop"]}>
        <Nav.Item>
          <Nav.Link className={styles["NavItem1"]} href="/">
            Puppy Friend Finder
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className={styles["NavItem1"]} href="/about">
            About
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={props.searchDogs3}
            className={styles["NavItem1"]}
            href="/discover"
          >
            Discover
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={props.searchDogs3}
            className={styles["NavItem1"]}
            href="/search"
          >
            Search
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default NavBar;
