const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const newState=Object.assign({},state);
            newState.counter = state.counter +1;
            return newState
        case 'DECREMENT':
            return {
                state,
                counter: state.counter - 1
            }
        case 'ADD':
            return {
                counter: state.counter + action.val
            }
        case 'SUBSTRACT':
            return {
                ...state,
                counter: state.counter - action.val
            }
        case 'STORE_RESULT':
            return {
               ... state,
                results: state.results.concat({
                    id:new Date(),
                    value: state.counter})
            }
        case 'DELETE_RESULT':
/*            const id=2;
            const newArray = [...state.results];
            newArray.results.splice(id, 1);*/
            const updatedArr = state.results.filter(res => res.id!==action.resultElId)
            return {
                ...state,
                results: updatedArr
            }
        default:
            return state
    }


    /*
        if(action.type === 'INCREMENT'){
            return {
                counter: state.counter +1
            }
        }
    */


    return state;
}

export default reducer;