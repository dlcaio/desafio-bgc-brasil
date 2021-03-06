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
        this.props.getMinions();
    }

    book = async () => {
        const minionsOnCart = this.props.minions.filter(minion => {
            return minion.onCart === true
        })
        if(minionsOnCart.length !== 0){
            if(this.props.credentials === '') {
                this.setState({message: 'Faça login antes de realizar a reserva : )'})
                } else {
                        this.setState({message: ''})
                        this.props.bookMinions({
                            'Minions': minionsOnCart,
                            'UserId': this.props.credentials.username,
                            'UserEmail': this.props.credentials.signInUserSession.idToken.payload.email
                        })
        
                }
        } else {
            this.setState({message: 'Não esquece de selecionar seus minions primeiro : )'})
        }
        
        
    }

    


    render() {
        const minions = this.props.minions
        return (
            <div>
            {minions.length !== 0 ? (
             <div>
                <div className='Minions'>
                
                {minions.map(minion => (
                <div key={minion.minionId}>
                    {!minion.onCart ? (<div className='Minion'>
                        <li>{minion.name}</li>
                        <p>{minion.description}</p>
                        
                        <img onClick={() => (this.props.addToCart(minion.minionId))}  className='minionImage' src={require('../minion.png')}></img>

                </div>
                ) : (
                <div className='Minion'>
                        <li>{minion.name}</li>
                        <p>{minion.description}</p>

                        <img onClick={() => (this.props.removeFromCart(minion.minionId))}  className='minionImage' src={require('../minion-cart.png')}></img>

                </div>
                        )}
                </div>
                
                ))}
                
            </div>
            <p className='Alert'>{this.state.message}</p>
            <button className='ButtonBook' onClick={this.book}>Reservar Minion(s)!</button></div>
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