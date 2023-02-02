import React from "react";
import "./App.css";
import { Routes, Route, redirect } from "react-router-dom";
import Login from "./component/Login";
import Items from "./component/Items";
import Navigation from "./component/Navigation";
import Categories from "./component/Categories";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import ThisCategory from "./component/ThisCategory";
import ThisItem from "./component/ThisItem";
import ThisUser from "./component/ThisUser";
import MyAccount from "./component/MyAccount";

function App() {
  const [allItems, setAllItems] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [currentItem, setCurrentItem] = useState({});
  const [currentCategory, setCurrentCategory] = useState({});
  const [viewUser, setViewUser] = useState({});
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
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

  const handleNewItems = item => {
    fetch(`http://localhost:3000/items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })
      .then(response => response.json())
      .then(newItem => {
        setAllItems([...allItems, newItem])
      })
    setAllItems([...allItems, item])
  }

  
  // if (!user) return <Login onLogin={setUser} />

  function handleLogin(user) {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
  }

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <Container>
        <Navigation
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          user={user}
          setUser={setUser}
        />
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/myaccount"
            element={
              <MyAccount
                key={allCategories}
                user={user}
                setUser={setUser}
                darkMode={darkMode}
                allCategories={allCategories}
                setAllCategories={setAllCategories}
                handleNewItems={handleNewItems}
              />
            }
          />
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

          <Route
            path="/categories/:id"
            element={
              <div className="d-flex justify-content-center">
                <ThisCategory
                  currentCategory={currentCategory}
                  key={currentCategory.id}
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
