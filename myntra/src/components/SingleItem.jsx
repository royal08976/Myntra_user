import React, { useContext } from 'react'
import pdImage from "../assets/pdImage.webp"
import { MyContext } from '../App'

const SingleItem = (props) => {
  const context=useContext(MyContext)
  console.log("props.hoverid is",props.hoverId)
  console.log("context.isItem  is",context.isItem)
  console.log("the comparision is ",props.hoverId==context.isItem)

  return (
    <>
    <div className='h-auto w-50 shadow-lg'>
        <img src={pdImage} className='h-50 w-50' alt="" />
    <div className='pl-5'>
      
        <div className='text-md pt-2 font-bold text-gray-700'>{props.brand}</div>
        {
          context.isTrue===true && props.hoverId===context.isItem ?
        <div className=' pt-2 text-xs text-gray-400'>Size:M</div>


        :<div className=' pt-2 text-xs text-gray-400'>{props.description}</div>

        }
        <div className='flex gap-2 pt-2'>

        <div className='text-xs font-bold text-gray-700'>{props.price}</div>
        <div className='text-xs line-through text-gray-500'> {props.oldprice}</div>
        <div className='text-xs text-[#ff9764]'>({props.discount})</div>
        </div>
        <div className='text-xs pt-2 pb-2 font-bold text-[#ff5730]'>{props.availability}</div>
        
    </div>
    </div>

    </>
  )
}

export default SingleItem