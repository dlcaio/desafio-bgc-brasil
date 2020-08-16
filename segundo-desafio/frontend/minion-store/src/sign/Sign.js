import React, { PureComponent } from 'react'
import { Auth } from 'aws-amplify';

import SignupConfirm from '../signup-confirm/SignupConfirmation'
import Signup from '../signup/Signup'
import Signin from '../signin/Signin'



export default class Sign extends PureComponent {
    constructor(props) {
        super()
        this.swapSignType = this.swapSignType.bind(this)

        this.state = {
            user: '',
            password: '',
            message: '',
            signType: 'signin'
        }
    }

    swapSignType = (type) => {
        this.setState({
            signType: type
        })
    }


    render() {
        return (
            
            <div>

                
                {this.state.signType === 'signin' ? (
                    <div className='DivSign'>
                    
                    <Signin/>
                    <button  className='buttonLinkLeft' onClick={() => this.swapSignType('signup')}>Cadastre-se</button>
                    <button  className='buttonLinkRight' onClick={() => this.swapSignType('signupConfirm')}>Confirme Cadastro</button>
                    </div>
                ) : this.state.signType === 'signup' ? (
                    <div className='DivSign'>
                    <Signup/>
                    <button  className='buttonLinkLeft' onClick={() => this.swapSignType('signin')}>Faça login</button>
                    <button  className='buttonLinkRight' onClick={() => this.swapSignType('signupConfirm')}>Confirme Cadastro</button>
                    </div>
                ) : (
                    <div className='DivSign'>
                    <SignupConfirm/>
                    <button  className='buttonLinkLeft' onClick={() => this.swapSignType('signin')}>Faça login</button>
                    <button  className='buttonLinkRight' onClick={() => this.swapSignType('signup')}>Cadastre-se</button>
                    </div>
                )}
                
                
                
                    

                
                
            </div>
        )
    }
}