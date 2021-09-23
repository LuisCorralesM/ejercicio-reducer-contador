import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import {Login} from '../components/Login'
import Counter from '../components/Counter';

export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                    <Route 
                        exact
                        path="/auth/login"
                        component={ Login }
                    />

                    <Route 
                        exact
                        path="/auth/counter"
                        component={ Counter }
                    />

                    <Redirect to="/auth/login" />

                </Switch>
            </div>

        </div>
    )
}