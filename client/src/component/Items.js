import React from "react";
import ItemCard from "./ItemCard";

function Items({ allItems, setCurrentItem, viewUser, setViewUser, darkMode }) {
  const itemCards = allItems.map((item) => {
    return (
      <ItemCard
        key={item.id}
        item={item}
        setCurrentItem={setCurrentItem}
        setViewUser={setViewUser}
        darkMode={darkMode}
        viewUser={viewUser}
      />
    );
  });

  return (
    <div
      className="row row-cols-md-6 d-flex justify-content-center"
      style={{ flexDirection: "row", gap: 10 }}
    >
      {itemCards}
    </div>
  );
}

export default Items;
