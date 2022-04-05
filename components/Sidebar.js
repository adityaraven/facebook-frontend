import Image from 'next/image'
import React from 'react'
import {ImUsers} from "react-icons/im"
import Sidebar_content from './Sidebar_content';
import {MdGroups} from "react-icons/md";
import {RiVideoLine} from "react-icons/ri";
import {BsStopwatch } from "react-icons/bs";
import {AiTwotoneShop} from "react-icons/ai";
import {IoIosArrowDropdown} from "react-icons/io";
import {FcBookmark} from "react-icons/fc";
import { useSession } from 'next-auth/react';

const Sidebar = () => {
    const {data:session} = useSession();
  return (
    <div className='hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[302px]'>
        <div className='flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer'>
        <Image className="rounded-full cursor-pointer" src={session?.user.image} height={40} width={40} / >
            <p className='hidden sm:inline-flex font-medium'>{session?.user.name}</p>
        </div>
        <Sidebar_content Icon={ImUsers} value="Friends"/>
        <Sidebar_content Icon={MdGroups} value="Groups" />
        <Sidebar_content Icon={AiTwotoneShop} value="Marketplace" />
        <Sidebar_content Icon={RiVideoLine} value="Watch" />
        <Sidebar_content Icon={BsStopwatch} value="Memories" />
        <Sidebar_content Icon={FcBookmark} value="Saved" />
        <Sidebar_content Icon={IoIosArrowDropdown} value="See more" />
        
    </div>
  )
}

export default Sidebar