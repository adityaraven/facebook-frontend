import Image from 'next/image'
import React from 'react'
import {BiSearchAlt, BiHomeSmile} from "react-icons/bi";
import {RiVideoLine} from "react-icons/ri";
import {AiTwotoneShop, AiOutlineMessage, AiOutlineBell} from "react-icons/ai";
import {SiFacebookgaming} from "react-icons/si";
import {BsGridFill} from "react-icons/bs";
import {IoIosArrowDropdown} from "react-icons/io";
import { signOut, useSession } from 'next-auth/react';


const Header = () => {
    const {data: session} = useSession();
  return (
    <div className='bg-white flex items-center p-2 shadow-md top-0 sticky z-50 h-16'>
        {/* left */}
        <div className='flex min-w-fit'>
            <Image src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" height={40} width={40} / >
                <div className='flex items-center space-x-2 px-2 ml-2 rounded-full bg-gray-100 text-gray-500'>
                <BiSearchAlt size={20}/>
                    <input className='hidden lg:inline-flex bg-transparent focus:outline-none' type="text" placeholder='Search'/>
                </div>
        </div>

        {/* center */}
        <div className='flex flex-grow justify-center mx-2'>
            <div className='flex items-center'>
                <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
                    <BiHomeSmile className='mx-auto' size={26}/>
                </div>
                <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
                    <RiVideoLine className='mx-auto' size={26}/>
                </div>
                <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
                    <AiTwotoneShop className='mx-auto' size={26}/>
                </div>
                <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
                    <SiFacebookgaming className='mx-auto' size={20}/>
                </div>
            </div>
        </div>
        {/* right */}
        <div className='flex items-center justify-end min-w-fit space-x-2'>
        <Image src={session?.user.image} height={40} width={40} className="rounded-full cursor-pointer"  / >
            <p  className='hidden xl:inline-flex font-semibold text-sm whitespace-nowrap p-3 max-w-xs  cursor-pointer '>{session?.user.name.split(" ")[0]}</p>
            <BsGridFill className='hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 p-2 rounded-full  cursor-pointer hover:bg-gray-300'/>
            <AiOutlineMessage className='hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 p-2 rounded-full  cursor-pointer hover:bg-gray-300'/>
            <AiOutlineBell className='hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 p-2 rounded-full  cursor-pointer hover:bg-gray-300'/>
            <IoIosArrowDropdown onClick={signOut} className='hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 p-2 rounded-full  cursor-pointer hover:bg-gray-300' title='Sign Out'/>

        </div>

    </div>
  )
}

export default Header