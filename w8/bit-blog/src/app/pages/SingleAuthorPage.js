import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import data from '../../services/DataService'
import {GOOGLE_MAPS_API_KEY, STATIC_MAP} from '../../shared/constants'

class SingleAuthorPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authorId: this.props.match.params.id,
            authorData: {
                name: {
                    image: null,
                    name: null,
                    username: null,
                    email: null,
                    phone: null
                },
                address: {
                    street: null,
                    city: null,
                    zipCode: null,
                    geo: {
                        lat: 0,
                        long: 0
                    }
                },
                company: {
                    name: null,
                    slogan: null
                }
            }
        }
    }

    componentDidMount() {
        data.getAuthorById(this.state.authorId)
            .then(authorData => {
                this.setState({authorData: authorData})
            })
    }

    authorProfile() {
        const profile = this.state.authorData.name;
        return (
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-3">
                            <img className="card-img-left" src={profile.image} alt={profile.name} />
                        </div>
                        <div className="col-9">
                            <div className="card-text">
                                <h3>{profile.name}</h3>
                                <p>{`username: ${profile.username}`}</p>
                                <p>{`email: ${profile.email}`}</p>
                                <p>{`phone: ${profile.phone}`}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }

    authorAddress() {
        const address = this.state.authorData.address;
        console.log(address.geo.lat,address.geo.long);
        return (
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-9">
                            <div className="card-text">
                                <h3>Address</h3>
                                <p>{`street: ${address.street}`}</p>
                                <p>{`city: ${address.city}`}</p>
                                <p>{`zipcode: ${address.zipCode}`}</p>
                            </div>
                        </div>
                        <div className="col-3">
                        <img src = {`${STATIC_MAP}center=${address.geo.lat},${address.geo.long}&zoom=2&size=200x200&markers=color:red%7C${address.geo.lat},${address.geo.long}&key=${GOOGLE_MAPS_API_KEY}`}/>
                        </div>
                    </div>
                </div>
            </div >
        )
    }

    authorCompany() {
        const company = this.state.authorData.company;
        return (
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-12">
                            <div className="card-text">
                                <h3>Company</h3>
                                <p>{`name: ${company.name}`}</p>
                                <p>{`slogan: ${company.slogan}`}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }

    render() {
        return (
            <div className="container">
                <Link to='/authors'>{`< All authors`}</Link>
                <h3>SINGLE AUTHOR</h3>
                {this.authorProfile()}
                {this.authorAddress()}
                {this.authorCompany()}
            </div>
        )
    }
}

export default SingleAuthorPage


// https://developers.google.com/maps/documentation/static-maps/intro#ImplicitPositioning