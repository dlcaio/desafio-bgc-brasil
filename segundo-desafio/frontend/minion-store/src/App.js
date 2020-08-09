import React from 'react';
import logo from './logo.svg';
import './App.css';

import Minions from './minions/Minions'
import ShoppingCart from './shopping-cart/ShoppingCart';

function App() {
  return (
    <div className="App">
      <Minions/>
      <ShoppingCart/>
    </div>
  );
}

export default App;
