import React from 'react';
const Article = (props) => {
    
    return (<li className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <h3 className="card-title">{props.title} </h3>
                                   
                    <p>{props.body}</p>
                 </div>
            </li>)
}

Article.defaultProps = {
    title: "[Default Blog Title]",
    body: "[Default Blog Body Text Content]"
}

export default Article;