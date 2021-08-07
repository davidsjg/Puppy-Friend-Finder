import React from "react";
import { Nav } from "react-bootstrap";

function NavBar() {
  return (
    <div>
      <Nav
        activeKey="/"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/">Puppy Friend Finder</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/discover">Discover</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/search">Search</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default NavBar;
