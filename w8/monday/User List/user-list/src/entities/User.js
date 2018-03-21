export default class User {
    constructor(name, email, dob, imageURL, gender){
        this.name = name;
        this.email = email;
<<<<<<< HEAD
        this.dob = this.formatDate(dob);
        this.imageURL = imageURL
=======
        this.dob = new Date(dob).toDateString();
        this.imageURL = imageURL;
        this.gender = gender;
>>>>>>> c239227b286e75a7b48f89c056ddff2f63b1b832
    }
    getData () {
        const a = this.email.split('@');

        return a[0].slice(0,3)+'...'+a[0].slice(a[0].length-3, a[0].length )+'@'+a[1];
    }

    formatDate(inputDate) {
        const date = new Date(inputDate);
        return `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`
    }
}