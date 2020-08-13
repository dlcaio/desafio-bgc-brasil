export function addToCart(id) {
    return {type: 'ADD_TO_CART', id}
}

export function removeFromCart(id) {
    return {type: 'REMOVE_FROM_CART', id}
}


export const getMinions = () => {
    return async (dispatch) => {
        
          const resp = await fetch("https://hp8igc55mi.execute-api.us-east-1.amazonaws.com/dev/query-minion")
          const respJson = await resp.json()
          return dispatch({type: "GET_MINIONS", payload: respJson})
      };
}

export const bookMinions = (minions) => {
    return async (dispatch) => {
        console.log(minions)
        const resp = await fetch("https://hp8igc55mi.execute-api.us-east-1.amazonaws.com/dev/book", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(minions)
        })
        return dispatch({type: "BOOK_MINIONS"})
      };
}



