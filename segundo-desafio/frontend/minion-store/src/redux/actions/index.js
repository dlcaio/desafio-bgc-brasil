export function addToCart(id) {
    return {type: 'ADD_TO_CART', id}
}

export function removeFromCart(id) {
    return {type: 'REMOVE_FROM_CART', id}
}


export function getMinions() {
    return function(dispatch) {
        return fetch("https://hp8igc55mi.execute-api.us-east-1.amazonaws.com/dev/query-minion")
          .then(response => response.json())
          .then(json => {
            dispatch({ type: "GET_MINIONS", payload: json });
          });
      };
}


