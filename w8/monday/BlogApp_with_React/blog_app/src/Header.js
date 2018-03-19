import React from 'react';
import logo from './logo.svg';
const Header = (props) => {
    let j = 0;
    return (<nav className="App">
                <div className = "App-header">
                    <h2 className="App-title">{props.title}</h2>
                    <div className="images">
                    <img  className={((j++)%2)?("App-logo"):("App-anti-logo")} src={logo} width="100px" alt="logo"/> 
                    <img  className={((j++)%2)?("App-logo"):("App-anti-logo")} src={logo} width="100px" alt="logo"/>  
                    <img  className={((j++)%2)?("App-logo"):("App-anti-logo")} src={logo} width="100px" alt="logo"/>  
                    <img  className={((j++)%2)?("App-logo"):("App-anti-logo")} src={logo} width="100px" alt="logo"/>  
                    <img  className={((j++)%2)?("App-logo"):("App-anti-logo")} src={logo} width="100px" alt="logo"/>  
                    <img  className={((j++)%2)?("App-logo"):("App-anti-logo")} src={logo} width="100px" alt="logo"/> 
                    </div>
                </div>
            </nav>) 
}

export default Header;