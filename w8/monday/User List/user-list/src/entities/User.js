export default class User {
    constructor(name, email, dob, imageURL){
        this.name = name;
        this.email = email;
        this.dob = this.formatDate(dob);
        this.imageURL = imageURL
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