import React, { useReducer } from 'react';
import { authReducer, initialState } from '../reducers/authReducer';
import { login, logout } from '../actions/authAction';

export const Login = () => {

    const [state, dispatch] = useReducer(authReducer, initialState)
        return (
            <div>
                <h1>Login</h1>
                <p>Usuario: {state.name}</p>
                <p>Clave: {state.uid}</p>
                <hr />
                <button 
                    classNameName="btn btn-primary"
                    onClick={()=>dispatch(login('123', 'Luis'))} 
                >
                    Login
                </button>
                <button 
                    classNameName="btn btn-primary"
                    onClick={()=>dispatch(logout())} 
                >
                    Logout
                </button>
            </div>
        ) 
}
