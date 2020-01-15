import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { UserContext } from '../contexts/UserContext'
import { Row, Col } from 'antd'
import ProfileUpload from '../components/ProfileUpload'
import AccountDetailsForm from '../components/AccountDetailsForm'
import ChangePasswordForm from '../components/ChangePasswordForm'

const Settings = () => {

    const { email } = useContext(UserContext)

    return (
        <div>
            <Navbar />
            <div className='ComponentContainer'>
                <Row gutter={20}>
                    <Col span={5}>
                        <ProfileUpload />
                    </Col>
                    <Col span={12}>
                        <AccountDetailsForm />
                    </Col>
                    <Col span={7}>
                        <ChangePasswordForm />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Settings