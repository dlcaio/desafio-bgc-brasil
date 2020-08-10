const initialState = {
    minions: [
      {id: 1, name: 'Arnoldo', price: 300, onCart: false},
      {id: 2, name: 'Arnilson', price: 150, onCart: false},
      {id: 3, name: 'Arnan', price: 30, onCart: false},]
  };


function rootReducer(state = initialState, action) {

  if (action.type === 'ADD_TO_CART') {
    console.log(state.minions)
    console.log(action.id)
    return {
      ...state, minions: state.minions.map(
        minion => minion.id === action.id ? {...minion, onCart: true}  : minion 
      )
    }
  }

  if (action.type === 'REMOVE_FROM_CART') {
    console.log(state.minions)
    console.log(action.id)
    return {
      ...state, minions: state.minions.map(
        minion => minion.id === action.id ? {...minion, onCart: false}  : minion 
      )
    }
  }

  return state;
};

export default rootReducer;