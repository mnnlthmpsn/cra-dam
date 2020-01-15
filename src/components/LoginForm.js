import React, { useState, useContext } from 'react'
import { useHistory, Link } from 'react-router-dom';
import { Form, Icon, Input, Button } from 'antd';
import { UserContext } from '../contexts/UserContext';


const LoginForm = () => {

    let history = useHistory()

    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [password, setPassword] = useState('')
    const { setMail } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        // check validity of Email and password here
        setMail(email)
        history.push('/dashboard')
    }

    return (
        <Form layout='inline' onSubmit={handleSubmit}>
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
                <Input.Password
                    onChange={e => setPassword(e.target.value)}
                    placeholder='Password'
                    prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
                    required
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading}>
                    Log in
                </Button>
            </Form.Item>
            <Form.Item>
                <Link to='#forgotpasswordlink'>Forgot Password?</Link>
            </Form.Item>
        </Form>
    )
}

export default LoginForm