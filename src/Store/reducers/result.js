import * as actionTypes from '../actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({
                    id: new Date(),
                    value: action.result
                })
            }
        case actionTypes.DELETE_RESULT:
            const updatedArr = state.results.filter(res => res.id !== action.resultElId)
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