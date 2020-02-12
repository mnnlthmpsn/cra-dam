import React from 'react'
import { Layout } from 'antd'

const { Footer } = Layout;


const FooterContent = () => {
    return (
        <Footer className='footer'>
            <div style={{ textAlign: 'center' }}>
                <p style={{ color: 'white' }}><strong>Donate to support Damzinium (054 0000 000)</strong></p>
            </div>
        </Footer>
    )
}

export default FooterContent