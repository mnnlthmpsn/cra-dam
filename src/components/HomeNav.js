import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Menu, Button, Modal } from 'antd'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import logo from '../assets/img/d-logo.png'


const HomeNav = () => {

    let history = useHistory()

    const [LoginIsVisible, setLoginIsVisible] = useState(false)

    const [current, setCurrent] = useState(window.location.pathname)

    const handleClick = () => {
        let currentLocation = window.location.pathname
        currentLocation = currentLocation.replace('/', '')
        setCurrent(currentLocation)
    }

    const showLoginModal = () => {
        setLoginIsVisible(true)
    }


    return (
        <div className='HomeNav'>
            <Menu onClick={handleClick} selectedKeys={current} mode="horizontal">
                <Menu.Item key="home">
                    <Link to='/'><img className='logo' src={logo} /></Link>
                </Menu.Item>
                <Menu.Item key="contact" className='items'>
                    <Link to='/contact'><b>Contact</b></Link>
                </Menu.Item>
                <Menu.Item key="about" className='items'>
                    <Link to='/about'><b>About</b></Link>
                </Menu.Item>
                <div className='navForm navDrop'>
                    <div>
                        <Button type='primary' onClick={() => showLoginModal()}>Get Started</Button>
                        <Modal
                            title='Get Started'
                            visible={LoginIsVisible}
                            onCancel={() => setLoginIsVisible(false)}
                            footer={[]}
                        >
                            <LoginForm />
                        </Modal>
                    </div>
                </div>
            </Menu>
        </div>
    );
}

export default HomeNav