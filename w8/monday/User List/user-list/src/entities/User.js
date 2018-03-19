export default class User {
    constructor(name, email, dob, imageURL){
        this.name = name;
        this.email = email;
        this.dob = new Date(dob).toDateString();
        this.imageURL = imageURL
    }
}