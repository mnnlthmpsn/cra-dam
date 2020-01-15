import React from 'react'
import { Form, Input, Icon, Button } from 'antd'

const ChangePasswordForm = () => {
    return (
        <div>
            <div className='settingsHeader' style={{ marginTop: '5px' }}>
                <h3 style={{ textAlign: 'center' }}>Change password</h3>
            </div>
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
                    <Button type='primary' style={{ width: '100%' }} htmlType='submit'>Join Us</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default ChangePasswordForm