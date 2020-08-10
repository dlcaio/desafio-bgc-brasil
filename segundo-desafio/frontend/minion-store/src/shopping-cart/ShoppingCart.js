import React, { Component } from 'react'
import { connect } from "react-redux";
import { removeFromCart } from "../redux/actions/index";


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
            <ul>
                
                {minions.map(minion => (
                <div key={minion.id}>
                    {minion.onCart ? (<div><li>Nome: {minion.name}</li>
                    <li>Preço: {minion.price}</li>
                    <button onClick={() => (this.remove(minion.id))}>Remover do carrinho</button></div>) : ''}
                </div>
                ))}

            </ul>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: id => dispatch(removeFromCart(id))
    }
  }

const mapStateToProps = state => {
return {
    minions: state.minions
    }
}


const ShoppingCartConnected = connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)

export default ShoppingCartConnected