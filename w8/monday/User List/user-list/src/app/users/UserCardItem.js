import React from 'react';


const UserListCard = props => {
    return (
        <div className="col s4 m4">
          <div className="card">
            <div className="card-image">
              <img alt="pic" className={(props.kljuc%2)?("App-logo"):("App-anti-logo")} src={props.data.imageURL} />
              <span className="card-title">{props.data.name}</span>
            </div>
            <div className="card-content">
            <p>{props.data.getData()}</p>
                        
            <p>{props.data.dob}</p>
            </div>
          </div>
        </div>


            )       
        }

export default UserListCard;