import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAllPost, selectPost } from '../public/src/features/postSlice';
import Post from './Post';


const Posts = () => {
  const FACEBOOK_CLONE_ENDPOINT = "http://localhost:8080/api/v1/post";

  const dispatch = useDispatch();
   const posts = useSelector(selectPost);

   useEffect(()=>{
    const fetchDta =() =>{
      const response = axios.get(FACEBOOK_CLONE_ENDPOINT)
      .then((response) => {
        dispatch(addAllPost(response.data));
      });
    };
    fetchDta();
   },[]);

  return (
    <div>
      {posts.map((post) =>{
        <Post post={post} key={post.id} />
      })}
      
    </div>
        
    
  );
}

export default Posts;