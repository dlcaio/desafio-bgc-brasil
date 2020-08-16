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
            message: '',
            disable: false
        }
    }



    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            message: ''
        })
    }

    signUp = async event => {
        event.preventDefault()
        try {
            this.setState({
                disable: true,
                message: 'Loading'
            })
            const user = this.state.user
            const password = this.state.password
            const resp = await Auth.signUp(user, password);
            console.log(resp)
            this.setState({
                disable: false,
                message: `A confirmation code has been sent to ${resp.user.username}, type it here to confirm your account`
            })
            
        } catch (error) {
            console.log('error signing up:', error);
            this.setState({
                password: '',
                message: error.message,
                disable: false
            })
        }
        
    }



    render() {
        return (
            
            <div>

                
                    
                    
                    <p className='Label'>Cadastro</p>
                    <form className='FormSignup' onSubmit={this.signUp}>
                            
                            <input placeholder='e-mail' onChange={this.handleInputChange} name='user' value={this.state.user} type='email'></input>
                            
                            <input placeholder='senha' onChange={this.handleInputChange} name='password' value={this.state.password} type='password'></input>
                            
                            <button className='ButtonSubmit' disabled={this.state.disable}>Cadastre-se</button>
                            <p className='AlertLeft'>{this.state.message}</p>
                    </form> 
                    
                    
                    
                
            </div>
        )
    }
}
