import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Route, Redirect } from 'react-router-dom'

function PrivateRoute({component: RouteComponent, ...props}) {
    const { isAuthenticated } = useContext(AuthContext)

    return (
        <Route
        {...props} 
        render={routeProps =>
            isAuthenticated ? <RouteComponent {...routeProps} /> : <Redirect to="/signin" />
        }
        />
    )
}

export default PrivateRoute
