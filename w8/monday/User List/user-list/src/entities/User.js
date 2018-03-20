export default class User {
    constructor(name, email, dob, imageURL, gender){
        this.name = name;
        this.email = email;
        this.dob = new Date(dob).toDateString();
        this.imageURL = imageURL;
        this.gender = gender;
    }
    getData () {
        const a = this.email.split('@');

        return a[0].slice(0,3)+'...'+a[0].slice(a[0].length-3, a[0].length )+'@'+a[1];

    }
}