import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCard from "./ItemCard";
import "./ItemCard.css";
import ThisCategory from "./ThisCategory";


function CategoryCard ({category, setCurrentCategory, }) {
   
    const {name, image_url, items} = category

    const handleSetCategory = (e) => {
        fetch(`http://localhost:3000/categories/${category.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
          setCurrentCategory(data)
          console.log(data)
        })
        // return (
        //     <ThisCategory category={data}/>
        // )
    }

    return (
        <Link
            to={`${category.id}`}
            onClick={handleSetCategory}
        >
            <Card className="custom-card">
                <Card.Img
                variant="top"
                className="py-3 card-img"
                src={category.image_url}
                
                />
                <Card.Body className="text-center">
                    <Card.Title className="fs-6">
                        {category.name}
                    </Card.Title>
                </Card.Body>
            </Card>
        </Link>
    )

}

export default CategoryCard;