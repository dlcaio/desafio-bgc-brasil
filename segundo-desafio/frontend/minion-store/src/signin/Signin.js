import React, { PureComponent } from 'react'
import { Auth } from 'aws-amplify';
import { getCredentials } from "../redux/actions/index"
import { connect } from "react-redux";
import './Signin.css'



class Signin extends PureComponent {
    constructor(props) {
        super()
        this.signIn = this.signIn.bind(this)
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


    signIn = async event => {
        event.preventDefault()
        try {
            this.setState({
                disable: true,
                message: 'Loading'
            })
            const user = this.state.user
            const password = this.state.password
            const resp = await Auth.signIn(user, password);
            await this.props.getCredentials()


            const current = await Auth.currentSession()
            this.setState({
                password: ''
            })


        } catch (error) {
            this.setState({
                password: '',
                disable: false,
                message: error.message,
            })
            console.log('error signing up:', error);
        }
        
    }





    render() {
        return (
            
        <div>
        <p className='Label'>Login</p>      
        <form className='Sign' onSubmit={this.signIn}>

            <input placeholder='e-mail' onChange={this.handleInputChange} value={this.state.user} name='user' type='email'/>
            <input placeholder='senha' onChange={this.handleInputChange} value={this.state.password} name='password' type='password'/>
            <button className='ButtonSubmit' disabled={this.state.disable}>Entre!</button>
            <p className='AlertLeft'>{this.state.message}</p>
        </form>
                
        </div>       
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCredentials: () => dispatch(getCredentials()),
    }
  }

const SigninConnected = connect(null, mapDispatchToProps)(Signin)

export default SigninConnected