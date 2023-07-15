import React, { useContext } from 'react'
import { Cart } from '../Context';

const SingleProduct = ({val}) => {
  const {cart , setCart} = useContext(Cart);

  return (
    <div className='products'>
        <img src={val.image} alt={val.name}/>
        <div className='productDesc'>
            <span style={{fontWeight:700}}>{val.name}</span>
            <span>̥₹ {val.price.substring(0,3)}</span>
        </div>
        {cart.includes(val)?(
           <button className='add' onClick={()=>{
            // everything inside the cart (previous ...cart)
            setCart(cart.filter((c)=>c.id!==val.id));
        }} >Remove From Cart</button>         
        ):(
          <button className='add' onClick={()=>{
            // everything inside the cart (previous ...cart)
            setCart([...cart, val]);
        }} >Add to Cart</button>
        )}      
    </div>
  )
}

export default SingleProduct

  // <div className='products'>
          //   <div>{val.id}</div>
          // 
          // <div>{val.name}</div>
          // <div>{val.price}</div>
          // </div>