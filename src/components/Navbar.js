import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Menu, Dropdown, Icon, Affix } from 'antd'
import logo from '../assets/img/d-logo.png'
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
        <div id="navbar" className='ComponentNav'>
            <Affix offsetTop={0}>
                <Menu onClick={handleClick} selectedKeys={current} mode="horizontal">
                    <Menu.Item key="home">
                        <Link to='/'><img className='logo' src={logo} alt='damzinium' /></Link>
                    </Menu.Item>
                    <Menu.Item key="dashboard" >
                        <Link to='/dashboard'><b>Dashboard</b></Link>
                    </Menu.Item>
                    <Menu.Item key="departments">
                        <Link to='/departments'><b>Catalog</b></Link>
                    </Menu.Item>
                    {/* <Menu.Item key="settings">
                    <Link to='/settings'><b>Settings</b></Link>
                </Menu.Item> */}
                    <Dropdown overlay={menu} className='navDrop'>
                        <a className='ant-dropdown-link' href='#w'>
                            <img className='ant-dropdown-link logo' style={{ marginRight: '5px' }} src={firebase.auth().currentUser.photoURL} alt={firebase.auth().currentUser.photoURL} /> {firebase.auth().currentUser.displayName} <Icon type='down' />
                        </a>
                    </Dropdown>
                </Menu>
            </Affix>
        </div>
    )
}

export default Navbar