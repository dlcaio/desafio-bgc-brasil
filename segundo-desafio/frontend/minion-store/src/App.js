import React from 'react';
import logo from './logo.svg';
import './App.css';

import Minions from './minions/Minions'
import ShoppingCart from './shopping-cart/ShoppingCart';
import { Header } from './header/Header'
import { Main } from './main/Main'


function App() {
  return (


    <div className="App">
      
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <Header/>
      <Main/>
      <div className='OnAndOffCart'>
        <Minions/>
        <ShoppingCart/>
      </div>
    </div>
  );
}

export default App;
