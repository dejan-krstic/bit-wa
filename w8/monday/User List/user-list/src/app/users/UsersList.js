import React from 'react';
import UserListItem from './UserListItem'
import UserCardItem from './UserCardItem'


const UsersList = props => {
        return (<div className={(props.grid) ? "row container" : "container"}>
                     {(props.grid) ? props.userArray.map((e, i) => <UserCardItem data = {e} kljuc = {i} key = {i}/>) : props.userArray.map((e, i) => <UserListItem data = {e} kljuc = {i} key = {i}/>)}
                </div>)
        }
export default UsersList;







