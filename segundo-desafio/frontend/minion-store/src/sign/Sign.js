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
            signType: ''
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
                <div className='signTypeButtons'>
                    <button className='LeftSignButton' onClick={() => this.swapSignType('signin')}>Login</button>
                    <button onClick={() => this.swapSignType('signup')}>Cadastro</button>
                    <button className='RightSignButton' onClick={() => this.swapSignType('signupConfirm')}>Confirmar Cadastro</button>
                </div>
                {this.state.signType === 'signin' ? (
                    <div className='DivSign'>
                    
                    <Signin/>
                    
                    </div>
                ) : this.state.signType === 'signup' ? (
                    <div className='DivSign'>
                    <Signup/>
                    
                    </div>
                ) : this.state.signType === 'signupConfirm' ? (
                    <div className='DivSign'>
                    <SignupConfirm/>
                    
                    </div>
                ) : ''}
                
                
                
                    

                
                
            </div>
        )
    }
}