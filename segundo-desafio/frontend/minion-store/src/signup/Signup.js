import React, { PureComponent } from 'react'
import { Auth } from 'aws-amplify';

export default class Signup extends PureComponent {
    constructor(props) {
        super()
        this.signUp = this.signUp.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.state = {
            user: '',
            password: '',
        }
    }


    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    signUp = async event => {
        event.preventDefault()
        try {
            const user = this.state.user
            const password = this.state.password
            const resp = await Auth.signUp(user, password);
            console.log(resp)
            
            
        } catch (error) {

            console.log('error signing up:', error);
        }
    }



    render() {
        return (
            
            <div>

                
                <form onSubmit={this.signUp}>
                    <h2>SIGNUP</h2>
                    <input onChange={this.handleInputChange} name='user' type='text'></input>
                    <input onChange={this.handleInputChange} name='password' type='password'></input>

                    <button></button>
                </form>
                
                
            </div>
        )
    }
}
