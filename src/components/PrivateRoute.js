import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { UserAuthContext } from '../contexts/userAuthContext'


const ProtectedRoute = ({ component: Component, ...rest  }) => {
    
    const {isAuthenticated} = useContext(UserAuthContext)
    
    return (
        <Route {...rest} render={
            props => {
                if(isAuthenticated) {
                    return <Component {...rest} {...props} />
                } else {
                    return <Redirect to={{
                        pathname: '/cta',
                        state: {
                            from: props.location
                        }
                    }}
                    />
                }
            }
        }
        />
    )
}

export default ProtectedRoute