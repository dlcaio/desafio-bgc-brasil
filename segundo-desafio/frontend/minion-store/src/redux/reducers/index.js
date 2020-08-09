const initialState = {
    minions: []
  };


function rootReducer(state = initialState, action) {

  if (action.type === 'REMOVE_MINION') {
    console.log(state.articles)
    console.log(action.id)
    return {minions: state.minions.filter(minion => 
      minion.id !== minion.id)}
  }
  return state;
};

export default rootReducer;