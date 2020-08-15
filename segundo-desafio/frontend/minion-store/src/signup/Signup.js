import React, { PureComponent } from 'react'
import { Auth } from 'aws-amplify';
import SignupConfirm from '../signup-confirm/SignupConfirmation'
export default class Signup extends PureComponent {
    constructor(props) {
        super()
        this.signUp = this.signUp.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.swapConfirmation = this.swapConfirmation.bind(this)
        this.state = {
            user: '',
            password: '',
            showCodeField: false,
            message: '',
            confirm: false
        }
    }


    swapConfirmation = () => {
        this.setState({
            confirm: !this.state.confirm
        })
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
            this.setState({
                confirm: true,
                showCodeField: true,
                message: `A confirmation code has been sent to ${resp.user.username}, type it here to confirm your account`
            })
            
        } catch (error) {
            console.log('error signing up:', error);
            this.setState({
                user: '',
                password: '',
                showCodeField: false,
                message: error.message
            })
        }
        
    }



    render() {
        return (
            
            <div>

                
                    {this.state.confirm === true ? (
                        <div>
                        <SignupConfirm/>
                        <button  className='buttonLinkRight' onClick={this.swapConfirmation}>Ainda não se cadastrou? Cadastre-se aqui</button>
                        </div>
                    ) : (
                        <div>
                    
                    
                    
                    <form className='FormSignup' onSubmit={this.signUp}>
                            <p className='Alert'>{this.state.message}</p>
                            <input placeholder='e-mail' onChange={this.handleInputChange} name='user' type='text'></input>
                            <input placeholder='senha' onChange={this.handleInputChange} name='password' type='password'></input>
                            <button className='ButtonSubmit'>Cadastre-se</button>
                            
                    </form> <button  className='buttonLinkRight' onClick={this.swapConfirmation}>Já se cadastrou? Confirme sua conta!</button></div>
                    )}
                    
                    
                    
                
            </div>
        )
    }
}
