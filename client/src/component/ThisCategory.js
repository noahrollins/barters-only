import ItemCard from "./ItemCard";
import "./ItemCard.css";

function ThisCategory({
  currentCategory,
  setCurrentItem,
  setViewUser,
  viewUser,
  darkMode,
}) {
  if (currentCategory.items) {
    return currentCategory.items.map((item) => {
      console.log(item.id);
      return (
        <ItemCard
          key={item.id}
          item={item}
          setCurrentItem={setCurrentItem}
          setViewUser={setViewUser}
          viewUser={viewUser}
          darkMode={darkMode}
        />
      );
    });
  } else {
    return "Hello";
  }
}

export default ThisCategory;
