import React from 'react';
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">Navbar</span>
                <ul className="navbar-nav">
                    <li className="nav-item"><Link to='/' className="nav-link" activeclassname="highlight">Home</Link></li>
                    <li className="nav-item"><Link to='/authors' className="nav-link" activeclassname="highlight">Authors</Link></li>
                    <li className="nav-item"><Link to='/about' className="nav-link" activeclassname="highlight">About</Link></li>
                </ul>
        </nav>
    )

}

export default Header