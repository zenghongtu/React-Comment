export const INIT_COMMENTS = 'INIT_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export const initComments = (comments ) =>{
    return {type:INIT_COMMENTS,comments}
}

export const addComment = (comment) =>{
    return {type:ADD_COMMENT ,comment}
}

export const deleteComment = (commentIndex) =>{
    return {type:DELETE_COMMENT,commentIndex}
}