import React, { PureComponent } from 'react'
import { Auth } from 'aws-amplify';

export default class Signup extends PureComponent {
    constructor(props) {
        super()
        this.signUpConfirm = this.signUpConfirm.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.state = {
            user: '',
            code: '',
            message: ''
        }
    }


    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            message: ''
        })
    }

    signUpConfirm = async event => {
        event.preventDefault()
        try {
            const user = this.state.user
            const code = this.state.code
            const resp = await Auth.confirmSignUp(user, code);
            console.log(resp)
            
        } catch (error) {
            console.log('error signing up:', error);
            this.setState({
                
                message: error.message
            })
        }
        
    }



    render() {
        return (
            
            <div>

                
                
                    
                    
                    
                    <form className='FormSign' onSubmit={this.signUpConfirm}>
                            
                            <input placeholder='e-mail' onChange={this.handleInputChange} name='user' type='email'></input>
                            
                            <input placeholder='código' onChange={this.handleInputChange} name='code' type='code'></input>
                            
                            <button className='ButtonSubmit'> Confirme sua conta!</button>
                            <p className='AlertLeft'>{this.state.message}</p>
                    </form>
                    
                
            </div>
        )
    }
}
