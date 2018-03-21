import React from 'react';


const UserListItem = props => {
    return (
        <div className=" col s12 m7">
            <div className="card horizontal">
                <div className="card-image">
                    <img alt="pic" className={(props.kljuc % 2) ? ("App-logo") : ("App-anti-logo")} src={props.data.imageURL} />
                </div>
                <div className="card-stacked">
                    <div className={props.data.gender + " card-content"}>
                        <p>{props.data.name}</p>
                        <p><i className="material-icons">email</i>{props.data.getData()}</p>
                        <p><i className="material-icons">cake</i>{props.data.dob}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default UserListItem;