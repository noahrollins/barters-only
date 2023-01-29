import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Account from "./component/Account";
import Items from "./component/Items";
import Navigation from "./component/Navigation";
import Categories from "./component/Categories";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import ThisCategory from "./component/ThisCategory";
import ThisItem from "./component/ThisItem";
import ThisUser from "./component/ThisUser";

function App() {
  const [allItems, setAllItems] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [currentItem, setCurrentItem] = useState({});
  const [currentCategory, setCurrentCategory] = useState({});
  const [viewUser, setViewUser] = useState({});
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch(`/items`)
      .then((res) => res.json())
      .then((items) => {
        setAllItems(items);
        setCurrentItem(items[0]);
      });
    fetch(`/categories`)
      .then((res) => res.json())
      .then((categories) => {
        setAllCategories(categories);
      });
    fetch(`/users`)
      .then((res) => res.json())
      .then((users) => {
        setAllUsers(users);
      });
  }, []);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <Container>
        <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/categories"
            element={
              <Categories
                allCategories={allCategories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
                darkMode={darkMode}
              />
            }
          />
          <Route
            path="/items"
            element={
              <Items
                allItems={allItems}
                setCurrentItem={setCurrentItem}
                setViewUser={setViewUser}
                viewUser={viewUser}
                darkMode={darkMode}
              />
            }
          />
          <Route path="/account" element={<Account />} />
          <Route
            path="/categories/:id"
            element={
              <div className="d-flex justify-content-center">
                <ThisCategory
                  currentCategory={currentCategory}
                  key={currentItem.id}
                  currentItem={currentItem}
                  setCurrentItem={setCurrentItem}
                  darkMode={darkMode}
                />
              </div>
            }
          />
          <Route
            path="/items/:id"
            element={
              <ThisItem
                currentItem={currentItem}
                setCurrentItem={setCurrentItem}
                setViewUser={setViewUser}
                darkMode={darkMode}
              />
            }
          />
          <Route
            path="/users/:id"
            element={
              <ThisUser
                viewUser={viewUser}
                setViewUser={setViewUser}
                darkMode={darkMode}
                setCurrentItem={setCurrentItem}
              />
            }
          />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
