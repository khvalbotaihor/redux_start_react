const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                counter: state.counter + 1
            }
            break;
        case 'DECREMENT':
            return {
                counter: state.counter - 1
            }
            break;
        case 'ADD':
            return {
                counter: state.counter + action.val
            }
            break;
        case 'SUBSTRACT':
            return {
                counter: state.counter - action.val
            }
            break;
        default:
            return state
            break;

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