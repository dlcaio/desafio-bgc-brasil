const initialState = {
    minions: [
      {id: 1, name: 'Arnoldo', price: 300, onChart: false},
      {id: 2, name: 'Arnilson', price: 150, onChart: false},
      {id: 3, name: 'Arnan', price: 30, onChart: false},]
  };


function rootReducer(state = initialState, action) {

  if (action.type === 'ADD_TO_CHART') {
    console.log(state.minions)
    console.log(action.id)
    return {
      ...state, minions: state.minions.map(
        minion => minion.id === action.id ? {...minion, onChart: true}  : minion 
      )
    }
  }

  if (action.type === 'REMOVE_FROM_Chart') {
    console.log(state.minions)
    console.log(action.id)
    return {
      ...state, minions: state.minions.map(
        minion => minion.id === action.id ? {...minion, onChart: false}  : minion 
      )
    }
  }

  return state;
};

export default rootReducer;