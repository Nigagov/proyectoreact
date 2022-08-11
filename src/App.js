import './App.css';
// import { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import Counter from './components/Counter/Counter';
import ItemListContainer from './components/Navbar/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Animation from './components/Animation/Animation';
import Cafes from './components/Cafes/cafe';


function App() {
  const [show, setShow] = useState(true)

  const handleOnAdd = (quantity) => {
    console.log('cantidad de cafes agregados', quantity)
  }

  return (
    <div className="App">
       {
          <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path= '/' element={<ItemListContainer greeting="Nuestros productos"/>}/>
            <Route path= '/category/:categoryId' element={<ItemListContainer greeting="Estamos filtrando"/>}/>
            <Route path= '/ detail/:productId' element={<ItemListContainer />}/>
          </Routes>
          </BrowserRouter>} 
          {/* <Animation/> */}
          <Cafes />
    </div>
  );
}

export default App;
