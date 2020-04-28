import React from 'react'

const Footer = () => {
    return (
        <div className="footer-basic">
            <footer>
                <div className="social">
                    <a href='https://damzinium.com'><i className="icon ion-social-instagram"></i></a>
                    <a href='https://damzinium.com'><i className="icon ion-social-snapchat"></i></a>
                    <a href='https://damzinium.com'><i className="icon ion-social-twitter"></i></a>
                    <a href='https://damzinium.com'><i className="icon ion-social-facebook"></i></a>
                </div>
                <ul
                    className="list-inline">
                    <li className="list-inline-item">Home</li>
                    <li className="list-inline-item">Services</li>
                    <li className="list-inline-item">About</li>
                    <li className="list-inline-item">Terms</li>
                </ul>
                <p className="copyright">Company Name © 2017</p>
            </footer>
        </div>
    )
}

export default Footer