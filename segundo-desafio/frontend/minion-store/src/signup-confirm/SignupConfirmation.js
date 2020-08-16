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

    signUpConfirm = async event => {
        event.preventDefault()
        try {
            this.setState({
                disable: true,
                message: 'Loading'
            })
            const user = this.state.user
            const code = this.state.code
            const resp = await Auth.confirmSignUp(user, code);
            console.log(resp)
            
            this.setState({
                disable: false,
                confirm: true,
                message: 'Usuário criado com sucesso : )'
            })

        } catch (error) {
            console.log('error signing up:', error);
            this.setState({
                code: '',
                message: error.message,
                disable: false
            })
        }
        
    }



    render() {
        return (
            
            <div>
                    <p className='Label'>Confirme Cadastro</p>
                    <form className='FormSign' onSubmit={this.signUpConfirm}>
                            
                            <input placeholder='e-mail' onChange={this.handleInputChange} value={this.state.user} name='user' type='email'></input>
                            
                            <input placeholder='código' onChange={this.handleInputChange} value={this.state.code} name='code' type='code'></input>
                            
                            <button className='ButtonSubmit' disabled={this.state.disable}> Confirme sua conta!</button>
                            <p className='AlertLeft'>{this.state.message}</p>
                    </form>
                    
                
            </div>
        )
    }
}
