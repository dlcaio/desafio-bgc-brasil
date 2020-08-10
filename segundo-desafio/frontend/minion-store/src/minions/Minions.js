import React, { Component } from 'react'
import { connect } from "react-redux";
import { addToChart } from "../redux/actions/index";


class Minions extends Component {
    constructor(props) {
        super()
        this.remove = this.remove.bind(this)
        this.state = {
            minions: []
            
        }
    }

    remove = id => {
        this.props.addToChart(id)
    }

    render() {
        const minions = this.props.minions
        return (
            <ul>
                
                {minions.map(minion => (
                <div key={minion.id}>
                    {!minion.onChart ? (<div><li>Nome: {minion.name}</li>
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
        addToChart: id => dispatch(addToChart(id))
    }
  }

const mapStateToProps = state => {
return {
    minions: state.minions
    }
}


const MinionsConnected = connect(mapStateToProps, mapDispatchToProps)(Minions)

export default MinionsConnected