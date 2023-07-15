import React, { createContext, useState } from 'react'

export const Cart = createContext()
//wrap whole context component in provider - cart
//and warp index.js with the help of Component(Context) name
const Context = ({children}) => {
    //Context will take all the childern from root- index.js
    const [cart, setCart] = useState([])
  return (
    //value is the prop of provider
    <Cart.Provider value={{cart, setCart}}>{children}</Cart.Provider>
  )
}

export default Context