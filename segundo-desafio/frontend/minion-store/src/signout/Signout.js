import React, { PureComponent } from 'react'
import { Auth } from 'aws-amplify';
import { getCredentials } from "../redux/actions/index"
import { connect } from "react-redux";


class Signout extends PureComponent {
    constructor(props) {
        super()
        this.signOut = this.signOut.bind(this)

    }

    signOut = async event => {
        event.preventDefault()
        try {
            const resp = await Auth.signOut();
            await this.props.getCredentials()
            
        } catch (error) {
            console.log('error signing out:', error);
            
        }
        
    }



    render() {
        return (
            
            <div className='LogoutDiv'>

                
                
                    
                    
                    <form className='LogoutForm' onSubmit={this.signOut}>
                        <button className='buttonLinkRight'>Log out</button>
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


const SignoutConnected = connect(null, mapDispatchToProps)(Signout)

export default SignoutConnected