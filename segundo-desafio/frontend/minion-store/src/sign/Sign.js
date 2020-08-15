import React, { PureComponent } from 'react'
import { Auth } from 'aws-amplify';

import SignupConfirm from '../signup-confirm/SignupConfirmation'
import Signup from '../signup/Signup'
import Signin from '../signin/Signin'
import './Sign.css'



export default class Sign extends PureComponent {
    constructor(props) {
        super()
        this.swapSign = this.swapSign.bind(this)

        this.state = {
            user: '',
            password: '',
            message: '',
            signup: false,
        }
    }

    swapSign = () => {
        this.setState({
            signup: !this.state.signup
        })
    }


    render() {
        return (
            
            <div>

                
                {this.state.signup === false ? (
                    <div className='DivSignin'>
                    <Signin/>
                    <button  className='buttonLinkLeft' onClick={this.swapSign}>Cadastre-se</button>
                    </div>
                ) : (
                    <div className='DivSignup'>
                    <Signup/>
                    <button className='buttonLinkLeft' onClick={this.swapSign}>Faça login</button>
                    </div>
                )}
                
                
                
                    

                
                
            </div>
        )
    }
}