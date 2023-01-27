import React from "react";
import { CardGroup, Container } from "react-bootstrap";
import CategoryCard from "./CategoryCard";

function Categories({allCategories, setCurrentCategory, currentCategory}) {

    const categoryCards = allCategories.map(category => {
        return (
          <CategoryCard
            key={category.id}
            category={category}
            setCurrentCategory={setCurrentCategory}
            currentCategory={currentCategory}
          />
        )
      })
      console.log(categoryCards)
    return(
        <div className="row row-cols-sm-3 d-flex justify-content-center">
            {categoryCards}
        </div>
    )
}

export default Categories;