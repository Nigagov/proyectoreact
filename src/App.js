import './App.css';
import { useState, createContext } from 'react'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/Navbar/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetail/ItemDetail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartWidget from './components/CartWidget/CartWidget'
import { CartContextProvider } from './context/CartContext'
import { UserContextProvider } from './context/UserContext'

function App() {

  return (
    <div className="App">
      <UserContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path= '/' element={<ItemListContainer greeting="Nuestros productos"/>}/>
            <Route path= '/category/:categoryId' element={<ItemListContainer greeting="Estamos filtrando"/>}/>
            <Route path= '/ detail/:productId' element={<ItemListContainer />} />
            <Route path='/cart' element={<h1>CART</h1>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
