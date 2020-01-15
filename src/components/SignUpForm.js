import React, { useState } from 'react'
import { Row, Col, Form, Icon, Input, Button, DatePicker, Radio } from 'antd';


const SignUpForm = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className='ComponentContainer'>
            <Form>
                <Form.Item>
                    <Input
                        placeholder='First Name'
                        prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25' }} />}
                    />
                    <Input
                        placeholder='Last Name'
                        prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25' }} />}
                    />

                    <Input
                        prefix={<Icon type='mail' style={{ color: 'rgba(0,0,0,.25' }} />}
                        placeholder='Email' type='email'
                    />
                    <Input.Password
                        placeholder='Password'
                        prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25' }} />}
                    />
                    <Input.Password
                        placeholder='Confirm Password'
                        prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25' }} />}
                    />
                    <Row gutter={8}>
                        <Col span={12}>
                            <DatePicker placeholder='Date of Birth' />
                        </Col>
                        <Col span={12}>
                            <Radio.Group>
                                <Radio value={'m'}>Male</Radio>
                                <Radio value={'f'}>Female</Radio>
                            </Radio.Group>
                        </Col>
                    </Row>
                    <Button type='primary' style={{ width: '100%'}} htmlType='submit'>Join Us</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default SignUpForm