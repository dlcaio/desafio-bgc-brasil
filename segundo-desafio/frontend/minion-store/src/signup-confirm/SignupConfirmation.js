import React, { PureComponent } from 'react'
import { Auth } from 'aws-amplify';

export default class SignupConfirm extends PureComponent {
    constructor(props) {
        super()
        this.confirmSignUp = this.confirmSignUp.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.state = {
            user: '',
            code: '',
        }
    }


    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    confirmSignUp = async event => {
        event.preventDefault()
        try {
            const user = this.state.user
            const code = this.state.code
            const resp = await Auth.confirmSignUp(user, code);
            console.log(resp)
            
            
        } catch (error) {

            console.log('error signing up:', error);
        }
    }



    render() {
        return (
            
            <div>

                
                <form onSubmit={this.confirmSignUp}>
                    <h2>SIGNUP CONFIRMATION</h2>
                    <input onChange={this.handleInputChange} name='user' type='text'></input>
                    <input onChange={this.handleInputChange} name='code' type='password'></input>

                    <button></button>
                </form>
                
                
            </div>
        )
    }
}
