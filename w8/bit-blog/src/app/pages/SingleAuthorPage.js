import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import data from '../../services/DataService'
import {GOOGLE_MAPS_API_KEY, STATIC_MAP} from '../../shared/constants'
import Loader from '../loader/Loader'

class SingleAuthorPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authorId: this.props.match.params.id,
            authorData: {}
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
                        {/* <iframe src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45283.58581665922!2d${address.geo.lat}!3d${address.geo.long}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a4ede0c962ded%3A0x9d8770a450583eec!2z0J3QsNGG0LjQvtC90LDQu9C90LAg0LLQvtC30LDRh9C60LAg0LDQutCw0LTQtdC80LjRmNCw!5e0!3m2!1ssr!2srs!4v1522072731091`} width="200" height="200"  allowFullScreen></iframe> */}
                        <img src = {`${STATIC_MAP}center=${address.geo.lat},${address.geo.long}&zoom=2&size=128x128&markers=color:red%7C${address.geo.lat},${address.geo.long}&key=${GOOGLE_MAPS_API_KEY}`} alt="map"/>
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
        if (JSON.stringify(this.state.authorData) === JSON.stringify({})) {
            return <Loader/>
        }
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