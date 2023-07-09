import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import styles from './styles.module.css'

function ProdSpec() {
  const [productDetails, setProductDetails] = useState({  });
  let params = useParams();
  useEffect(()=>{
    axios.get(`https://dummyjson.com/products/${params.id}`)
    .then((res)=>{
      setProductDetails(res.data)
    })
  }, [])

  return (
    <>
    <div className={styles.specWraper}>
      <div className={styles.leftSec}>
        <img  className={styles.prodSpecImage}
         src={productDetails.thumbnail}/>
      </div>
      <div className={styles.rightSec}>
        <h1>{productDetails.title}</h1>
        <h3>Brand: {productDetails.brand}</h3>
        <p className={styles.descp}>{productDetails.description}</p>
        <p className={styles.rating}>{productDetails.rating}<span style={{ paddingLeft: 5 }} className="fa fa-star"></span></p>
        <div style={{ display: 'flex', alignItems: 'center'}}> 
          <h1 className={styles.brandName}> <sup>$</sup>{productDetails.price}<sup>.00</sup></h1>
          <h5 style={{marginLeft: 30, color : 'green'}}>{productDetails.discountPercentage}% off</h5>
          <i style={{marginLeft : 5, color: 'black', fontSize : 22}} className="fa fa-info-circle"></i>
        </div>
        <p>Coupons for you</p>
        <span className={styles.coupons}>
          <img className={styles.couponImg} src="https://rukminim1.flixcart.com/www/36/36/promos/30/07/2019/79f48e86-8a93-46ab-b45a-5a12df491941.png?q=90"/>
          <p className={styles.couponText}>Partner Offer(For Non Student Member) Join the Student Club to get ₹3,000 Off <a>Know More</a></p>
        </span>
        <p>Available offers</p>
        <span className={styles.coupons}>
          <img className={styles.couponImg} src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"/>
          <p className={styles.couponText}>Bank OfferFlat ₹1,250 Off on HDFC Bank Credit Card EMI Trxns on orders priced between ₹15,000 to ₹39,999<a>T&C</a></p>
        </span>
        <span className={styles.coupons}>
          <img className={styles.couponImg} src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"/>
          <p className={styles.couponText}>Bank OfferFlat ₹3,000 Off on HDFC Bank Credit Card EMI Trxns on orders priced between ₹40,000 to ₹49,999<a>T&C</a></p>
        </span>
        <span className={styles.coupons}>
          <img className={styles.couponImg} src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"/>
          <p className={styles.couponText}>Bank OfferFlat ₹4,000 Off on HDFC Bank Credit Card EMI Transactions on orders of ₹50,000 and above<a>T&C</a></p>
        </span>
        <button className={styles.prodSpecBtn}>Buy Now</button>
        <button className={styles.prodSpecBtn}>Add to Cart</button>
      </div>
    </div>
    </>
  )
}

export default ProdSpec