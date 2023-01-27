import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCard from "./ItemCard";
import "./ItemCard.css";

function ThisCategory({currentCategory}) {
    console.log(currentCategory.items)
    if (currentCategory.items){
        return currentCategory.items.map(item => {
            return (
                    <ItemCard 
                    key={item.id}
                    item={item}
                    />
            )
        })
    
        // return (
        //     {categoryItems}
        // )

    } else {
        return "Hello"
    }
}

export default ThisCategory;