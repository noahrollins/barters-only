import { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Collapse from "react-bootstrap/Collapse";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

function NewItemForm({ allCategories, handleNewItems, user }) {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    const itemForm = document.querySelector('#new-item-form').elements
    const newItem = {
      name: itemForm[0].value,
      image_url : itemForm[1].value,
      category : category,
      user_id : user.id
    };
    setOpen(false);
    handleNewItems(newItem);
  }

  function handleSelect(eventKey) {
    setCategory(allCategories[eventKey - 1].name);
  }

  return (
    <>
      <Container className="d-flex justify-content-center">
        <h1>Items</h1>
      </Container>
      <Container className="d-flex justify-content-center">
        <Button
          size="sm"
          onClick={() => setOpen(!open)}
          variant="secondary"
          aria-expanded={open}
        >
          Add Item
        </Button>
      </Container>
      <Container className="d-flex justify-content-center">
        <Collapse in={open}>
          <Form style={{ width: "500px" }} id='new-item-form'>
            <Form.Group
              className="sb-3"
              style={{ width: "500px" }}
              controlId="formBasic"
            >
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="What would you like to trade?"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Image URL</Form.Label>
              <Form.Control type="text" placeholder="image.url"/>
            </Form.Group>
            <Form.Label>Category</Form.Label>

            <DropdownButton
              id="dropdown-basic-button"
              title={category === null ? "Select Category" : category }
              onSelect={handleSelect}
            >
              {allCategories.map((category, index) => (
                <Dropdown.Item eventKey={index + 1}>
                  {category.name}
                </Dropdown.Item>
              ))}
            </DropdownButton>
            <Button
              variant="primary"
              type="submit"
              className="float-right mt-2"
              onSubmit={handleSubmit}
            >
              Submit
            </Button>
          </Form>
        </Collapse>
      </Container>
    </>
  );
}

export default NewItemForm;
