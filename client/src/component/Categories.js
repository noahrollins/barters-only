import React from "react";
import CategoryCard from "./CategoryCard";

function Categories({
  allCategories,
  setCurrentCategory,
  currentCategory,
  darkMode,
}) {
  const categoryCards = allCategories.map((category) => {
    return (
      <CategoryCard
        key={category.id}
        category={category}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        darkMode={darkMode}
      />
    );
  });

  return (
    <div
      className="row row-cols-sm-3 d-flex justify-content-center"
      style={{ flexDirection: "row", gap: 10 }}
    >
      {categoryCards}
    </div>
  );
}

export default Categories;
