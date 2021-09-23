// importamos el hooks, 'useReducer'
import React, { useReducer } from 'react'
// importamos las funciones en el archivo 'types.js'
import { types } from '../types/types'
import {counterReducer, initialState, init} from '../reducers/counterReducer'

const Counter = () => {
    const [counter, dispatch] = useReducer(counterReducer, initialState, init)

    return (
        //Renderezamos una estructura basica para pintar en pantalla el contador
        <div className="container mt-3">
            <h1>Counter: {counter}</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={()=>{
                    dispatch({type: types.increment})
                }}
            >
                +1
            </button>
            <span>  </span>
            <button
                className="btn btn-danger"
                onClick={()=>{
                    dispatch({type: types.decrement})
                }}
            >
                -1
            </button>
            <span>  </span>
            <button
                className="btn btn-warning"
                onClick={()=>{
                    dispatch({type: types.reset})
                }}
            >
                Reset
            </button>
        </div>

    )
}

export default Counter
