import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import CartPage from './components/Cart';
// import { useState } from 'react';

function App() {
  //lift the state up //coz we can't pass state form child to parent component
  // const [cart, setCart] = useState([])
  return (
    <BrowserRouter >
      <Header/>
      <Routes>
        <Route path='/' Component={Home}> </Route>
        <Route path='/cart' Component={CartPage}> </Route>
      </Routes>
      {/* modifying as I am passing the props to the home and cart */}
      {/* <Routes>
        <Route path='/'>
          <Home cart={cart} setCart={setCart}/>
        </Route>
        <Route path='/cart'>
          <Cart cart={cart} setCart={setCart}/>
        </Route>
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
