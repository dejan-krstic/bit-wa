import React from 'react'
import { Link } from 'react-router-dom'

const PostItem = (props) => {
    return (
        <React.Fragment>
            <Link to={`/posts/${props.id}`}>
                <h3>Title {props.id}</h3>
            </Link>
            <p>{props.post.bodyText}</p>
        </React.Fragment>

    )
}

export default PostItem