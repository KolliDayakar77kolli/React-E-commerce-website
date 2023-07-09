import React from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

function Navbar({setisloggedIn,isloggedIn}) {
  function Renderbutton (){
    if(isloggedIn === true){
      return <a className={styles.Lbutton} onClick={() => {
        localStorage.setItem('isloggedIn', false)
        setisloggedIn(false);
        alert('Logged Out Successfully')
      }}>Logout</a>
    }
    else{
      return <a className={styles.Lbutton} onClick={() => {
        localStorage.setItem('isloggedIn', true)
        setisloggedIn(true);
        alert('Login Successfull...')
      }}>Login</a>
    }

  }

  const handleProductsClick = () => {
    if (!isloggedIn) {
      alert('Please log in to access the Products page.');
    }
  };
  
  return (
    <header>
        <Link to="/" >Home</Link>
        <Link to="/Products"  onClick={handleProductsClick}>Products</Link>
        <Renderbutton />
        


    </header>
  )
}

export default Navbar