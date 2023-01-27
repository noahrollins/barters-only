import React from "react";
import { CardGroup, Container } from "react-bootstrap";
import ItemCard from "./ItemCard";

function Items({allItems, setCurrentItem}) {

    const itemCards = allItems.map(item => {
        return (
          <ItemCard
            key={item.id}
            item={item}
            setCurrentItem={setCurrentItem}
          />
        )
      })
      
    return(
        <div className="row row-cols-md-6  d-flex justify-content-center">
            {itemCards}
        </div>
    )
}

export default Items;