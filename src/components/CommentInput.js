import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentInput extends Component {
    static PropTypes ={
        onSubmit:PropTypes.func
    }
    constructor(props) {
        super(props)
        this.state = {
            username: props.username,
            content: ''
        }
    }



    componentDidMount() {
        this.textarea.focus();
    }
    handleUsernameChange(e) {
        this.setState({
            username: e.target.value
        })
    }
    handleContentChange(e) {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit() {
        if (this.props.onSubmit) {
            const { username, content } = this.state;
            this.props.onSubmit({ 
                username:username, 
                content:content,
            createdTime:+new Date() });
        }
        this.setState({
            content: ""
        })
    }
  
    handleUsernameBlur(event){
        if(this.props.onUserNameInputBlur){
            this.props.onUserNameInputBlur(event.target.value)
        }
    }
    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input
                            onBlur={this.handleUsernameBlur.bind(this)}
                            onChange={this.handleUsernameChange.bind(this)}
                            value={this.state.username} />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea
                            onChange={this.handleContentChange.bind(this)}
                            value={this.state.content}
                            ref={textarea => this.textarea = textarea}
                        />
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit.bind(this)}>
                        发布
          </button>
                </div>
            </div>
        )
    }
}

export default CommentInput;
