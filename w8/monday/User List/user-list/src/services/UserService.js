import User from '../entities/User.js';

class UserService {
    getData() {
        return (
            fetch('https://randomuser.me/api/?results=15')
            .then((result)=> {
                return result.json()
            })
            .then((res)=>{
<<<<<<< HEAD
                console.log(res);

                const a = res.results.map((user)=> new User(`${user.name.first} ${user.name.last}`, user.email, user.dob, user.picture.large));
                localStorage.setItem('data', JSON.stringify(a));
=======
                console.log(res.results);
                const a = res.results.map((user)=> new User(user.name.first, user.email, user.dob, user.picture.large, user.gender));
>>>>>>> c239227b286e75a7b48f89c056ddff2f63b1b832
                return a;
            })

        )
    }
}
 const userService = new UserService();

 export default userService;