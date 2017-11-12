export const ADD_TODO="ADD_TODO";
export const DELETE_TODO="DELETE_TODO";
export const EIDT_TODO="EIDT_TODO";
export const COMPLETE_TODO="COMPLETE_TODO";
export const COMPLETE_ALL="COMPLETE_ALL";
export const CLEAR_COMPLETE="CLEAR_COMPLETE";

export const addTodo=(text)=>({type:ADD_TODO,text})
export const deleteTodo=(id)=>({type:DELETE_TODO,id})
export const eidtTodo=(id,text)=>({type:EIDT_TODO,id,text});
export const completeTodo=(id)=>({type:COMPLETE_TODO,id});
export const completeAll=()=>({type:COMPLETE_ALL})
export const clearComplete=()=>({type:CLEAR_COMPLETE})