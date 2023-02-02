import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ItemCard.css";

function ItemCard({ item, setCurrentItem, setViewUser, darkMode, viewUser }) {
  const { name, image_url, user_id } = item;


  const handleSetItem = (e) => {
    fetch(`http://localhost:3000/items/${item.id}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentItem(data);
      });
  };

  const handleSetUser = (userId) => {
    fetch(`http://localhost:3000/users/${item.user.id}`)
      .then((res) => res.json())
      .then((data) => {
        setViewUser(data);
      });
  };

  return (
    <Card
      className="custom-card"
      bg={darkMode ? "secondary" : "light"}
      variant={darkMode ? "secondary" : "light"}
    >
      <Card.Img variant="top" className="py-3 card-img" src={image_url} />
      <Card.Body
        className="text-center"
        as={Link}
        to={`/items/${item.id}`}
        onClick={() => handleSetItem()}
      >
        <Card.Title className="fs-6">{name}</Card.Title>
      </Card.Body>
      <Card.Footer>
        <Card.Link
          as={Link}
          to={item.user === viewUser ? `/items/${item.id}` : `/users/${item.user_id}`}
          onClick={() => handleSetUser(user_id)}
          style={darkMode ? { color: "white" } : { color: "" }}
        >
          {item.user === viewUser ? item.name: item.user.name}
        </Card.Link>
      </Card.Footer>
    </Card>
  );
}

export default ItemCard;
