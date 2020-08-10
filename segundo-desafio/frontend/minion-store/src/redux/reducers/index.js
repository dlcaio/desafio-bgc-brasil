const initialState = {
    minions: [
      {id: 1, name: 'Arnoldo', price: 300, onChart: false},
      {id: 2, name: 'Arnilson', price: 150, onChart: false},
      {id: 3, name: 'Arnan', price: 30, onChart: false},]
  };


function rootReducer(state = initialState, action) {

  if (action.type === 'REMOVE_MINION') {
    console.log(state.minions)
    console.log(action.id)
    return {minions: state.minions.filter(minion => 
      minion.id !== action.id)}
  }
  return state;
};

export default rootReducer;