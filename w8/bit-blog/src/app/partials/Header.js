import React from 'react';
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <span className="navbar-brand">BIT Blog</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item"><Link to='/' className="nav-link" activeclassname="highlight">Home</Link></li>
                    <li className="nav-item"><Link to='/authors' className="nav-link" activeclassname="highlight">Authors</Link></li>
                    <li className="nav-item"><Link to='/about' className="nav-link" activeclassname="highlight">About</Link></li>
                </ul>
            </div>
        </nav>
    )

}

export default Header