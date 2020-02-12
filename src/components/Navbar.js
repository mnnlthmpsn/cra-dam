import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Menu, Dropdown, Icon, Avatar } from 'antd'
import firebase from 'firebase'

const Navbar = () => {

    let history = useHistory()

    const [current, setCurrent] = useState(window.location.pathname)

    const handleClick = () => {
        let currentLocation = window.location.pathname
        currentLocation = currentLocation.replace('/', '')
        setCurrent(currentLocation)
    }

    const logout = async () => {
      await firebase.auth().signOut()
      history.push('/')
    }

    const menu = (
        <Menu>
            <Menu.Item>
                <Link to='/' onClick={() => logout()}>Logout</Link>
            </Menu.Item>
        </Menu >
    )

    return (
        <div className='ComponentNav'>
            <Menu onClick={handleClick} selectedKeys={current} mode="horizontal">
                <Menu.Item key="dashboard" >
                    <Link to='/dashboard'><b>Dashboard</b></Link>
                </Menu.Item>
                <Menu.Item key="courses">
                    <Link to='/courses'><b>Courses</b></Link>
                </Menu.Item>
                {/* <Menu.Item key="settings">
                    <Link to='/settings'><b>Settings</b></Link>
                </Menu.Item> */}
                <Dropdown overlay={menu} className='navDrop'>
                    <a className='ant-dropdown-link' href='#'>
                    <img className='logo' style={{ marginRight: '5px' }} src={firebase.auth().currentUser.photoURL} /> {firebase.auth().currentUser.displayName} <Icon type='down' />
                    </a>
                </Dropdown>
            </Menu>
        </div>
    )
}

export default Navbar