import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Dropdown, Icon, Avatar } from 'antd'
import { UserContext } from '../contexts/UserContext'

const Navbar = () => {

    const { email } = useContext(UserContext)

    const [current, setCurrent] = useState(window.location.pathname)

    const handleClick = () => {
        let currentLocation = window.location.pathname
        currentLocation = currentLocation.replace('/', '')
        setCurrent(currentLocation)
    }

    const menu = (
        <Menu>
            <Menu.Item>
                <Link to='/'>Logout</Link>
            </Menu.Item>
        </Menu >
    )

    return (
        <div className='ComponentNav'>
            <Menu onClick={handleClick} selectedKeys={current} mode="horizontal">
                <Menu.Item key="dashboard" >
                    <Link to='/dashboard'>Dashboard</Link>
                </Menu.Item>
                <Menu.Item key="courses">
                    <Link to='/courses'>Courses</Link>
                </Menu.Item>
                <Menu.Item key="settings">
                    <Link to='/settings'>Settings</Link>
                </Menu.Item>
                <Dropdown overlay={menu} className='navDrop'>
                    <a className='ant-dropdown-link' href='#'>
                        <Avatar /> {email} <Icon type='down' />
                    </a>
                </Dropdown>
            </Menu>
        </div>
    )
}

export default Navbar