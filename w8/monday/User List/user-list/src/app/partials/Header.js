import React from 'react';

const Header = props => (
<nav>
    <div className="nav-wrapper">
        <a  className="brand-logo center">BIT People</a>
        <ul className="right hide-on-med-and-down">
            <li><a><i className="material-icons">refresh</i></a></li>
            <li onClick={props.action}><a><i className="material-icons">{props.view}</i></a></li>
        </ul>
    </div>
</nav>
)

export default Header;