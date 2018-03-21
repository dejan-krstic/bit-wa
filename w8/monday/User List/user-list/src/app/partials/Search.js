import React from 'react'

const Search = (props) => {
    return (
        <div id="search-bar" className="container row">
            <form className="col s12">
                <div className="input-field">
                    <i className="material-icons prefix">search</i>
                    <input onChange={props.changeHandler} id="icon_prefix" type="text" className="validate" />
                    <label for="icon_prefix">Search Users</label>
                </div>
            </form>
        </div>
    )
}

export default Search;