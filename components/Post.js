import Image from 'next/image'
import React from 'react';
import {BiLike, BiCommentDetail, BiShare} from "react-icons/bi";

const Post = ({ post }) => {
  return (
    <div className='flex flex-col' key={post.id}>
        <div className='bg-white mt-6 rounded-md p-4'>
            <div className='flex items-center space-x-2'>
                <img src={post.profilePic} ></img>
                <div>
                    <p className='text-medium'>{post.name}</p>
                    {/* <p>{new Date().getTime()}</p> */}
                    <p>{post.timeStamp}</p>
                </div>
            </div>
            <p className='py-4'> {post.post}</p>
        </div>
        {/* if post */}
        {post.image != null && (
        <div className='relative h-60 md:h-96 bg-white'>
            <Image src={post.image} objectFit='cover' layout="fill" />
        </div>)}
        <div className='flex items-center justify-center bg-white p-2'>
            <div className='flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer'>
                <BiLike className='h-4'/><p className='text-xs sm:text-base'>Like</p>
                
            </div>
            
            <div className='flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer'>
            <BiCommentDetail className='h-4'/><p className='text-xs sm:text-base'>Comment</p>
                
            </div>
            
            <div className='flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer'>
            <BiShare className='h-4'/><p className='text-xs sm:text-base'>Share</p>
                
            </div>
        </div>
    </div>
    
    
  )
}

export default Post