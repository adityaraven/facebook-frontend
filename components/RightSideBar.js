import React from 'react';
import {RiVideoAddFill} from "react-icons/ri";
import {BiSearchAlt} from "react-icons/bi";
import {FiMoreHorizontal} from "react-icons/fi";
import Contacts from './Contacts';

const RightSideBar = () => {
  return (
    <div className='hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]'>
        <div className='flex items-center text-gray-500'>
            <p className='flex text-lg font-semibold flex-grow'>Contacts</p>
            <div className='flex space-x-1 px-2'>
                <div className='rounded-full p-2 hover:bg-gray-200'>
                <RiVideoAddFill />
                </div>
                <div className='rounded-full p-2 hover:bg-gray-200'>
                <BiSearchAlt />
                </div>
                <div className='rounded-full p-2 hover:bg-gray-200'>
                <FiMoreHorizontal />
                </div>
                
            </div>
            
        </div>
        <Contacts src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" name="Anny Cruize" status="Online"/>
        <Contacts src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" name="Ashish John" status="Offline" />
        <Contacts src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" name="Jessica Jones" status="Online"/>
        <Contacts src="https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" name="Florina Issac" status="Online"/>
        <Contacts src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" name="Tony Stark" status="Offline"/>
        <Contacts src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" name="Sonia Godson" status="Offline"/>
        <Contacts src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" name="Narendra Modi" status="Online"/>
        <Contacts src="https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" name="Scarlett Johnson" status="Offline"/>
        <Contacts src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" name="Rahul GAndhi" status="Offline"/>
        
    </div>
  )
}

export default RightSideBar