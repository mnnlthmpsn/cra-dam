import React, { useContext } from 'react'
import UnAuthNav from './unauthnav'
import AuthNav from './authnav'
import { AuthContext } from '../context/authcontext'

const Nav = () => {
    const { isAuthenticated } = useContext(AuthContext)
    return (
        isAuthenticated ? (
            <AuthNav />
        ) : (
                <UnAuthNav />
            )
    )
}

export default Nav