import React, { useEffect, useContext } from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'
import { AuthContext } from '../context/authcontext'

const Dashboard = () => {

    const { isAuthenticated } = useContext(AuthContext)

    const checkAuthStatus = () => (
        isAuthenticated
            ? 'allow him study'
            : window.location.replace('/cta')
    )

    useEffect(() => {
        checkAuthStatus()
    })

    return (
        <div>
            <Nav />
            <h1 style={{textAlign: 'center', marginTop: '200px'}}>Dashboard here</h1>
            <Footer />
        </div>
    )
}

export default Dashboard