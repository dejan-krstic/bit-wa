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
            <p><img src="http://cdn.onlinewebfonts.com/svg/img_504350.png" width="15px" alt="pic"/><p>{props.data.getData()}</p></p> 
                        
            <p><img src="https://cdn3.iconfinder.com/data/icons/birthday-celebration/60/birthday_cake_party_tier_candle-512.png" width="15px" alt="pic"/><p>{props.data.dob}</p></p>
            </div>
          </div>
        </div>


            )       
        }

export default UserListCard;