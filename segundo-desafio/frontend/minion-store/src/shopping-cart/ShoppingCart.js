import React, { Component } from 'react'
import { connect } from "react-redux";
import { removeFromCart, bookMinions } from "../redux/actions/index";

import './ShoppingCart.css'


class ShoppingCart extends Component {
    constructor(props) {
        super()
        this.remove = this.remove.bind(this)
        this.state = {
            minions: []
            
        }
    }


    remove = id => {
        this.props.removeFromCart(id)
    }

    render() {
        const minions = this.props.minions

        return (
            <ul className='MinionOnCart'>
                <h2 className='Cart'>Carrinho</h2>
                {minions.map(minion => (
                
                <div key={minion.minionId}>
                    {minion.onCart ? (<div><li>{minion.minionId}</li>
                    <img width="100" height="100" className='minionImage' src={require('../minion.png')}></img>
                    <button className='removeFromCartBtn'onClick={() => (this.remove(minion.minionId))}>Remover do carrinho</button></div>) : ''}
                </div>
                ))}
                <button onClick={() => this.props.bookMinions({'Minions': this.props.minions.filter(minion => {
            return minion.onCart === true
        })})}>Reservar Minion(s)!</button>
            </ul>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: id => dispatch(removeFromCart(id)),
        bookMinions: (minions) => dispatch(bookMinions(minions))
    }
  }

const mapStateToProps = state => {
return {
    minions: state.minions
    }
}


const ShoppingCartConnected = connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)

export default ShoppingCartConnected