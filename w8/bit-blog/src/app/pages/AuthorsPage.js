import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class AuthorsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authorList: [1, 2, 3]
        }
    }

    render() {
        return (
            <div className="container">
                <h3>AUTHORS ({this.state.authorList.length})</h3>
                <ul>
                    {this.state.authorList.map((author, i) => <Link key={i} to={`/authors/${i}`}><li>Name Surname</li></Link>)}
                </ul>
            </div>
        )
    }
}

export default AuthorsPage