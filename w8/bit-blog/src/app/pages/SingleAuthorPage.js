import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SingleAuthorPage extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    authorProfile() {
        return (
            <div className="card">
                <div className="card-body">
                    <div class="row">
                        <div class="col-3">
                            <img className="card-img-left" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNLzZszQbQf6jkknIGI8A3rj-0BoEngyi9156njfrCjPED9_b2vw" alt="Card cap" />
                        </div>
                        <div class="col-9">
                            <div className="card-text">
                                <h3>Name Surname</h3>
                                <p>username:</p>
                                <p>email:</p>
                                <p>phone:</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }

    authorAddress() {
        return (
            <div className="card">
                <div className="card-body">
                    <div class="row">
                        <div class="col-9">
                            <div className="card-text">
                                <h3>Address</h3>
                                <p>street:</p>
                                <p>city:</p>
                                <p>zipcode:</p>
                            </div>
                        </div>
                        <div class="col-3">
                            <img className="card-img-right" src="http://www.dailyfreepsd.com/wp-content/uploads/2013/09/flat-map-mockup.png" alt="Card cap" height="200px"/>
                        </div>
                    </div>
                </div>
            </div >
        )
    }

    authorCompany() {
        return (
            <div className="card">
                <div className="card-body">
                    <div class="row">
                        <div class="col-12">
                            <div className="card-text">
                                <h3>Company</h3>
                                <p>name:</p>
                                <p>slogan:</p>
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