import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Icon, Input, Button, DatePicker, Radio } from 'antd';
import firebase from '../../src/firebase';


const SignUpForm = (props) => {

    let history = useHistory()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await firebase.register(username, email, password)
            history.push('/dashboard')
        } catch(error) {
            alert(error.message)
        }
    }

    return (
        <div className='ComponentContainer'>
            <Form onSubmit={handleSubmit}>
                <Form.Item>
                    <Input
                        placeholder='username'
                        prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25' }} />}
                        onChange={e => setUsername(e.target.value)}
                        value={username}
                    />
                    <Input
                        prefix={<Icon type='mail' style={{ color: 'rgba(0,0,0,.25' }} />}
                        placeholder='Email' type='email'
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                    <Input.Password
                        placeholder='Password'
                        prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25' }} />}
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    />
                    <Button type='primary' style={{ width: '100%'}} htmlType='submit'>Join Us</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default SignUpForm