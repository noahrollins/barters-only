import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Account from "./component/Account";
import Items from "./component/Items";
import Navigation from "./component/Navigation";
import Categories from "./component/Categories";
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react'

function App() {

  const [allItems, setAllItems] = useState([])
  const [currentItem, setCurrentItem] = useState({})
  const [allCategories, setAllCategories] = useState([])
  const [currentCategory, setCurrentCategory] = useState({})
  const [allUsers, setAllUsers] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/items`)
      .then(res => res.json())
      .then(items => {
        setAllItems(items)
        setCurrentItem(items[0])
      })
    fetch(`http://localhost:3000/categories`)
      .then(res => res.json())
      .then(categories => {
        setAllCategories(categories)
        setCurrentCategory(categories[0])
      })
    fetch(`http://localhost:3000/users`)
      .then(res => res.json())
      .then(users => {
        setAllUsers(users)
      })
  }, [])



  return (
    <Container>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/items" element={<Items />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Container>
  );
}

export default App;
