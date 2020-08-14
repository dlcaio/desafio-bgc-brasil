import React, { PureComponent } from 'react'
import { Auth } from 'aws-amplify';

export default class Signin extends PureComponent {
    constructor(props) {
        super()
        this.signIn = this.signIn.bind(this)
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

    signIn = async event => {
        event.preventDefault()
        try {
            const user = this.state.user
            const password = this.state.password
            const resp = await Auth.signIn(user, password);
            this.props.auth.setAuthStatus(true)
            this.props.auth.setUser(resp)
            console.log('ae')
            console.log(this.props.auth.user.username)
            console.log('eafa')
            console.log(resp)
            console.log('success');
            const current = await Auth.currentSession()
            console.log(current)
        } catch (error) {

            console.log('error signing up:', error);
        }
    }



    render() {
        return (
            
            <div>

                
                <form onSubmit={this.signIn}>
                    <input onChange={this.handleInputChange} name='user' type='text'></input>
                    <input onChange={this.handleInputChange} name='password' type='password'></input>

                    <button></button>
                </form>
                
                
            </div>
        )
    }
}
