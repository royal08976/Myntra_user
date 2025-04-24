import React, { useEffect, useState } from 'react'
import SlidingComponent from './SlidingComponent'
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"


const slides=[
  {productName:"HANGBAGS", discount:"60",img:{img1}},
  {productName:"JACKET", discount:"70",img:{img2}},
  {productName:"SHOES", discount:"50",img:{img3}},
  {productName:"SHIRTS", discount:"40",img:{img4}}

]

const Slidebar = () => {
  // const [component, setComponent]=useState({productName:"HANGBAGS", discount:"60",img:{img1}})
  const [currentIndex,setCurrentIndex]=useState(0)


  useEffect(()=>{
    const interval=setInterval(()=>{
      setCurrentIndex(prev=>prev===3?0:prev+1)
    },5000)

    return ()=>{
      clearInterval(interval)
    }
  },[])

  console.log("my current index is " , currentIndex)

  const currentSlide=slides[currentIndex]
  console.log("current slide is ",currentSlide)
  const handleClick=(index)=>{
    // console.log("props is" ,props)
    setCurrentIndex(index)


  }
  // console.log("product details are:", component?.img)
  return (
      <div className="">

    
  
      
      <SlidingComponent productName={currentSlide?.productName} discount={currentSlide?.discount} img={currentSlide?.img} ></SlidingComponent>
      
      
     

    <div className='flex mt-10 ml-150 gap-6'>
      {
slides.map((slide,index)=>(

  <div 
  key={index}

  className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 transform ${index===currentIndex?'bg-gray-600':'bg-gray-200'} `} 
  onClick={()=>handleClick(index)}></div>
))
      }
   
    </div>
      </div>
  )
}

export default Slidebar