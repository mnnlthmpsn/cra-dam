import React, { useState } from 'react'
import { Menu } from 'antd';
import LoginForm from './LoginForm';


const HomeNav = () => {
    
    const [current, setCurrent] = useState('home')

    const handleClick = e => {
        setCurrent(e.key)
    }

    return (
        <div className='HomeNav'>
            <Menu onClick={handleClick} selectedKeys={current} mode="horizontal">
                <Menu.Item key="home" url='/'>
                    Home
                </Menu.Item>
                <Menu.Item key="contact">
                    Contact Us
                </Menu.Item>
                <Menu.Item key="about">
                    About
                </Menu.Item>
                <Menu.Item disabled className='navForm'>
                    <LoginForm />
                </Menu.Item>
            </Menu>
        </div>
    );
}

export default HomeNav
