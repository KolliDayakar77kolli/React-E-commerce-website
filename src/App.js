import React, {useState} from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from "./Navbar";
import Home from './Home';
import Products from './Products'
import ProdSpec from './ProdSpec'

function App() {
  const [isloggedIn, setisloggedIn] = useState(JSON.parse(localStorage.getItem('isloggedIn')));
  return (
    <>
      <BrowserRouter>
        <Navbar isloggedIn={isloggedIn} setisloggedIn={setisloggedIn}/>

        <Routes>
          <Route path='/' element={  <Home isloggedIn={isloggedIn} />} />
          <Route path='/Products' element={isloggedIn == true ? <Products /> : <Navigate to='/' />} />
          <Route path='/Products/:id' element={isloggedIn == true ? <ProdSpec /> : <Navigate to='/' />} />
          <Route path='*' element="Page Not Found - 404" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
