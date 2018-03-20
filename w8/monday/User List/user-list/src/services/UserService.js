import User from '../entities/User.js';

class UserService {
    getData() {
        return (
            fetch('https://randomuser.me/api/?results=15')
            .then((result)=> {
                return result.json()
            })
            .then((res)=>{
                console.log(res.results);
                const a = res.results.map((user)=> new User(user.name.first, user.email, user.dob, user.picture.large, user.gender));
                return a;
            })

        )
    }
}
 const userService = new UserService();

 export default userService;