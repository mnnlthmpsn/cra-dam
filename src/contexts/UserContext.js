import React, { useState, createContext, useEffect } from 'react'

export const UserContext = createContext()

const UserContextProvider = props => {

    const [email, setEmail] = useState(() => {
        const localData = localStorage.getItem('email');
        return localData ? localData: ''
    })

    const setMail = (mail) => {
        setEmail(mail)
    }
    
    useEffect(() => {
        localStorage.setItem('email', email)
    }, [email]) 

    return(
        <UserContext.Provider value={{setMail, email}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider