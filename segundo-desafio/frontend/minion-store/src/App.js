import React from 'react';
import logo from './logo.svg';
import './App.css';

import Minions from './minions/Minions'
import ShoppingCart from './shopping-cart/ShoppingCart';
import { Header } from './header/Header'
import Main from './main/Main'
import Signin from './signin/Signin'
import Signup from './signup/Signup'
import SignupConfirmation from './signup-confirm/SignupConfirmation'



class App extends React.Component {

  state = {
    isAuthenticated: false,
    user: {username: 'Johny'}
  }

  setAuthStatus = authenticated => {
    this.setState({isAuthenticated: authenticated})
  }

  setUser = user => {
    this.setState({user: user})
  }

  render() {
    const authData = {
      isAuthenticated: this.state.isAuthenticated,
      user: this.state.user,
      setAuthStatus: this.setAuthStatus,
      setUser: this.setUser
    }
  return (


    <div className="App">
      
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <Header/>
      <Signup auth={authData}/>
      <SignupConfirmation auth={authData}/>
      <Signin auth={authData}/>
      <Main auth={authData}/>
      <div className='OnAndOffCart'>
        
      </div>
    </div>
  );
  }
}

export default App;
