import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import './App.css'
import ItemListContainer from '/components/ItemListContainer/ItemListContainer'
import NavBar from '/components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import { Carousel } from 'bootstrap';
import CartContainer from '../components/CartContainer/CartContainer';


function App() {
  let greeting= `BIENVENIDOS`
  

  return (
    <div className="App">
      <div>
        <BrowserRouter>


      
        <NavBar/>
        <Routes>
        
        <Route path='/' element= {<ItemListContainer
        bienvenida={greeting}/>}/>
        
        
        <Route path='/' element= {<ItemDetailContainer/>}/>


        <Route path='/' element= {<CartContainer/>}/>


        </Routes>
         
         </BrowserRouter>
      </div>
    </div>
  )
}

export default App
