import React, { Component } from 'react'
import PostItem from '../shared/PostItem'

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postList: [1, 2, 3, 4, 5, 6, 7, 8],
            data: {
                title: "Title1",
                bodyText: "Lorem ipsum..."
            }
        }

    }

    render() {
        return <div className="container">
            <h3>POSTS</h3>
            <ul>
                {this.state.postList.map((post, i) => <PostItem id={i} key={i} post={this.state.data}/>)}
            </ul>
        </div>
    }
}

export default HomePage