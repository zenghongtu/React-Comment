import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
    constructor () {
        super();
        this.state={
            comments:[]
        }
    }
    _loadComments(){
        let comments=localStorage.getItem('comments');
        if(comments){
           comments = JSON.parse(comments);
           this.setState({
              comments:comments
           }) 
        }
    }
    componentWillMount() {
        this._loadComments();
    }

   _saveComments(comments){
        localStorage.setItem('comments',JSON.stringify(comments))
   }
    handleSubmitComment(comment){
        // this.state.comments.push(comment);
        if(!comment) return ;
        if(!comment.username) return alert("请输入名称");
        if(!comment.content) return alert("请输入内容");
        let temp = this.state.comments;
        temp.push(comment)
        this.setState({
            comments:temp
        })
        this._saveComments(temp);
    }
    handleDeleteComment(index){
        const comments = this.state.comments;
        comments.splice(index,1);
        this.setState({comments});
        this._saveComments(comments);
    }
    render() {
        return (
            <div className="wrapper">
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
                <CommentList 
                onDeleteComment={this.handleDeleteComment.bind(this)}
                comments={this.state.comments}/>
            </div>
        )
    }
}

export default CommentApp