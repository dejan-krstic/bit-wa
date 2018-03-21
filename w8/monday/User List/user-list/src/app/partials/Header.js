import React from 'react';

const Header = props => (
<<<<<<< HEAD
<nav>
    <div className="nav-wrapper">
        <a  className="brand-logo center">BIT People</a>
        <ul className="right hide-on-med-and-down">
            <li onClick={props.refresh}><a><i className="material-icons">refresh</i></a></li>
            <li onClick={props.action}><a><i className="material-icons">{props.view}</i></a></li>
        </ul>
    </div>
</nav>
=======
    <nav>
        <div className="nav-wrapper">
            <a className="brand-logo center">BIT People</a>
            <ul className="right hide-on-med-and-down">
                <li>
                    <input id="search" type="search" onChange={props.changeHandler} />
                </li>
                <li onClick={props.fresh}><a><i className="material-icons">refresh</i></a></li>
                <li onClick={props.action}><a><i className="material-icons">{props.view}</i></a></li>
            </ul>

        </div>
    </nav>
>>>>>>> c239227b286e75a7b48f89c056ddff2f63b1b832
)

export default Header;