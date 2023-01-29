import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation({ darkMode, setDarkMode }) {
  return (
    <Navbar
      bg={darkMode ? "black" : "white"}
      variant={darkMode ? "dark" : "light"}
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-brand">
          <Nav.Link
            onClick={() => {
              setDarkMode(!darkMode);
            }}
          >
            {darkMode ? (
              <img
                src="https://www.citypng.com/public/uploads/small/11641212959ieprpxnnresp8e1dwhz9wr2zuvt3jdxn4ckhn8illuhqrbkyr2mqyupdlj0venabywed3eavjmcdej82ewqckb8ift3jaoa0nouz.png"
                height={100}
                width={125}
              />
            ) : (
              <img
                src="https://www.citypng.com/public/uploads/small/11641212951vqoiupuphms2owsoeutwqanls25yooucsmjxajt1uz2l2cchxqndb2zfsf9vtiycq08jabqty3jozktgilbtmlf61szklkfvxggr.png"
                height={100}
                width={125}
              />
            )}
          </Nav.Link>
          <ul cl>
            <h1 className="justify-content-center">bartersOnly.com</h1>
            "Currency folks just don't get it.."
          </ul>
        </Nav>
      </Navbar.Collapse>

      <Nav className="justify-content-right">
        <Nav.Link as={Link} to="/myaccount">
          My Account
        </Nav.Link>
        <Nav.Link as={Link} to="/categories">
          Categories
        </Nav.Link>
        <Nav.Link as={Link} to="/items">
          Items
        </Nav.Link>
        <Nav.Link as={Link} to="/home">
          Logout/Login
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Navigation;
