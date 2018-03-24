export class Author {
    constructor (id, image, name, address, company){
        this.id = id
        this.image = image;
        this.name = name 
        this.address = address
        this.company = company;
    }

}

export class Name {
    constructor (name, username, email, phone) {
        this.name = name
        this.username = username
        this.email = email
    } 
}

export class Address {
    constructor (street, city, zipCode, geoLat, geoLong){
        this.street = street
        this.city = city
        this.zipCode = zipCode;
        this.geo = {
            lat: geoLat,
            long: geoLong
        }
    }
}

export class Company {
    constructor (name, slogan){
        this.name = name
        this.slogan = slogan
    }
}
