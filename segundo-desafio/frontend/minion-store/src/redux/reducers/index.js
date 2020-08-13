const initialState = {
    minions: [
      ]
  };


function rootReducer(state = initialState, action) {

  if (action.type === 'ADD_TO_CART') {
    
    return {
      ...state, minions: state.minions.map(
        minion => minion.minionId === action.id ? {...minion, onCart: true}  : minion 
      )
    }
  }

  if (action.type === 'REMOVE_FROM_CART') {
    
    return {
      ...state, minions: state.minions.map(
        minion => minion.minionId === action.id ? {...minion, onCart: false}  : minion 
      )
    }
  }

  if (action.type === "GET_MINIONS") {
    return Object.assign({}, state, {
      minions: state.minions.concat(action.payload)
    })
  }

  if (action.type === 'BOOK_MINIONS') {
    return {
      ...state, minions: state.minions.filter(
        minion => minion.onCart !== true)
      
    }
  }

  return state

}

export default rootReducer;