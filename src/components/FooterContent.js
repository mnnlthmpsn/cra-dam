import React from 'react'
import { Layout, Row, Col } from 'antd'
import ig from '../assets/img/ig.png'
import fb from '../assets/img/fb.png'
import tw from '../assets/img/tw.png'
import mail from '../assets/img/mail.png'


const { Footer } = Layout;


const FooterContent = () => {
    return (
        <Footer className='footer'>
            <Row>
                <Col xs={24} sm={24} md={6} lg={6}>
                    <p style={{ color: 'white' }}>
                        <a target='_blank' rel="noopener noreferrer" href='https://www.damzinium.com'><img className='logo' style={{ margin: '5px' }} src={ig} alt='instagram' /></a>
                        <a target='_blank' rel="noopener noreferrer" href='https://www.facebook.com/pages/category/Education/Damzinium-INC-285192118553538/'><img className='logo' style={{ margin: '5px' }} src={fb} alt='facebook' /></a>
                        <a target='_blank' rel="noopener noreferrer" href='https://twitter.com/damziniuminc?lang=en'><img className='logo' style={{ margin: '5px' }} src={tw} alt='twitter' /></a><br />
                    </p>
                </Col>
                <Col xs={24} sm={24} md={10} lg={10}>
                    <p style={{ color: 'white' }}>
                        <strong>Donate to support Damzinium (054 060 9437)</strong>
                        <br />
                        &copy; Damzinium Inc
                    </p>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                    <a href="mailto:etntiamoah@st.ug.edu.gh">
                        <p style={{ color: 'white' }}><img alt='mailto' src={mail} className='mailto' />Send Us a mail</p>
                    </a>
                </Col>
            </Row>
        </Footer>
    )
}

export default FooterContent