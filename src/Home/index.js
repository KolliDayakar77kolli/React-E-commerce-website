import React from 'react'
import styles from './styles.module.css'
import {useNavigate} from 'react-router-dom';
import Products from '../Products/index';

function Home({isloggedIn}) {
  let navigateToPro = useNavigate();

  return (
    <>
      <section className={styles.parallax}>
        <div className={styles.parallaxInner}>
          <div className={styles.parallaxInnerContent}>
            <p className={styles.pcPara1}>Welcome To Our Store</p>
            <p className={styles.pcPara2}>Items available</p>
          </div>

          <div className={styles.homeContainerWrapper}>
            <div className={styles.homeContainer}>
              <div className={styles.homeCard}>
                <img
                  className={styles.homeCardImg}
                  src="https://i.dummyjson.com/data/products/6/thumbnail.png"
                />
                <h3 className={styles.homeCardTitle}>APPLE LAPTOP</h3>
                <span style={{color: 'orange'}} className="fa fa-star"></span>
                <span style={{color: 'orange'}} className="fa fa-star"></span>
                <span style={{color: 'orange'}} className="fa fa-star"></span>
                <span style={{color: 'orange'}} className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <h6 className={styles.homeCart}>ADD TO CART <i style={{fontSize: 13}} className="fa fa-shopping-cart"></i></h6>
              </div>
              <div className={styles.homeCard}>
                <img
                  className={styles.homeCardImg}
                  src="https://i.dummyjson.com/data/products/6/thumbnail.png"
                />
                <h3 className={styles.homeCardTitle}>APPLE LAPTOP</h3>
                <span  style={{color: 'orange'}} className="fa fa-star"></span>
                <span  style={{color: 'orange'}} className="fa fa-star"></span>
                <span  style={{color: 'orange'}} className="fa fa-star"></span>
                <span  style={{color: 'orange'}} className="fa fa-star"></span>
                <span  className="fa fa-star"></span>
                <h6 className={styles.homeCart}>ADD TO CART <i style={{fontSize: 13}} className="fa fa-shopping-cart"></i></h6>

              </div>
              <div className={styles.homeCard}>
                <img
                  className={styles.homeCardImg}
                  src="https://i.dummyjson.com/data/products/6/thumbnail.png"
                />
                <h3 className={styles.homeCardTitle}>APPLE LAPTOP</h3>
                <span  style={{color: 'orange'}} className="fa fa-star"></span>
                <span  style={{color: 'orange'}} className="fa fa-star"></span>
                <span  style={{color: 'orange'}} className="fa fa-star"></span>
                <span  style={{color: 'orange'}} className="fa fa-star"></span>
                <span  style={{color: 'orange'}} className="fa fa-star"></span>
                <h6 className={styles.homeCart}>ADD TO CART <i style={{fontSize: 13}} className="fa fa-shopping-cart"></i></h6>

              </div>
              <div className={styles.homeCard}>
                <img
                  className={styles.homeCardImg}
                  src="https://i.dummyjson.com/data/products/6/thumbnail.png"
                />
                <h3 className={styles.homeCardTitle}>APPLE LAPTOP</h3>
                <span  style={{color: 'orange'}} className="fa fa-star"></span>
                <span  style={{color: 'orange'}} className="fa fa-star"></span>
                <span  style={{color: 'orange'}} className="fa fa-star"></span>
                <span  style={{color: 'orange'}} className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <h6 className={styles.homeCart}>ADD TO CART <i style={{fontSize: 13}} className="fa fa-shopping-cart"></i></h6>
              </div>
              <div className={styles.homeCard}>
                <img
                  className={styles.homeCardImg}
                  src="https://i.dummyjson.com/data/products/6/thumbnail.png"
                />
                <h3 className={styles.homeCardTitle}>APPLE LAPTOP</h3>
                <span  style={{color: 'orange'}} className="fa fa-star"></span>
                <span  style={{color: 'orange'}} className="fa fa-star"></span>
                <span  style={{color: 'orange'}} className="fa fa-star"></span>
                <span  style={{color: 'orange'}} className="fa fa-star"></span>
                <span  style={{color: 'orange'}} className="fa fa-star"></span>
                <h6 className={styles.homeCart}>ADD TO CART <i style={{fontSize: 13}} className="fa fa-shopping-cart"></i></h6>

              </div>
              <div className={styles.homeCard}>
                <img
                  className={styles.homeCardImg}
                  src="https://i.dummyjson.com/data/products/6/thumbnail.png"
                />
                <h3 className={styles.homeCardTitle}>APPLE LAPTOP</h3>
                <span  style={{color: 'orange'}} className="fa fa-star"></span>
                <span  style={{color: 'orange'}} className="fa fa-star"></span>
                <span  style={{color: 'orange'}} className="fa fa-star"></span>
                <span  style={{color: 'orange'}} className="fa fa-star"></span>
                <span  style={{color: 'orange'}} className="fa fa-star"></span>
                <h6 className={styles.homeCart}>ADD TO CART <i style={{fontSize: 13}} className="fa fa-shopping-cart"></i></h6>
 
              </div>
            </div>
          </div>

          <div className={styles.gradDiv}>
            <h1 className={styles.textGradientt}>Explore Our products...
              </h1>
          </div>

          <div className={styles.gotopro}>
            <button onClick={() => {
              if(!isloggedIn){
                alert('please login to access products page')
              }
              else{
                navigateToPro(`/products/`)
              }

          }}
            >Our Products <i style={{fontSize : 17}} className="fa fa-arrow-circle-o-right"></i></button>
          </div>
        </div>
        <footer>

          <div>
            <p>Copyrights &copy; 2023</p>
            <p>kolli Dayakar</p>
          </div>
        </footer>
      </section>
    </>
  );
}

export default Home