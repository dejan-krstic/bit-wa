import React, {Component} from 'react';
import userService from '../services/UserService.js';


class UsersList extends Component {
    constructor (props){
        super(props)
        this.state = {
            userData : []
        };
    }
    
    componentDidMount(){
        this.setState((prevState, props) => {
            return {userData: userService.getData()}
        }
        )
    }

    render () {
        return (<div>
                {this.state.userData.map((e, i) => <UserListItem data = {e} key = {i}/>)}
            </div>)
    }

}