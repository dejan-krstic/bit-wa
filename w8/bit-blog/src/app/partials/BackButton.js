import React from 'react'

const BackButton = (props) => {
    return (
        <p onClick={props.back}>{`< Back`}</p> 
    )
}
export default BackButton;