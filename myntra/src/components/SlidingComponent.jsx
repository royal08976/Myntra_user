import React, { useEffect,useState } from 'react'

const SlidingComponent = (props) => {
  const[loaded,setLoaded]=useState(false)
  console.log("props.img is" , props.img)
    
useEffect(()=>{
  setLoaded(true) 
  // const timer=setTimeout(()=>{setLoaded(true)},50)
  // return ()=>{clearTimeout(timer)}

},[props.img])

  return (
    <div className='w-full flex'>
        <div className='w-[70%]'>
            <img src={props.img?.img1||props.img?.img2||props.img?.img3||props.img?.img4} alt="" 
           className={`w-full transition-all duration-1000 transform 
            ${loaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}/>
        </div>
        <div className='w-[30%] '>
            <div className='pt-20 pl-20 text-5xl font-serif opacity-80'>{props.productName}</div>
            <div className='pt-10 pl-20 text-4xl font-serif opacity-50'>Min.{props.discount}% Off</div>
            <hr className='w-[70%] ml-20  mt-5 opacity-10'/>
            <div className='pl-20 opacity-25 pt-5 text-sm'>Explore+</div>
        </div>
    </div>
  )
}

export default SlidingComponent