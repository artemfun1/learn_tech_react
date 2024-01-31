import { CREATE_POST, FETCH_POSTS, HIDE_LOADER, REQUEST_POST, SHOW_LOADER } from './types'


export function createPost(post){
  return {
    type: CREATE_POST,
    payload:post
  }
}



export function showLoader(){
  return {type:SHOW_LOADER}
  
}
export function hideLoader(){
  return {type:HIDE_LOADER}
  
}


export function fetchPosts(){
  
  return{
    type: REQUEST_POST
  }



  return async dispatch =>{

    dispatch(showLoader())

    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=2')
    const json = await response.json()

    dispatch(hideLoader())

    dispatch({type:FETCH_POSTS,payload:json})

  }
}