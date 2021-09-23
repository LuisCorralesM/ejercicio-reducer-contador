import React, {useState} from 'react'
import {
    HashRouter as Router,
    Switch,
} from 'react-router-dom';

import Counter from '../components/Counter';
import {AuthRouter} from './AuthRouter';
import { PublicRouter } from './PublicRouter';
import { PrivateRouter } from './PrivateRouter';
import NavBar from '../components/Navbar'
import EjercicioContador from '../components/EjercicioContador';

const AppRouter = () => {
    const [isAuth, setIsAuth] = useState(false)
    return (
        <Router>
                <>
                    <NavBar/>
                    <div className="container">
                        <Switch>
                            <PublicRouter
                            path="/auth" 
                            component={AuthRouter} 
                            isAuthenticated={isAuth}
                            />   
                            {/* Ruta para el ejercicio contador reduce */}

                            <PublicRouter
                            path="/ejercicio/contador" 
                            component={EjercicioContador} 
                            isAuthenticated={isAuth}
                            />   

                            <PrivateRouter 
                            path="/" 
                            component={Counter} 
                            isAuthenticated={isAuth}
                            />
                        </Switch>
                    </div>
                </>
            </Router>
    )
}

export default AppRouter
