const INIT_COMMENT='INIT_COMMENT';
const ADD_COMMENT='ADD_COMMENT';
const DELETE_COMMENT='DELETE_COMMENT';

export default function(state,action){
 if(!state){
     state={comments:[]}
 }
//  console.log(action.comments);
 switch(action.type){
     case INIT_COMMENT:
     return {comments:action.comments}
    
     case ADD_COMMENT:
     return {
        comments: [...state.comments,action.comment]
     }
     case DELETE_COMMENT:
     return {
         comments:[
             ...state.comments.slice(0,action.commentIndex),
             ...state.comments.slice(action.commentIndex+1)
         ]
     }
     default:
     return state;
 }

}

//// action creators   不需要直接手动构建对象，调用dispatch 的时候只需要传入数据就可以了
//比如 ： dispatch(initComments(comments))
export const initComment=(comments)=>{
    return {type:INIT_COMMENT,comments}
}

export const addComment=(comment)=>{
 return {type:ADD_COMMENT,comment}
}
export const deleteComment=(commentIndex)=>{
    return {type:DELETE_COMMENT,commentIndex}
}