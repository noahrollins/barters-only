import NewItemForm from "../NewItemForm.js";
import Login from "../component/Login.js";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";

function MyAccount({ user, setUser, allCategories, handleNewItems }) {

  if (!user) {
    return <Login onLogin={setUser} />;
  } else {
    return (
      <>
        <Container className="d-flex justify-content-center" >
          <h1>Info</h1>
        </Container>
        <Container style={{ width: "500px" }}>
          <ListGroup className="d-flex wrap">
            <ListGroup.Item>
              Name : {user.name}
              <Button variant="link" className="">
                Edit
              </Button>
            </ListGroup.Item>
            <ListGroup.Item>
              Email : {user.email} <Button variant="link">Edit</Button>
            </ListGroup.Item>
            <ListGroup.Item>
              Password : {user.password} <Button variant="link">Edit</Button>
            </ListGroup.Item>
          </ListGroup>
        </Container>
        <NewItemForm allCategories={allCategories} handleNewItems={handleNewItems} user={user}/>
      </>
    );
  }
}

export default MyAccount;
