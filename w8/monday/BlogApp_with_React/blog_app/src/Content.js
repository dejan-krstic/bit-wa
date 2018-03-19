import React from 'react';
import Article from './Article.js';
const Content = (props) => {
    return(<ul>
        {props.list.map((element, i) => <Article body = {element.body} title = {element.title} key ={i} kljuc={i} />)}
    </ul>)
}

export default Content;