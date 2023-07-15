// import React, { useContext } from 'react'
import {faker} from '@faker-js/faker'
import { useState } from 'react';
import SingleProduct from './SingleProduct';
import './styles.css'

faker.seed(100);

const Home = () => {
  //just for logging as home is not using sate
  // const {cart, setCart} = useContext(Cart);
  // console.log(useContext(Cart));

  const productArray = [...Array(20)].map(()=>({
    id: faker.string.uuid(),
    name : faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image()
  }));  
  // state for adding into cart functionility
  //now I moved the- const [cart, setCart] = useState([]) to app.js
  // console.log(cart)
  const [products] = useState(productArray)
  // console.log(productArray)
  return (
    <div className='productContainer'>{
     products.map((val)=>(
      //here I am sanding val as prop (prod) to single product
      <SingleProduct val={val}
      //  cart={cart} setCart={setCart}
       key={val.id}/>
     ))
    }</div>
  )
}

export default Home