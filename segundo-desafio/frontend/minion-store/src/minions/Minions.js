import React, { Component } from 'react'
import { connect } from "react-redux";
import { addToCart } from "../redux/actions/index";
import { getMinions } from "../redux/actions/index"
import  './Minions.css'

class Minions extends Component {
    constructor(props) {
        super()
        this.remove = this.remove.bind(this)
        this.state = {
            minions: []
            
        }
    }

    componentDidMount() {
        this.props.getMinions();

      }

    remove = id => {
        this.props.addToCart(id)
    }

    render() {
        const minions = this.props.minions
        return (
            
            <ul className='Minions'>
                <h2 className='ourMinions'>Nossos Minions</h2>
                {minions.map(minion => (
                <div key={minion.minionId}>
                    {!minion.onCart ? (<div><li>{minion.minionId}</li>
                    <button className='addToCartBtn' onClick={() => (this.remove(minion.minionId))}>adicionar<br/>ao carrinho</button></div>) : ''}
                </div>
                ))}

            </ul>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        addToCart: id => dispatch(addToCart(id)),
        getMinions: () => dispatch(getMinions())
    }
  }

const mapStateToProps = state => {
return {
    minions: state.minions
    }
}


const MinionsConnected = connect(mapStateToProps, mapDispatchToProps)(Minions)

export default MinionsConnected