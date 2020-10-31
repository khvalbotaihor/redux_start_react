import * as actionTypes from '../actions';

const initialState = {
    counter: 0,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.val
            }
        case actionTypes.DELETE_RESULT:
            /*            const id=2;
                        const newArray = [...state.results];
                        newArray.results.splice(id, 1);*/
            const updatedArr = state.results.filter(res => res.id !== action.resultElId)
            return {
                ...state,
                results: updatedArr
            }
    }
    return state;
}

export default reducer;