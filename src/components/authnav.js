import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from './z.png'
import { FirebaseContext } from './Firebase'


const AuthNav = () => {

    const firebase = useContext(FirebaseContext)

    const logout = e => {
        e.preventDefault()
        firebase.doSignOut()
    }

    return (
        <nav className="navbar navbar-dark navbar-expand-md sticky-top bg-success shadow d-lg-flex">
            <div className="container-fluid"><button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navcol-1">
                    <ul className="nav navbar-nav d-flex flex-row flex-grow-1 justify-content-around">
                        <Link to='/'><li className="nav-item" role="presentation"><span className="nav-link text-white" style={{ marginTop: "12px" }}><img src={logo} alt='damzinum' className='logo' /></span></li></Link>
                        <Link to='/dashboard'><li className="nav-item" role="presentation"><span className="nav-link text-white" style={{ marginTop: "15px" }}>Dashboard</span></li></Link>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" style={{ marginTop: "12px" }}>
                                <span style={{ marginLeft: "19px", marginTop: "-6px" }}>
                                    <img src={firebase.auth.currentUser.photoURL} style={{ marginRight: "10px", verticalAlign: 'middle', width: '30px', height: '30px', borderRadius: '50%' }} alt="..." />
                                    {firebase.auth.currentUser.displayName}
                                </span>
                                <button onClick={e => logout(e)} className="btn btn-outline-light" type="button" style={{ marginLeft: "19px", marginTop: "-6px" }}>Logout</button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default AuthNav