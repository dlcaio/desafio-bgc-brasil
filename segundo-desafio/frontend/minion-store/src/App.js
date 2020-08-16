import React from 'react';
import logo from './logo.svg';
import './App.css';

import Minions from './minions/Minions'
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
        <div>
        <h1 className='Welcome'>Boas vindas,<br/>{((this.props.credentials.signInUserSession.idToken.payload.email))}</h1>
        </div>
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
            
      
      
        
        <h1 className='MinionsInstruct1'>
          Clique nos seus minions prediletos<br/>para adicioná-los ao carrinho!
        </h1>
        <h4 className='MinionsInstruct2'>
          Depois é só clicar no botão "Reservar Minion(s)!"<br/>e correr pro abraço : )
        </h4>
      
        {<Minions/>}
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
