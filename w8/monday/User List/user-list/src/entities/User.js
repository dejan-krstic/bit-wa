export default class User {
    constructor(name, email, dob, imageURL){
        this.name = name;
        this.email = email;
        this.dob = dob.toDateString();
        this.imageURL = imageURL
    }
}