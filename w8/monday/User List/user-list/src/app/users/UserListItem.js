import React from 'react';


const UserListItem = props => {
    return (
        <div class="col s12 m7">
            <div class="card horizontal">
                <div class="card-image">
                    <img alt="" class={(props.kljuc%2)?("App-logo"):("App-anti-logo")} src={props.data.imageURL} />
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                        <p>{props.data.name}</p>
                        <p>{props.data.email}</p>
                        <p>{props.data.dob}</p>
                    </div>
                </div>
            </div>
        </div>

            )       
        }
        
export default UserListItem;