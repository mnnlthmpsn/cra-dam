import React, { useState, createContext } from 'react'

export const AuthContext = createContext()

const AuthContextProvider = props => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const set_isAuthenticated = b => {
        setIsAuthenticated(b)
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, set_isAuthenticated }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider