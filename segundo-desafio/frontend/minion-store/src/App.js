import React from 'react';
import logo from './logo.svg';
import './App.css';

import Minions from './minions/Minions'
import ShoppingCart from './shopping-cart/ShoppingCart';
import Header from './header/Header'
import { Main } from './main/Main'
import Signin from './signin/Signin'
import Signup from './signup/Signup'
import Sign from './sign/Sign'

import SignupConfirm from './signup-confirm/SignupConfirmation'
import { connect } from "react-redux";
import { getCredentials } from "./redux/actions/index"


import Signout from './signout/Signout'



class App extends React.Component {
  constructor(props) {
    super()
    this.state = {
      email: ''
    }
    
  }


  async componentDidMount() {
    await this.props.getCredentials()
  }
  

  render() {
  return (


    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <Header/>
      {this.props.credentials !== '' ? (
        <p>Bem vindo,<br/>{JSON.stringify((this.props.credentials.username))}</p>
      ) : ''}

    
      {/*this.props.credentials === "" ? (
        <div>
        <Sign/>
        </div>
        
        
      ) : (
        <div>
        <Signout/>
        </div>
      )*/}
            
      
      
      <Main/>
      <div className='OnAndOffCart'>
      {/*</Minions/>*/}
      <ShoppingCart className='ShoppingCart'/>
      </div>
    </div>
  );
  }
}



const mapStateToProps = state => {
  return {
      credentials: state.credentials
      }
  }

const mapDispatchToProps = dispatch => {
    return {
        getCredentials: () => dispatch(getCredentials()),
    }
  }



const AppConnected = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppConnected;
