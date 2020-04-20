import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { UserAuthContext } from '../contexts/userAuthContext'


const PublicRoute = ({ component: Component, ...rest  }) => {
    
    const {isAuthenticated} = useContext(UserAuthContext)
    
    return (
        <Route {...rest} render={
            props => {
                if(!isAuthenticated) {
                    return <Component {...rest} {...props} />
                } else {
                    return <Redirect to={{
                        pathname: '/dashboard',
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

export default PublicRoute