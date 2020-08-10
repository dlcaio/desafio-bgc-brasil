import React, { Component } from 'react'
import { connect } from "react-redux";
import { addToCart } from "../redux/actions/index";


class Minions extends Component {
    constructor(props) {
        super()
        this.remove = this.remove.bind(this)
        this.state = {
            minions: []
            
        }
    }

    remove = id => {
        this.props.addToCart(id)
    }

    render() {
        const minions = this.props.minions
        return (
            <ul>
                
                {minions.map(minion => (
                <div key={minion.id}>
                    {!minion.onCart ? (<div><li>Nome: {minion.name}</li>
                    <li>Preço: {minion.price}</li>
                    <button onClick={() => (this.remove(minion.id))}>Adicionar ao carrinho</button></div>) : ''}
                </div>
                ))}

            </ul>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        addToCart: id => dispatch(addToCart(id))
    }
  }

const mapStateToProps = state => {
return {
    minions: state.minions
    }
}


const MinionsConnected = connect(mapStateToProps, mapDispatchToProps)(Minions)

export default MinionsConnected