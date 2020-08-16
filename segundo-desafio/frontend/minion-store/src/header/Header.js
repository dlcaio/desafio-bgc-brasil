import React from 'react'
import Sign from '../sign/Sign'
import Signout from '../signout/Signout'

import { connect } from "react-redux";


class Header extends React.Component {
    constructor(props) {
        super()
        this.state = {
            signIn: true
        }
    }
    render() {
    return (

            <header>

                <h2 className='Logo'>MINIONS STORE</h2>
                    
                <div className='HeaderSign'>

                {this.props.credentials === "" ? (
                    <Sign/>
                    ) : (
                    <Signout/>
                    )}

                </div>
                        
                
            </header>
            
    )
    }
}


const mapStateToProps = state => {
    return {
        credentials: state.credentials
        }
    }

const HeaderConnected = connect(mapStateToProps)(Header)

export default HeaderConnected;


