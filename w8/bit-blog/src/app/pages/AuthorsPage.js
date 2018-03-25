import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import data from '../../services/DataService'

class AuthorsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authorList: []
        }
    }

    componentDidMount() {
        data.getAuthors()
            .then((authorList) => {
                this.setState({authorList: authorList})
            })
    }

    render() {
        return (
            <div className="container">
                <h3>AUTHORS ({this.state.authorList.length})</h3>
                <ul className="navbar-nav">
                    {this.state.authorList.map(author => <Link key={author.id} to={`/authors/${author.id}`}><li>{author.name}</li></Link>)}
                </ul>
            </div>
        )
    }
}

export default AuthorsPage