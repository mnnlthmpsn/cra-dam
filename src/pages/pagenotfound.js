import React from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'

const PageNotFound = () => {
    return (
        <div>
            <Nav />
            <div className="container col-lg-8 col-md-12 col-sm-22">
            <h5 className="text-center" style={{ marginTop: '25vh', marginBottom: '25vh' }}>The page you requested Could not be found</h5>
            </div>
            <Footer />
        </div>
    )
}

export default PageNotFound