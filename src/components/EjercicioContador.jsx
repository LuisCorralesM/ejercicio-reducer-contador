import { useReducer } from "react"


// Se declara un obj con un estado inicial para nuetro hook "useReducer"
const initialState = {
    contador: 0,
    intervaloContador: 1,
    incrementar: true
}

// Funcion con la cual cambiamos el estado según las condiciones del "Switch"
const reducer = (state, action) => {
    switch (action.type) {
        // los "case" los establecemos en las funciones de eventos (handle) con el metodo "dispatch"
        case "INCREMENT":
            return {
                ...state,
                incrementar: action.incrementar
            }
        case "SET_INTERVAL":
            return {
                ...state,
                intervaloContador: parseInt(action.intervaloContador)
            }
        case "INCREASE_COUNT":
            return {
                ...state,
                contador: state.contador + state.intervaloContador
            }
        case "DECREASE_COUNT":
            return {
                ...state,
                contador: state.contador - state.intervaloContador
            }
        case "RESTART":
            return initialState
        default:
            return state
    }
}

// Declaramos el componente "EjercicioContador"
function EjercicioContador() {
    // Desestructuramos el hook "useReducer"
    const [state, dispatch] = useReducer(reducer, initialState)
    // Se crean las funciones de tipo evento para cada caso
    const
        //Incrementar
        handleIncrement = (e) => {
            const { checked } = e.target
            dispatch({ type: "INCREMENT", incrementar: checked })
        },
        //Intervalo del contador
        handleCountInterval = (e) => {
            const { value } = e.target
            dispatch({ type: "SET_INTERVAL", intervaloContador: value })
        },
        //Acumulado contador
        handleCount = (e) => {
            if(state.incrementar){
                dispatch({ type: "INCREASE_COUNT"})
            }else{
                dispatch({ type: "DECREASE_COUNT"})
            } 
        },
        //Reiniciar
        handleRestart = (e) => {
            dispatch({ type: "RESTART"})
        }
        //Estructura HTML
    return (
        <div>
            <h1>UseReducer</h1>
            <p>{"Cuenta: " + state.contador}</p>
            <div>
                <input type="checkbox"
                    id="chk"
                    checked={state.incrementar}
                    onChange={handleIncrement}
                />
                <label htmlFor="chk">
                    {"Incrementar"}
                </label>
            </div>
            <br />
            <div>
                <label htmlFor="interval">
                    {"Intervalo"}
                </label>
                <input type="number"
                    id="interval"
                    value={state.intervaloContador}
                    onChange={handleCountInterval}
                />
            </div>
            <br />
            <button onClick={handleCount} >
                {state.incrementar ? "Incrementar" : "Decrementar"}
            </button>
            <button onClick={handleRestart} >
                {"Reiniciar"}
            </button>
        </div>
    )
}

export default EjercicioContador
