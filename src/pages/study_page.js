import React from 'react'
import AuthNav from '../components/authnav'
import Footer from '../components/footer'

const StudyPage = () => {
    return (
        <div>
            <AuthNav />
            <div className='container text-center'>
                <h4 className="text-center" style={{ marginTop: "24px", marginBottom: "24px" }}>Artificial Intelligence</h4>
                <h1 >Topic 1</h1>
                <div>Pagination</div>
            </div>
            <Footer />
        </div>
    )
}

export default StudyPage