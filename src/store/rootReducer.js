const initialState = {
    number: 0
};

export default function rootReducer( state = initialState, action ) {
    switch(action.type) {
        case('increment'):
            return {
                number: state.number + 1
            }
        case('decrement'): 
            return {
                number: state.number - 1
            }
        case('incrementTenNumber'):
            return {
                number: action.payload.number + 10
            }
        default: 
            return state
        
    }
}
