import React, {useEffect, useState} from 'react'
import axios from 'axios'
import styles from './styles.module.css'
import { useNavigate } from 'react-router-dom'

function Products() {
  let navigate = useNavigate();
  const [products, setProducts] = useState([])

  useEffect(()=>{
    axios.get('https://dummyjson.com/products')
    .then((res)=>{
      setProducts(res.data.products)
      console.log(res.data.products)
    })
  },[])
  return (
    <>
    <h2 style={{marginLeft : 32,marginTop : 100}}>Explore Our Products</h2>
    <div className={styles.cardWrapper}>
      {products.map((item,i) => {
        return(
          <div className={styles.card} key={i} onClick={() => {
            navigate(`/products/${item.id}`)
          }}>
            <img className={styles.cardImage} src={item.thumbnail}/>
            <div className={styles.cardDescWrapper}>

              <span className={styles.span}>
                <h3 className={styles.brandName}>{item.brand}</h3>
                <h3 className={styles.brandName}> <sup>$</sup>{item.price}<sup>.00</sup></h3>
              </span>

              <p className={styles.descp}>{item.description}</p>
              <p className={styles.rating}>{item.rating}<span style={{ paddingLeft: 5 }} className="fa fa-star"></span></p>
              <div className={styles.lvWrp}>
                <button className={styles.cartBtn}>Add to Cart</button>
                <i style={{backgroundColor: 'lightblue',color:'red' ,fontSize: 14, padding: 10, borderRadius: 15}} className="fa fa-heart"></i>
              </div>
            </div>
          </div>
        )
      })}
    </div>
    </>
  )
}

export default Products