import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios'

export default class NewPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputTitle: '',
            inputBody: ''
        }
        this.onSubmit=this.onSubmit.bind(this)
        this.cancelForm=this.cancelForm.bind(this)
        this.getTitle=this.getTitle.bind(this)
        this.getBody=this.getBody.bind(this)
    }

    getTitle(e){
        this.setState({inputTitle: e.target.value})

    }
    
    getBody(e){
        this.setState({inputBody: e.target.value})
    }
    
    onSubmit(){  // TODO: move to services
        axios({
            method: 'post',
            url: 'https://jsonplaceholder.typicode.com/posts',
            data: {
                'title': this.state.inputTitle,
                'body': this.state.inputBody
            },
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => {
            if (response.status < 400) {
                this.props.history.push('/')
            }
        })
    }
    
    cancelForm(){
        this.props.history.push('/')
    }
    
    render() {
        return (
            <React.Fragment>
                <br />
                <h3 className="text-center">NEW POST</h3>
                <br />
                <div className="container">
                    <div className="row">
                        <div id="contact-form" className="contact-form col-md-10 offset-md-1">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group"> 
                                        <label className="row">Title
                                        <input type="text" onBlur={this.getTitle} className="form-control col-md-12" name="title" autoComplete="off" id="Name" placeholder="Post title" />
                                        </label>                                   
                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label className="row">Content
                                        <textarea onBlur={this.getBody} className="form-control textarea" rows="7" name="body" id="Message" placeholder="Multi-line-textarea"></textarea>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 offset-md-6 row" onClick={this.cancelForm}>
                                    <button type="button" className="btn main-btn pull-right col-md-10 offset-md-2">Cancel</button>
                                </div>
                                <div className="col-md-3 row" onClick={this.onSubmit}>
                                    <button type="submit"  className="btn main-btn pull-right col-md-10 offset-md-2">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}