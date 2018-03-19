import User from '../entities/User.js';

class UserService {
    getData() {
        return (
            fetch('https://randomuser.me/api/?results=15')
            .then((result)=> {
                return result.json()
            })
            .then((res)=>{
                return res.map((user)=> {
                    new User(user.name.first, user.email, user.dob, user.image.thumbnail);
                })
            })
            /* usersData.map(user => {
            return new User(user) */
        )
    }
}
 export const userService = new UserService();
