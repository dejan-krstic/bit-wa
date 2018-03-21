import React from 'react';

const Header = props => (
    <nav>
        <div className="z-depth-0 nav-wrapper">
            <a className="brand-logo center">BIT Persons</a>
            <ul className="right hide-on-med-and-down">
                <li onClick={props.fresh}><a><i className="material-icons">refresh</i></a></li>
                <li onClick={props.action}><a><i className="material-icons">{props.view}</i></a></li>
            </ul>

        </div>
    </nav>
)

export default Header;