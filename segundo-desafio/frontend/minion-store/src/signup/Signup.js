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
            message: '',
            confirm: false,
            disable: false
        }
    }


    swapConfirmation = () => {
        this.setState({
            confirm: !this.state.confirm
        })
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
            this.setState({disable: true})
            const user = this.state.user
            const password = this.state.password
            const resp = await Auth.signUp(user, password);
            console.log(resp)
            this.setState({
                confirm: true,
                message: `A confirmation code has been sent to ${resp.user.username}, type it here to confirm your account`
            })
            
        } catch (error) {
            console.log('error signing up:', error);
            this.setState({
                user: '',
                password: '',
                message: error.message,
                disable: false
            })
        }
        
    }



    render() {
        return (
            
            <div>

                
                    {this.state.confirm === true ? (
                        <div>
                        <p className='Label'>Confirmação de Cadastro</p>
                        <SignupConfirm/>
                        <button  className='buttonLinkRight' onClick={this.swapConfirmation}>Ainda não se cadastrou? Cadastre-se aqui</button>
                        </div>
                    ) : (
                        <div>
                    
                    
                    <p className='Label'>Cadastro</p>
                    <form className='FormSignup' onSubmit={this.signUp}>
                            
                            <input placeholder='e-mail' onChange={this.handleInputChange} name='user' type='email'></input>
                            
                            <input placeholder='senha' onChange={this.handleInputChange} name='password' type='password'></input>
                            
                            <button className='ButtonSubmit' disabled={this.state.disable}>Cadastre-se</button>
                            <p className='AlertLeft'>{this.state.message}</p>
                    </form> <button  className='buttonLinkRight' onClick={this.swapConfirmation}>Já se cadastrou? Confirme sua conta!</button></div>
                    )}
                    
                    
                    
                
            </div>
        )
    }
}
