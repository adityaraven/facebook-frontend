import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useRef, useState } from 'react';
import {IoMdPhotos} from "react-icons/io";
import {BsTag, BsEmojiLaughing} from "react-icons/bs";
import {RiDeleteBin6Line} from "react-icons/ri";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addPost } from '../public/src/features/postSlice';

const CreatePost = () => {

    const FACEBOOK_CLONE_ENDPOINT= "http://localhost:8080/api/v1/post";

    const {data:session} = useSession();

    const inputRef = useRef(null);
    const inputFileRef = useRef(null);

    const dispatch = useDispatch();

    const [imageFile , setImageFile] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!inputRef.current.value)
        return ;
        const formData = new FormData();

        formData.append("file" , imageFile);
        formData.append("post" , inputRef.current.value);
        formData.append("name", session?.user.name);
        formData.append("email", session?.user.email);
        formData.append("profilePic", session?.user.image);

        axios
        .post(FACEBOOK_CLONE_ENDPOINT , formData , {
            headers: {accept : "applicaion/json"},
        })
        .then((res) => {    //once response received
            inputRef.current.value =""; 
            dispatch(addPost(res.data)); //dispatching the data to the state we have defined
            removeImage();   //clear image
        })
        .catch((error) => {
            console.log(error);
        })
    }

    

     const handleInputFile = () => {
         inputFileRef.current.click();
     }

     const addImageFile = (e) => {
         const reader = new FileReader();
         if(e.target.files[0]){
             reader.readAsDataURL(e.target.files[0]);
             reader.onload = (e) =>{
                //  if(imageFile)
                //  setImageFile(...imageFile , e.target.result);

                //  else
                 setImageFile(e.target.result);
             }
         }
     }

     const removeImage = () =>{
         setImageFile(null);
     }

  return (
    <div className='bg-white rounded-md shadow-md text-gray-500 p-2 '>
        <div className='flex p-4 space-x-2 items-center'>
        <Image src={session?.user.image} height={40} width={40} className="rounded-full cursor-pointer" / >
            <form className='flex flex-1'>
                <input className='rounded-full h-12 flex-grow focus:outline-none font-medium bg-gray-100 px-4' type="text" ref={inputRef} placeholder={`What's on your mind, ${session?.user.name}?`} />
                <button hidden onClick={handleSubmit}></button>
            </form>
            </div>
            {imageFile &&(
                <div onClick={removeImage} className='flex items-center px-4 py-2 space-x-4 filter hover:brightness-75 transition duration-150 cursor-pointer'>
                    <img src ={imageFile} className='h-10 object-contain' />
                    <RiDeleteBin6Line className='h-8 hover:text-red-600' />
                    </div>
            )}
        <div className='flex justify-evenly py-2 '>
        <div onClick={handleInputFile} className='flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer'>
            <IoMdPhotos size={20} className="text-green-500"/>
            <p className='font-semibold text-gray-500'>Photo/video</p>
            <input type="file" onChange={addImageFile} ref={inputFileRef} hidden accept="image/*" />
        </div>
        <div className='flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer'>
            <BsTag size={20} className="text-blue-500"/>
            <p className='font-semibold text-gray-500'>Tag friends</p>
        </div>
        <div className='flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer'>
            <BsEmojiLaughing size={20} className="text-yellow-500"/>
            <p className='font-semibold text-gray-500'>Feeling/Acivity</p>
        </div>
    </div>
    </div>
  );
}

export default CreatePost;