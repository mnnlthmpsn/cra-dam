import React, { createContext, useState } from 'react'

export const UserAuthContext = createContext()

const UserAuthContextProvider = (props) => {

    const [isAuthenticated, setIsAuthenticated] = useState(null)

    const set_isAuthenticated = (tf) => {
        setIsAuthenticated(tf)
    }

    return (
        <UserAuthContext.Provider value={{ isAuthenticated, set_isAuthenticated }}>
            {props.children}
        </UserAuthContext.Provider>
    )
}

export default UserAuthContextProvider