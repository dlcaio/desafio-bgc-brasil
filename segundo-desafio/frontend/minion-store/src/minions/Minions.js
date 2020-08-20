import React, { Component } from 'react'
import { connect } from "react-redux";
import { addToCart } from "../redux/actions/index";
import { removeFromCart } from "../redux/actions/index";
import { bookMinions } from "../redux/actions/index";

import { getMinions } from "../redux/actions/index"

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
        //this.props.getMinions();

      }


    book = async () => {
        this.props.credentials === '' ? 
        (this.setState({message: 'Faça login antes de realizar a reserva : )'})) : (
            
            this.props.bookMinions({'Minions': this.props.minions.filter(minion => {
                return minion.onCart === true
            }), 'UserId': this.props.credentials.username, 'UserEmail': (this.props.credentials.signInUserSession.idToken.payload.email)})
        )
        
    }

    


    render() {
        //const minions = this.props.minions
        const minions = [0, 1, {onCart: true}, 4, 5, 6]
        return (
            <div>
            {minions.length !== 0 ? (
             <div>
                <div className='Minions'>
                
                {minions.map(minion => (
                <div key={minion.minionId}>
                    {!minion.onCart ? (<div className='Minion'>
                        <li>minion.name</li>
                        <p>minion.desaefaefaefaefaefeafaefaefaefaeaefeafaefeafaefeafaefeafeafaefaefaefeafaefeafaefeafaefeafaefaefeafaecription</p>
                        
                        <img onClick={() => (this.props.addToCart(minion.minionId))}  className='minionImage' src={require('../minion.png')}></img>

                </div>
                ) : (
                <div className='Minion'>
                        <li>minion.name</li>
                        <p>minion.</p>
                        
                        <img onClick={() => (this.props.removeFromCart(minion.minionId))}  className='minionImage' src={require('../minion-cart.png')}></img>

                </div>
                        )}
                </div>
                ))}
                
                
            </div>
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