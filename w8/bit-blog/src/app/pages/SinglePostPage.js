import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BackButton from '../partials/BackButton'

class SinglePostPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            back: () => { window.history.back() },
            
        }
    }

    postContent(id) {
        return (
            <div>
                <h1>Post</h1>
                <Link to={`/authors/${id}`} />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ex qui commodi a ad expedita mollitia obcaecati ut laboriosam officiis!</p>
            </div>
        )
    }

    getSuggestions(id) {
        return (
            <React.Fragment>
                <h4> 3 more posts from the same author</h4>
                <a src='/'>Mock Link 1</a>
                <a src='/'>Mock Link 2</a>
                <a src='/'>Mock Link 3</a>
            </React.Fragment>
        )
    }


    render() {
        return (
            <div className="container">
                <BackButton back={this.state.back} />
                {/* {this.postContent(1)}
                    {this.getSuggestions(2)} */}
            </div>
        )
    }
}

export default SinglePostPage;