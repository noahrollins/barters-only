import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ItemCard.css";

function ThisItem({ currentItem, setViewUser, darkMode }) {
    if (currentItem) {
      return (
        <Card
          className="flex-fill"
          bg={darkMode ? "secondary" : "light"}
          variant={darkMode ? "secondary" : "light"}
        >
          <Card.Img variant="top" src={currentItem.image_url} />
          <Card.Body className="text-center">
            <Card.Title className="fs-6">{currentItem.name}</Card.Title>
          </Card.Body>
          <Card.Footer>
            <Card.Link
              as={Link}
              to={`/users/${currentItem.user.id}`}
              onClick={setViewUser(currentItem.user)}
              style={darkMode ? { color: "white" } : { color: "" }}
            >
              {currentItem.user.name}
            </Card.Link>
          </Card.Footer>
        </Card>
      );
    } else {
      return "Hello";
    }
}

export default ThisItem;
