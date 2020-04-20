import React, { useState, useContext } from 'react'
import UnAuthNav from './unauthnav'
import AuthNav from './authnav'
import { UserAuthContext } from '../contexts/userAuthContext'

const Nav = () => {
    const { isAuthenticated, set_isAuthenticated } = useContext(UserAuthContext)

    return (
        isAuthenticated ? (
            <AuthNav />
        ) : (
                <UnAuthNav />
            )
    )
}

export default Nav