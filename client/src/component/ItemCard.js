import { Card, CardGroup } from "react-bootstrap";
import "./ItemCard.css";

function ItemCard ({item, setCurrentItem}) {
   
    const {name, image_url, category_id, user_id} = item
    const handleCurrentItem = (e) => {
        setCurrentItem(item)
    }
    

    return (
        <Card className="custom-card">
            <Card.Img
            variant="top"
            className="py-3 card-img"
            src={item.image_url}
            
            />
            <Card.Body className="text-center">
                <Card.Title className="fs-6">
                    {item.name}
                </Card.Title>
            </Card.Body>
        </Card>
    )

}

export default ItemCard;