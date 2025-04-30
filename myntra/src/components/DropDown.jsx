import React from 'react'
import { FaChevronDown } from "react-icons/fa";


const DropDown = (props) => {
  return (
    <>
    <div className='text-xs opacity-90 h-6 pt-1 w-auto hover:bg-gray-200 pl-2 pr-2  rounded-full  gap-2 flex'>
      
      <div>{props.text}</div>
      <div className='pt-1'><FaChevronDown  size={10} color='gray'/>
      </div>
      
      </div>
    </>
  )
}

export default DropDown