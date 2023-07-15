import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import { Cart } from '../Context'
const Header = () => {
  const {cart , setCart} = useContext(Cart);
  return (
    <div>
        <span className='header'>React Context Api tut</span>
        <ul className='nav'>
            <li className='prod'><Link to='/'>Home page</Link></li>
            <li className='prod1'><Link to='/cart'>Cart{` ${   cart.length}`}</Link></li>
        </ul>
    </div>
  )
}

export default Header