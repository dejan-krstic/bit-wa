import React from 'react';
import UserListItem from './UserListItem'
// import userService from '../services/UserService.js';


const UsersList = props => {
        return (<div>
                     {props.userArray.map((e, i) => <UserListItem data = {e} kljuc = {i}/>)}
                </div>)
        }

export default UsersList;







// class UsersList extends Component {
//     constructor (props){
//         super(props)
//         this.state = {
//             userData : []
//         };
//     }
    
//     componentDidMount(){
//         this.setState((prevState, props) => {
//             return {userData: userService.getData()}
//         }
//         )
//     }

//     render () {
//         return (<div>
//                 {this.state.userData.map((e, i) => <UserListItem data = {e} key = {i}/>)}
//             </div>)
//     }

// }