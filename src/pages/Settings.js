import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import FooterContent from '../components/FooterContent'
import { Row, Col } from 'antd'
import ProfileUpload from '../components/ProfileUpload'
import AccountDetailsForm from '../components/AccountDetailsForm'
import ChangePasswordForm from '../components/ChangePasswordForm'

const Settings = () => {

    return (
        <div>
            <Navbar />
            <div className='ComponentContainer'>
                <Row gutter={20}>
                    <Col xs={24} sm={24} md={8} lg={8}>
                        <ProfileUpload />
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8}>
                        <AccountDetailsForm />
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8}>
                        <ChangePasswordForm />
                    </Col>
                </Row>
            </div>
            <FooterContent />
        </div>
    )
}

export default Settings