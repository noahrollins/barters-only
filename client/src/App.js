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
import ItemCard from "./component/ItemCard"
import ThisCategory from "./component/ThisCategory";

function App() {

  const [allItems, setAllItems] = useState([])
  const [currentItem, setCurrentItem] = useState({})
  const [allCategories, setAllCategories] = useState([])
  const [currentCategory, setCurrentCategory] = useState({})
  const [allUsers, setAllUsers] = useState([])

  useEffect(() => {
    fetch(`/items`)
      .then(res => res.json())
      .then(items => {
        setAllItems(items)
      })
    fetch(`/categories`)
      .then(res => res.json())
      .then(categories => {
        setAllCategories(categories)
      })
    fetch(`/users`)
      .then(res => res.json())
      .then(users => {
        setAllUsers(users)
      })
  }, [])
  console.log(allCategories)

  const itemCards = allItems.map(item => {
    return (
      <ItemCard
        key={item.id}
        item={item}
        setCurrentItem={setCurrentItem}
      />
    )
  })

  return (
    <Container>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories allCategories={allCategories} setCurrentCategory={setCurrentCategory} currentCategory={currentCategory}/>} />
        <Route path="/items" element={<Items allItems={allItems} setCurrentItem={setCurrentItem}/>} />
        <Route path="/account" element={<Account />} />
        <Route path="/categories/:id" element={
          <div className="d-flex justify-content-center">
            <ThisCategory currentCategory={currentCategory}/>
          </div>    
        }/>
      </Routes>
    </Container>
  );
}

export default App;
