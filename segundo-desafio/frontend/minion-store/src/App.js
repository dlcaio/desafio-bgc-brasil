import React from 'react';
import logo from './logo.svg';
import './App.css';

import Minions from './minions/Minions'
import ShoppingCart from './shopping-cart/ShoppingCart';

function App() {
  return (
    <div className="App">
      <h2>Nossos Minions</h2>
      <Minions/>
      <h2>Carrinho</h2>
      <ShoppingCart/>
    </div>
  );
}

export default App;
