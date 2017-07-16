import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'


const CommentApp = () =>(
    <div className="wrapper">
        <CommentInput />
        <CommentList />
    </div>
)

export default CommentApp