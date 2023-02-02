import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ItemCard.css";

function CategoryCard({ category, setCurrentCategory, darkMode }) {
  const { name, image_url } = category;

  const handleSetCategory = (e) => {
    fetch(`http://localhost:3000/categories/${category.id}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentCategory(data);
      });
  };

  return (
    <Card
      className="custom-card"
      bg={darkMode ? "secondary" : "light"}
      variant={darkMode ? "secondary" : "light"}
    >
      <Card.Img
        variant="top"
        className="py-3 card-img"
        src={image_url}
      />
      <Card.Body
        className="text-center"
        as={Link}
        to={`${category.id}`}
        onClick={handleSetCategory}
      >
        <Card.Title className="fs-6">{name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default CategoryCard;
