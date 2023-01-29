import { Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ItemCard.css";
import ItemCard from "./ItemCard";

function ThisUser({ viewUser, setViewUser, darkMode, setCurrentItem }) {
  if (viewUser.items) {
    const { name, email, trades, rating, items } = viewUser;
    console.log(viewUser.items);
    const userItemsCards = viewUser.items.map((item) => {
      return (
        <ItemCard
          key={item.id}
          item={item}
          darkMode={darkMode}
          setViewUser={setViewUser}
          setCurrentItem={setCurrentItem}
        />
      );
    });
    console.log(viewUser);

    return (
      <>
        <Card
          className="flex-fill"
          bg={darkMode ? "secondary" : "light"}
          variant={darkMode ? "secondary" : "light"}
        >
          <Card.Img
            variant="top"
            className="py-3 card-img"
            src={"https://static.thenounproject.com/png/1079574-200.png"}
          />
          <Card.Body className="text-center">
            <Card.Title className="fs-6">{viewUser.name}</Card.Title>
            <Card.Link style={darkMode ? { color: "white" } : { color: "" }}>
              {viewUser.email}
            </Card.Link>
          </Card.Body>
          <Card.Footer className="text-center">
            Rating: {viewUser.rating} | Trades: {viewUser.trades}
          </Card.Footer>
        </Card>
        <div className="row row-cols-md-6 d-flex justify-content-center"
      style={{ flexDirection: "row", gap: 10 }}>
        {userItemsCards}
        </div>
      </>
    );
  } else {
    return "Hello";
  }
}

export default ThisUser;
