import React, { Component } from 'react'
import { connect } from "react-redux";
import { addToCart } from "../redux/actions/index";
import { removeFromCart } from "../redux/actions/index";
import { bookMinions } from "../redux/actions/index";

import { getMinions } from "../redux/actions/index"
import  './Minions.css'

class Minions extends Component {
    constructor(props) {
        super()
        this.book = this.book.bind(this)

        this.state = {
            minions: [],
            message: ''
            
        }
    }

    componentDidMount() {
        this.props.getMinions();

      }


    book = async () => {
        this.props.credentials === '' ? 
        (this.setState({message: 'Logue antes'})) : (
            
            this.props.bookMinions({'Minions': this.props.minions.filter(minion => {
                return minion.onCart === true
            }), 'UserId': this.props.credentials.username, 'UserEmail': (this.props.credentials.signInUserSession.idToken.payload.email)})
        )
        
    }

    


    render() {
        const minions = this.props.minions
        return (
            <div>
            <h2 className='ourMinions'>Nossos Minions</h2>
            <ul className='Minions'>
                
                {minions.map(minion => (
                <div className='MinionColumn' key={minion.minionId}>
                    {!minion.onCart ? (<div className='Minion'><li>{minion.minionId}</li>
                        <p>itstruahiuehfeaiufhaeifhu</p>
                        <img width="100" height="100" className='minionImage' src={require('../minion.png')}></img>

                        <button className='addToCartBtn' onClick={() => (this.props.addToCart(minion.minionId))}>Adicionar<br/>ao carrinho</button></div>) : (
                            <div className='Minion'><li>{minion.minionId}</li>
                            <p>itstruahiuehfeaiufhaeifhu</p>
                            <img width="100" height="100" className='minionImage' src={require('../minion-cart.png')}></img>
    
                            <button className='removeFromCartBtn' onClick={() => (this.props.removeFromCart(minion.minionId))}>Remover<br/>do carrinho</button></div>
                        )}
                </div>
                ))}
                <p>{this.state.message}</p>
                <button onClick={this.book}>Reservar Minion(s)!</button>
            </ul>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        addToCart: id => dispatch(addToCart(id)),
        getMinions: () => dispatch(getMinions()),
        removeFromCart: id => dispatch(removeFromCart(id)),
        bookMinions: (minions) => dispatch(bookMinions(minions))
    }
  }

const mapStateToProps = state => {
return {
    minions: state.minions,
    credentials: state.credentials
    }
}


const MinionsConnected = connect(mapStateToProps, mapDispatchToProps)(Minions)

export default MinionsConnected