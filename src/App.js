import logo from './logo.svg';
import './App.css';
import { useState, createContext } from 'react'
import Navbar from './components/Navbar/Navbar'
import Counter from './components/Counter/Counter';
import ItemListContainer from './components/Navbar/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetail/ItemDetail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartWidget from './components/CartWidget/CartWidget'
import { CartContextProvider } from './context/CartContext'
import { UserContextProvider } from './context/UserContext'
import { NotificationProvider } from './notification/Notification'


function App() {

  return (
    <div className="App">
      <NotificationProvider>
        <UserContextProvider>
          <CartContextProvider>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path='/' element={<ItemListContainer greeting="our products" />} />
                <Route path='/category/:categoryId' element={<ItemListContainer greeting="category of our products" />} />
                <Route path='/ detail/:productId' element={<ItemListContainer />} />
                <Route path='/cart' element={<h1>CART</h1>} />
              </Routes>
            </BrowserRouter>
          </CartContextProvider>
        </UserContextProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;
