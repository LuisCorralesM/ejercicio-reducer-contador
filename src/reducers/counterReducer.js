import {types} from '../types/types'

export const initialState = 10
export const init = (value)=>{
    return parseInt(value)
}

export const counterReducer = (state,action) => {
switch (action.type) {
    //En caso de incrementar
    case types.increment:
        return state + 1
    // En caso de decrementar
    case types.decrement:
    return state - 1

    case types.reset:
        return init(initialState)
    
    default:
        return state
}
}
