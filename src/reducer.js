const initialState = { value: 0 };

const reducer = (state= initialState, action) =>{
    if (action.type === 'INC'){
        return {
            ...state,
            value: state.value + 1
        }
    }
    if (action.type === 'DEC'){
        return {
            ...state,
            value: state.value - 1
        }
    }
    if (action.type === 'RND'){
        return {
            ...state,
            value: state.value * action.payload
        }
    }
    return state;
}

export default reducer;