import React, { Component } from 'react'

export default class NewPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // still have to figure out what form should do on save // todo
        }
    }

    render() {
        return (
            <React.Fragment>
                <br />
                <h3 className="text-center">NEW POST</h3>
                <br />
                <div className="container">
                    <div className="row">
                        <form role="form" id="contact-form" className="contact-form col-md-10 offset-md-1">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group"> 
                                        <label className="row">Title
                                        <input type="text" className="form-control col-md-12" name="Name" autocomplete="off" id="Name" placeholder="Post title" />
                                        </label>                                   
                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label className="row">Content
                                        <textarea className="form-control textarea" rows="7" name="Message" id="Message" placeholder="Multi-line-textarea"></textarea>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 offset-md-6 row">
                                    <button type="submit" className="btn main-btn pull-right col-md-10 offset-md-2">Cancel</button>
                                </div>
                                <div className="col-md-3 row">
                                    <button type="submit" className="btn main-btn pull-right col-md-10 offset-md-2">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}