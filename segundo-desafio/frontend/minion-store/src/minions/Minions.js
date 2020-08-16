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
        (this.setState({message: 'Faça login antes de realizar a reserva : )'})) : (
            
            this.props.bookMinions({'Minions': this.props.minions.filter(minion => {
                return minion.onCart === true
            }), 'UserId': this.props.credentials.username})
        )
        
    }

    


    render() {
        const minions = this.props.minions
        return (
            <div>
            {minions.length !== 0 ? (
             <div>
                <ul className='Minions'>
                
                {minions.map(minion => (
                <div className='MinionColumn' key={minion.minionId}>
                    {!minion.onCart ? (<div className='Minion'><li>{minion.minionId}</li>
                        <p>itstruahiuehfeaiufhaeifhu</p>
                        
                        <img onClick={() => (this.props.addToCart(minion.minionId))} width="240" height="240" className='minionImage' src={require('../minion.png')}></img>

                </div>) : (
                            <div className='Minion'><li>{minion.minionId}</li>
                            <p>itstruahiuehfeaiufhaeifhu</p>
                            <img onClick={() => (this.props.removeFromCart(minion.minionId))} width="240" height="240" className='minionImage' src={require('../minion-cart.png')}></img>
    
                            </div>
                        )}
                </div>
                ))}
                
                
            </ul>
            <p className='Alert'>{this.state.message}</p>
            <button className='buttonBook' onClick={this.book}>Reservar Minion(s)!</button></div>
            ) : (
                <h3 className='MinionsUnavalable'>Poxa, não há minions disponíveis no momento<br/>: /</h3>
            )}
            
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