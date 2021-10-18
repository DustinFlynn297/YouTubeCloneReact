import React, { Component } from 'react';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment_body: '',
            videoid: '',
            likes: 0,
            dislikes: 0, 
            
        }
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            videoid: this.props.video.id.videoId
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.postComment(this.state)
    }
    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
            <input type="text" name="comment_body" onChange={this.handleChange} value={this.state.comment_body} placeholder="Add a public comment..."/>
            <button type="submit">Comment</button>
            <p></p>
            </form>
         );
    }
}
 
export default Comment;
