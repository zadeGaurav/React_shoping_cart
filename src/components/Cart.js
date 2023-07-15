import React, { useContext, useEffect, useState } from 'react'
import { Cart } from '../Context';
import SingleProduct from './SingleProduct';

const CartPage = () => {

  const[total, setTotal] = useState();
  const {cart} = useContext(Cart);

  useEffect(()=>{
    setTotal(cart.reduce((acc, curr)=> acc+ Number(curr.price), 0))
  },[cart])
  return (
    <div>
      <span style={{fontSize:30}}>My Cart</span> <br />
      <span style={{fontSize:30}}>Total ₹. {total}</span>
       <div className='productContainer'>
          {cart.map((val)=>(
            <SingleProduct
              val={val}
              key={val.id}
              // cart={cart}
              // setCart={setCart}
            />
          ))}
       </div>
    </div>
  )
}

export default CartPage