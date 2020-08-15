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
            [event.target.name]: event.target.value
        })
    }

    signUpConfirm = async event => {
        event.preventDefault()
        try {
            const user = this.state.user
            const code = this.state.code
            const resp = await Auth.confirmSignUp(user, code);
            console.log(resp)
            this.setState({

                message: `Welcome : )`
            })
            
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
                            <p className='Alert'>{this.state.message}</p>
                            <input placeholder='e-mail' onChange={this.handleInputChange} name='user' type='text'></input>
                            <input placeholder='código' onChange={this.handleInputChange} name='code' type='code'></input>
                            <button className='ButtonSubmit'> Confirme sua conta!</button>
                    </form>
                    
                
            </div>
        )
    }
}
