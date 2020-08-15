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
            message: ''
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
            await this.props.getCredentials()

            



            



            const current = await Auth.currentSession()



            console.log(current)

        } catch (error) {
            this.setState({message: error.message})
            console.log('error signing up:', error);
        }
    }





    render() {
        return (
            
            <div  className='FormSign'>

                
                <form onSubmit={this.signIn}>
                    <p className='Alert'>{this.state.message}</p>

                    <input placeholder='e-mail' onChange={this.handleInputChange} name='user' type='text'></input>
                    <input placeholder='senha' onChange={this.handleInputChange} name='password' type='password'></input>
                    <button className='ButtonSubmit'>Entre!</button>
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