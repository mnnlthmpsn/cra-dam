import React, { useState } from 'react'
import FooterContent from '../components/FooterContent'
import { Form, Input, Icon, Button, message } from 'antd'
import HomeNav from '../components/HomeNav'
import axios from 'axios'


const ForgotPassword = () => {

    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        // check validity of Email and password here
        await axios.post('http://127.0.0.1:8000/auth/password/reset/', {
            email: email,
        })
            .then((response) => {
                console.log(response)
                message.info('Check your email please')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <HomeNav />
            <div className='ComponentContainer'>
                <Form onSubmit={handleSubmit} style={{ marginTop: '20%', width: '50%', marginLeft: '25%' }}>
                    <Form.Item>
                        <Input
                            onChange={e => setEmail(e.target.value)}
                            type='email'
                            placeholder='Email'
                            prefix={<Icon type='mail' style={{ color: 'rgba(0,0,0,.25' }} />}
                            required
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" loading={loading}>
                            Send Password reset link
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <FooterContent />
        </div>
    )
}

export default ForgotPassword