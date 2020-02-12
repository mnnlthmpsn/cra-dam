import React, { useContext } from 'react'
import HomeNav from '../components/HomeNav'
import FooterContent from '../components/FooterContent'

const PageNotFound = () => {

    return (
        <div>
            <HomeNav />
            <div className='ComponentContainer'>
               <div style={{ marginTop: '20%', textAlign: 'center' }}>
                   <h1>404 Page Not found</h1>
               </div>
            </div>
            <FooterContent />
        </div>
    )
}

export default PageNotFound