import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BackButton from '../partials/BackButton'
import data from '../../services/DataService'
import Loader from '../loader/Loader'

class SinglePostPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            back: () => { window.history.back() },
            postId: this.props.match.params.id,
            singlePost: {}

        }
    }

    updatePosts(postId) {
        data.getPostById(postId)
            .then((singlePost) => {
                this.setState({ singlePost: singlePost })
            });
    }


    componentDidMount() { 
        this.updatePosts(this.state.postId)
    }

    componentWillReceiveProps(nextProps) {
        this.updatePosts(nextProps.match.params.id)
    }
    postContent() {
        return (
            <div className="text-center">
                <h1>{this.state.singlePost.title}</h1>
                <Link to={`/authors/${this.state.singlePost.authorId}`}>{this.state.singlePost.authorName}</Link>
                <p>{this.state.singlePost.body}</p>
            </div>
        )
    }

    getSuggestions() {
        
        return (
            <React.Fragment>
                <hr />
                <h4> 3 more posts from the same author</h4>
                <ul className="navbar-nav">
                    <li><Link to={`/posts/${this.state.singlePost.authorPosts[0].id}`}>{this.state.singlePost.authorPosts[0].title}</Link></li>
                    <li><Link to={`/posts/${this.state.singlePost.authorPosts[1].id}`}>{this.state.singlePost.authorPosts[1].title}</Link></li>
                    <li><Link to={`/posts/${this.state.singlePost.authorPosts[2].id}`}>{this.state.singlePost.authorPosts[2].title}</Link></li>
                </ul>
            </React.Fragment>
        )
    }


    render() {
        if (JSON.stringify(this.state.singlePost) === JSON.stringify({})) {
            return <Loader/>
        }
        return (
            <div className="container">
                <BackButton back={this.state.back} />
                {this.postContent()}
                {this.getSuggestions()}
            </div>
        )
    }
}

export default SinglePostPage;