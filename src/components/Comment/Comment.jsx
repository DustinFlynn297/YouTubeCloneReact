import React, { Component } from 'react';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: {
                comment_body: '',
                videoid: '',
                like: 0,
                dislike: 0,
            }
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.postComment()
    }
    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Add a public comment..."/>
            </form>
         );
    }
}
 
export default Comment;
