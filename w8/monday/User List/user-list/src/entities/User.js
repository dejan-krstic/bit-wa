export default class User {
    constructor(firstName, lastName, email, dob, imageURL, gender){
        this.firstName = firstName;
        this.fullName = `${firstName} ${lastName}`;
        this.email = email;
        this.hiddenEmail = this.getData();
        this.dob = this.formatDate(dob);
        this.imageURL = imageURL;
        this.gender = gender;
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