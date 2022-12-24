
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPost } from './postSlice'

export default function Post() {
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.posts.postList)

    useEffect(()=>{
        dispatch(fetchPost())
    },[])
   
  return (
    <>
      <h1>Post Page: </h1> 
      {posts.map(post => <div key={post.id}>{post.title}</div>)}
    </>
  )
}
