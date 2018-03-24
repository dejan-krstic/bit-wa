import React, { Component } from 'react'
import PostItem from '../shared/PostItem'
import data from '../../services/DataService'

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postList: [],
        }

    }

    componentDidMount() {
        data.getPosts()
            .then((postList) => {
                this.setState({postList: postList})
            })
    }

    render() {
        return <div className="container">
            <h3 className="text-center">POSTS</h3>
            <ul>
                {this.state.postList.map(post => <PostItem id={post.id} key={post.id} post={post}/>)}
            </ul>
        </div>
    }
}

export default HomePage