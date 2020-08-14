import React from 'react'
import './Main.css'

import { Auth } from 'aws-amplify';

export default class Main extends React.Component {
    constructor(props){
        super()
    }
    render() {
        const user = this.props.auth.user.username
    return (
        <div>
        {user ? <h2>aefaef{user}</h2> : ''}
        
        </div>
    )}
}
