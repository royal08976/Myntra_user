import React,{useState,useContext} from 'react'
import logo from "../assets/logo.png"
import { CiSearch } from "react-icons/ci";
import { SlUser } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link, useLocation, useNavigate } from 'react-router';
import { MyContext } from '../App';
import studio from "../assets/studio.png"
import { FaAngleRight } from "react-icons/fa6";

import brand from "../assets/brand.png"





const Header = () => {
  const [showProfile,setShowProfile]=useState(false)
  const[showMen,setShowMen]=useState(false)
  const[showWomen,setShowWomen]=useState(false)
  const[ShowKids,setShowKids]=useState(false)
  const[ShowHomes,setShowHomes]=useState(false)
  const[ShowBeauty,setShowBeauty]=useState(false)
  const[ShowGen,setShowGen]=useState(false)
  const[ShowStudio,setShowStudio]=useState(false)

  const navigate=useNavigate()
  const context=useContext(MyContext)
  // console.log("context.isotpverified", context.isOtpverified)
  const location=useLocation()
  // console.log("is in login page",location.pathname==="/login")
  // console.log("location.state after verify-otp is ",location.state?.email)
  const email=localStorage.getItem("email")
  console.log("email is ",email)
  const handleProfile=()=>{
    // console.log("hello this is handle profile")
    setShowProfile(true)
  }

  const handleProfileLeave=()=>{
    setShowProfile(false)
  }
  const handleClick=()=>{
    context.setIsLogin(true)
    localStorage.setItem('isLogin','true')
  }

  const handleLogout=()=>{
    localStorage.setItem("isotpverified","false")
    navigate("/")
    
  }
  const handleMen=()=>{
    setShowMen(true)

  }
  const handleCloseMen=()=>{
    setShowMen(false)

  }
  const handleWomen=()=>{
    setShowWomen(true)

  }
  const handleCloseWomen=()=>{
    setShowWomen(false)

  }
  const handleKids=()=>{
    setShowKids(true)

  }
  const handleCloseKids=()=>{
    setShowKids(false)

  }
  const handleHomes=()=>{
    setShowHomes(true)

  }
  const handleCloseHomes=()=>{
    setShowHomes(false)

  }
  const handleBeauty=()=>{
    setShowBeauty(true)

  }
  const handleCloseBeauty=()=>{
    setShowBeauty(false)

  }
  const handleGen=()=>{
    setShowGen(true)

  }
  const handleCloseGen=()=>{
    setShowGen(false)

  }
  const handleStudio=()=>{
    setShowStudio(true)

  }
  const handleCloseStudio=()=>{
    setShowStudio(false)

  }
  return (
    <div className='flex '>
      <div className='w-[50%] flex '>
      <div>
            <img src={logo} alt="" className='h-14 items-center mt-3'/>
        </div>
        <div className='flex  items-center ml-4 gap-3 '>

<div className='relative h-20 w-17 hover:border-b-5  text-center  hover:border-[#ee6780]'
onMouseEnter={handleMen} 
onMouseLeave={handleCloseMen}
> 
<div className='text-xs font-bold absolute top-8 left-5 '>MEN</div>

{
  showMen===true && 
  <div className='h-110 w-270 bg-white  absolute top-20 shadow-lg  flex z-100'>
    <div className='h-100 w-54 pt-4 pl-5 text-left '>

      <ul className='list-none '>
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780]'>Top wears</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>T-shirts</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Casual shirts</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Formal</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sweetshirts</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sweater</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Jackets</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Blazor and coats</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Suits</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Rain jackets</li>

        <hr className='opacity-30 mr-5 mt-5' />
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>Indians and festive wears</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Kurtas and kurti set</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Nehru jackets</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sherwani</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Dhotis</li>
       
      </ul>

    </div>
    <div className='h-110 w-54  bg-[#fbfbfb] pt-4 pl-5 text-left'>
    <ul className='list-none '>
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780]'>Buttomwears</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Jeans</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Casual Trousers</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Formal Trousers</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Shorts</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Track pants and Jogger</li>
        

        <hr className='opacity-30 mr-5 mt-5' />
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>Innerwear and sleepwear</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Briefs and Trunks</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Boxers</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Vests</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sleepwear and Loungwear</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Thermal</li>

        <hr className='opacity-30 mr-5 mt-5' />

        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>Plus size</li>


       
      </ul>



    </div>
    <div className='h-110 w-54 pt-4 pl-5 text-left '> 
    <ul className='list-none '>
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780]'>Footwears</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Casual shoes</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Formal shoes</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sports shoes</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sneakers</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sandals and floaters</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Flipflops</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Socks</li>

        <hr className='opacity-30 mr-5 mt-5' />
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>IPersonal care and grooming</li>
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>Sunglasses and Frames</li>
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>watches</li>
       
      </ul>
    </div>
    <div className='h-110 w-54 pt-4 pl-5 text-left  bg-[#fbfbfb]'>
    <ul className='list-none '>
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780]'>Sports and Active wears</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sport shoes</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sport sandals</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Active T-shirts</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Track suits</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Track pant and sorts</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Jackets and Suits</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sport Accessories</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Swimwear</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Socks</li>

        <hr className='opacity-30 mr-5 mt-5' />
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>Gadgets</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Smart wearable</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Fitness gadgets</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Headphones</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Speakers</li>

      </ul>


    </div>
    <div className='h-110 w-54 pt-4 pl-5 text-left '>
    <ul className='list-none '>
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780]'>Fashion Accessories</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Wallets</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Belts</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Perfumes and Body Mists</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Trimmers</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Deodorants</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Ties, Cufflinks and pocket squares</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Accessory gift sets</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Caps and Hats</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Mufflers,Scarves and Gloves</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Phonecases</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Rings and Wristwear</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Helmets</li>

        <hr className='opacity-30 mr-5 mt-5' />
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>Bags and Baclpacks</li>
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>Lougagges and Trolleys</li>
       
      </ul>

    </div>

  </div>


}
</div>
<div className='relative h-20 w-17 hover:border-b-5  text-center  hover:border-[#fb56c1]'
onMouseEnter={handleWomen} 
onMouseLeave={handleCloseWomen}
> 
<div className='text-xs font-bold absolute top-8 left-2 '>WOMEN</div>

{
  showWomen===true && 
  <div className='h-110 w-270 bg-white  absolute top-20 -left-20 shadow-lg  flex z-100'>
    <div className='h-100 w-54 pt-4 pl-5 text-left '>

      <ul className='list-none '>
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780]'>Top wears</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>T-shirts</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Casual shirts</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Formal</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sweetshirts</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sweater</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Jackets</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Blazor and coats</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Suits</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Rain jackets</li>

        <hr className='opacity-30 mr-5 mt-5' />
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>Indians and festive wears</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Kurtas and kurti set</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Nehru jackets</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sherwani</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Dhotis</li>
       
      </ul>

    </div>
    <div className='h-110 w-54  bg-[#fbfbfb] pt-4 pl-5 text-left'>
    <ul className='list-none '>
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780]'>Buttomwears</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Jeans</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Casual Trousers</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Formal Trousers</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Shorts</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Track pants and Jogger</li>
        

        <hr className='opacity-30 mr-5 mt-5' />
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>Innerwear and sleepwear</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Briefs and Trunks</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Boxers</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Vests</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sleepwear and Loungwear</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Thermal</li>

        <hr className='opacity-30 mr-5 mt-5' />

        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>Plus size</li>


       
      </ul>



    </div>
    <div className='h-110 w-54 pt-4 pl-5 text-left '> 
    <ul className='list-none '>
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780]'>Footwears</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Casual shoes</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Formal shoes</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sports shoes</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sneakers</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sandals and floaters</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Flipflops</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Socks</li>

        <hr className='opacity-30 mr-5 mt-5' />
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>IPersonal care and grooming</li>
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>Sunglasses and Frames</li>
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>watches</li>
       
      </ul>
    </div>
    <div className='h-110 w-54 pt-4 pl-5 text-left  bg-[#fbfbfb]'>
    <ul className='list-none '>
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780]'>Sports and Active wears</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sport shoes</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sport sandals</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Active T-shirts</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Track suits</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Track pant and sorts</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Jackets and Suits</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sport Accessories</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Swimwear</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Socks</li>

        <hr className='opacity-30 mr-5 mt-5' />
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>Gadgets</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Smart wearable</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Fitness gadgets</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Headphones</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Speakers</li>

      </ul>


    </div>
    <div className='h-110 w-54 pt-4 pl-5 text-left '>
    <ul className='list-none '>
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780]'>Fashion Accessories</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Wallets</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Belts</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Perfumes and Body Mists</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Trimmers</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Deodorants</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Ties, Cufflinks and pocket squares</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Accessory gift sets</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Caps and Hats</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Mufflers,Scarves and Gloves</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Phonecases</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Rings and Wristwear</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Helmets</li>

        <hr className='opacity-30 mr-5 mt-5' />
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>Bags and Baclpacks</li>
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>Lougagges and Trolleys</li>
       
      </ul>

    </div>

  </div>


}
</div>

<div className='relative h-20 w-17 hover:border-b-5  text-center  hover:border-[#f26a10]'
onMouseEnter={handleKids} 
onMouseLeave={handleCloseKids}
> 
<div className='text-xs font-bold absolute top-8 left-4 '>KIDS</div>

{
  ShowKids===true && 
  <div className='h-110 w-270 bg-white  absolute top-20 -left-47 shadow-lg  flex z-100'>
    <div className='h-100 w-54 pt-4 pl-5 text-left '>

      <ul className='list-none '>
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780]'>Top wears</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>T-shirts</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Casual shirts</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Formal</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sweetshirts</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sweater</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Jackets</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Blazor and coats</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Suits</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Rain jackets</li>

        <hr className='opacity-30 mr-5 mt-5' />
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>Indians and festive wears</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Kurtas and kurti set</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Nehru jackets</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sherwani</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Dhotis</li>
       
      </ul>

    </div>
    <div className='h-110 w-54  bg-[#fbfbfb] pt-4 pl-5 text-left'>
    <ul className='list-none '>
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780]'>Buttomwears</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Jeans</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Casual Trousers</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Formal Trousers</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Shorts</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Track pants and Jogger</li>
        

        <hr className='opacity-30 mr-5 mt-5' />
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>Innerwear and sleepwear</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Briefs and Trunks</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Boxers</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Vests</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sleepwear and Loungwear</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Thermal</li>

        <hr className='opacity-30 mr-5 mt-5' />

        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>Plus size</li>


       
      </ul>



    </div>
    <div className='h-110 w-54 pt-4 pl-5 text-left '> 
    <ul className='list-none '>
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780]'>Footwears</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Casual shoes</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Formal shoes</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sports shoes</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sneakers</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sandals and floaters</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Flipflops</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Socks</li>

        <hr className='opacity-30 mr-5 mt-5' />
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>IPersonal care and grooming</li>
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>Sunglasses and Frames</li>
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>watches</li>
       
      </ul>
    </div>
    <div className='h-110 w-54 pt-4 pl-5 text-left  bg-[#fbfbfb]'>
    <ul className='list-none '>
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780]'>Sports and Active wears</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sport shoes</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sport sandals</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Active T-shirts</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Track suits</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Track pant and sorts</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Jackets and Suits</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sport Accessories</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Swimwear</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Socks</li>

        <hr className='opacity-30 mr-5 mt-5' />
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>Gadgets</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Smart wearable</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Fitness gadgets</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Headphones</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Speakers</li>

      </ul>


    </div>
    <div className='h-110 w-54 pt-4 pl-5 text-left '>
    <ul className='list-none '>
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780]'>Fashion Accessories</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Wallets</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Belts</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Perfumes and Body Mists</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Trimmers</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Deodorants</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Ties, Cufflinks and pocket squares</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Accessory gift sets</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Caps and Hats</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Mufflers,Scarves and Gloves</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Phonecases</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Rings and Wristwear</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Helmets</li>

        <hr className='opacity-30 mr-5 mt-5' />
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>Bags and Baclpacks</li>
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>Lougagges and Trolleys</li>
       
      </ul>

    </div>

  </div>


}
</div>

<div className='relative h-20 w-17 hover:border-b-5  text-center  hover:border-[#f2c210]'
onMouseEnter={handleHomes} 
onMouseLeave={handleCloseHomes}
> 
<div className='text-xs font-bold absolute top-8 right-4 '>HOMES</div>

{
  ShowHomes===true && 
  <div className='h-110 w-270 bg-white  absolute top-20 -left-59 shadow-lg  flex z-100'>
    <div className='h-100 w-54 pt-4 pl-5 text-left '>

      <ul className='list-none '>
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780]'>Top wears</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>T-shirts</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Casual shirts</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Formal</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sweetshirts</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sweater</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Jackets</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Blazor and coats</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Suits</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Rain jackets</li>

        <hr className='opacity-30 mr-5 mt-5' />
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>Indians and festive wears</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Kurtas and kurti set</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Nehru jackets</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sherwani</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Dhotis</li>
       
      </ul>

    </div>
    <div className='h-110 w-54  bg-[#fbfbfb] pt-4 pl-5 text-left'>
    <ul className='list-none '>
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780]'>Buttomwears</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Jeans</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Casual Trousers</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Formal Trousers</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Shorts</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Track pants and Jogger</li>
        

        <hr className='opacity-30 mr-5 mt-5' />
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>Innerwear and sleepwear</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Briefs and Trunks</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Boxers</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Vests</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sleepwear and Loungwear</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Thermal</li>

        <hr className='opacity-30 mr-5 mt-5' />

        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>Plus size</li>


       
      </ul>



    </div>
    <div className='h-110 w-54 pt-4 pl-5 text-left '> 
    <ul className='list-none '>
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780]'>Footwears</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Casual shoes</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Formal shoes</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sports shoes</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sneakers</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sandals and floaters</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Flipflops</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Socks</li>

        <hr className='opacity-30 mr-5 mt-5' />
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>IPersonal care and grooming</li>
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>Sunglasses and Frames</li>
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>watches</li>
       
      </ul>
    </div>
    <div className='h-110 w-54 pt-4 pl-5 text-left  bg-[#fbfbfb]'>
    <ul className='list-none '>
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780]'>Sports and Active wears</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sport shoes</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sport sandals</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Active T-shirts</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Track suits</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Track pant and sorts</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Jackets and Suits</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sport Accessories</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Swimwear</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Socks</li>

        <hr className='opacity-30 mr-5 mt-5' />
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>Gadgets</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Smart wearable</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Fitness gadgets</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Headphones</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Speakers</li>

      </ul>


    </div>
    <div className='h-110 w-54 pt-4 pl-5 text-left '>
    <ul className='list-none '>
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780]'>Fashion Accessories</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Wallets</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Belts</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Perfumes and Body Mists</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Trimmers</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Deodorants</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Ties, Cufflinks and pocket squares</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Accessory gift sets</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Caps and Hats</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Mufflers,Scarves and Gloves</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Phonecases</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Rings and Wristwear</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Helmets</li>

        <hr className='opacity-30 mr-5 mt-5' />
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>Bags and Baclpacks</li>
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>Lougagges and Trolleys</li>
       
      </ul>

    </div>

  </div>


}
</div>
        {
          (location.pathname!=="/login" &&  location.pathname!=="/verify-otp")&&
<div className='relative h-20 w-17 hover:border-b-5  text-center  hover:border-[#0db7af]'
onMouseEnter={handleBeauty} 
onMouseLeave={handleCloseBeauty}
> 
<div className='text-xs font-bold absolute top-8 right-3 '>BEAUTY</div>

{
  ShowBeauty===true && 
  <div className='h-110 w-270 bg-white  absolute top-20 -left-80 shadow-lg  flex z-100'>
    <div className='h-100 w-54 pt-4 pl-5 text-left '>

      <ul className='list-none '>
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780]'>Top wears</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>T-shirts</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Casual shirts</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Formal</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sweetshirts</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sweater</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Jackets</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Blazor and coats</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Suits</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Rain jackets</li>

        <hr className='opacity-30 mr-5 mt-5' />
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>Indians and festive wears</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Kurtas and kurti set</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Nehru jackets</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sherwani</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Dhotis</li>
       
      </ul>

    </div>
    <div className='h-110 w-54  bg-[#fbfbfb] pt-4 pl-5 text-left'>
    <ul className='list-none '>
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780]'>Buttomwears</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Jeans</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Casual Trousers</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Formal Trousers</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Shorts</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Track pants and Jogger</li>
        

        <hr className='opacity-30 mr-5 mt-5' />
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>Innerwear and sleepwear</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Briefs and Trunks</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Boxers</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Vests</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sleepwear and Loungwear</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Thermal</li>

        <hr className='opacity-30 mr-5 mt-5' />

        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>Plus size</li>


       
      </ul>



    </div>
    <div className='h-110 w-54 pt-4 pl-5 text-left '> 
    <ul className='list-none '>
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780]'>Footwears</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Casual shoes</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Formal shoes</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sports shoes</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sneakers</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sandals and floaters</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Flipflops</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Socks</li>

        <hr className='opacity-30 mr-5 mt-5' />
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>IPersonal care and grooming</li>
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>Sunglasses and Frames</li>
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>watches</li>
       
      </ul>
    </div>
    <div className='h-110 w-54 pt-4 pl-5 text-left  bg-[#fbfbfb]'>
    <ul className='list-none '>
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780]'>Sports and Active wears</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sport shoes</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sport sandals</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Active T-shirts</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Track suits</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Track pant and sorts</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Jackets and Suits</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sport Accessories</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Swimwear</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Socks</li>

        <hr className='opacity-30 mr-5 mt-5' />
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>Gadgets</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Smart wearable</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Fitness gadgets</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Headphones</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Speakers</li>

      </ul>


    </div>
    <div className='h-110 w-54 pt-4 pl-5 text-left '>
    <ul className='list-none '>
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780]'>Fashion Accessories</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Wallets</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Belts</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Perfumes and Body Mists</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Trimmers</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Deodorants</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Ties, Cufflinks and pocket squares</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Accessory gift sets</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Caps and Hats</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Mufflers,Scarves and Gloves</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Phonecases</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Rings and Wristwear</li>
        <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Helmets</li>

        <hr className='opacity-30 mr-5 mt-5' />
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>Bags and Baclpacks</li>
        <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>Lougagges and Trolleys</li>
       
      </ul>

    </div>

  </div>


}
</div>
}
        {
          (location.pathname!=="/login" &&  location.pathname!=="/verify-otp")&&
          <div className='relative h-20 w-17 hover:border-b-5  text-center  hover:border-[#0db7af]'
          onMouseEnter={handleGen} 
          onMouseLeave={handleCloseGen}
          > 
          <div className='text-xs font-bold absolute top-8 right-5 '>GENZ</div>
          
          {
            ShowGen===true && 
            <div className='h-110 w-270 bg-white  absolute top-20 -left-100 shadow-lg  flex z-100'>
              <div className='h-100 w-54 pt-4 pl-5 text-left '>
          
                <ul className='list-none '>
                  <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780]'>Top wears</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>T-shirts</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Casual shirts</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Formal</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sweetshirts</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sweater</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Jackets</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Blazor and coats</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Suits</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Rain jackets</li>
          
                  <hr className='opacity-30 mr-5 mt-5' />
                  <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>Indians and festive wears</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Kurtas and kurti set</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Nehru jackets</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sherwani</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Dhotis</li>
                 
                </ul>
          
              </div>
              <div className='h-110 w-54  bg-[#fbfbfb] pt-4 pl-5 text-left'>
              <ul className='list-none '>
                  <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780]'>Buttomwears</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Jeans</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Casual Trousers</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Formal Trousers</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Shorts</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Track pants and Jogger</li>
                  
          
                  <hr className='opacity-30 mr-5 mt-5' />
                  <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>Innerwear and sleepwear</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Briefs and Trunks</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Boxers</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Vests</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sleepwear and Loungwear</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Thermal</li>
          
                  <hr className='opacity-30 mr-5 mt-5' />
          
                  <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>Plus size</li>
          
          
                 
                </ul>
          
          
          
              </div>
              <div className='h-110 w-54 pt-4 pl-5 text-left '> 
              <ul className='list-none '>
                  <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780]'>Footwears</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Casual shoes</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Formal shoes</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sports shoes</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sneakers</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sandals and floaters</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Flipflops</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Socks</li>
          
                  <hr className='opacity-30 mr-5 mt-5' />
                  <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>IPersonal care and grooming</li>
                  <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>Sunglasses and Frames</li>
                  <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>watches</li>
                 
                </ul>
              </div>
              <div className='h-110 w-54 pt-4 pl-5 text-left  bg-[#fbfbfb]'>
              <ul className='list-none '>
                  <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780]'>Sports and Active wears</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sport shoes</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sport sandals</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Active T-shirts</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Track suits</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Track pant and sorts</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Jackets and Suits</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Sport Accessories</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Swimwear</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Socks</li>
          
                  <hr className='opacity-30 mr-5 mt-5' />
                  <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>Gadgets</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Smart wearable</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Fitness gadgets</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Headphones</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Speakers</li>
          
                </ul>
          
          
              </div>
              <div className='h-110 w-54 pt-4 pl-5 text-left '>
              <ul className='list-none '>
                  <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780]'>Fashion Accessories</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Wallets</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Belts</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Perfumes and Body Mists</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Trimmers</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Deodorants</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Ties, Cufflinks and pocket squares</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Accessory gift sets</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Caps and Hats</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Mufflers,Scarves and Gloves</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Phonecases</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Rings and Wristwear</li>
                  <li className='text-xs mt-2 hover:font-bold  hover:cursor-pointer text-gray-600'>Helmets</li>
          
                  <hr className='opacity-30 mr-5 mt-5' />
                  <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>Bags and Baclpacks</li>
                  <li className='text-xs text-left font-bold hover:cursor-pointer text-[#ee6780] mt-5'>Lougagges and Trolleys</li>
                 
                </ul>
          
              </div>
          
            </div>
          
          
          }
          </div>

        }

        <div 
        onMouseEnter={handleStudio}
        onMouseLeave={handleCloseStudio}
        className='flex gap-1 relative  hover:border-b-5 h-20 w-17 text-center pt-8  hover:border-[#ff3f6c]' >
        <div className='text-xs font-bold absolute left-1'>STUDIO</div>
        <div className='text-[9px] font-bold absolute left-12 top-6 text-[#ff4a74]'>NEW</div>

        {
          ShowStudio===true && 

          <div className='absolute z-100 h-120 w-138 top-20 -left-60 bg-white shadow-lg '>
            <img src={studio} alt="" className='ml-45 mt-5' />
            <p className='text-sm mt-3'>Your daily inspiration for everything fashion</p>
            <img src={brand} alt=""  className='ml-3'/>

            <div className=''>
              <button 
              className='w-50 ml-40  mt-5 flex  gap-5 pt-3 pb-3 font-bold text-sm text-gray-500 cursor-pointer 
               justify-around border-1 border-gray-300 '>EXPLORE STUDIO
               <span className='mt-1 '><FaAngleRight /></span> </button>
            </div>

          </div>
        }
        </div>
        </div>


      </div>
      <div className="w-[50%] flex justify-evenly">
      <div className='w-100  mt-5 relative'>
        <CiSearch  size={20} className='absolute left-3 top-2'/>


          <input type="text" 
          placeholder='search for products,brands and more'
          className='  w-100 h-10 rounded-sm pl-10 text-sm focus:outline-none bg-gray-100' />
        </div>

        {context.isOtpverified===false ?
      <div className='flex  items-center   relative'onMouseEnter={handleProfile} onMouseLeave={handleProfileLeave}>
          
      {
        (location.pathname!=="/login" &&  location.pathname!=="/verify-otp") && 
      <div className='relative h-20 w-17 hover:cursor-pointer hover:border-b-5 border-red-400 '><SlUser className='absolute top-7 left-5' size={20} />
     <span className='text-xs font-bold absolute top-13 left-4'> Profile</span></div>
      }
     
     {
      (showProfile===true && (location.pathname!=="/login" &&  location.pathname!=="/verify-otp")) &&
     <div className='absolute h-110 w-70 border z-300 border-gray-100  bg-white shadow-lg top-20 right-4'>
      <div className='text-xs font-bold mt-4 ml-4  cursor-pointer opacity-70'>welcome</div>
      <p className='text-xs ml-4 mt-1 opacity-50 cursor-pointer '>To access account and manage orders</p>
    <Link to="/login">
     <div className='ml-4 mt-2 h-10 w-[40%] text-center pt-2 rounded-sm font-bold text-pink-500 text-[12px] border-gray-200 hover:cursor-pointer hover:border-pink-500' onClick={handleClick}>LOGIN / SIGN UP</div>
    </Link> 
     
     <hr className='ml-4 mt-4 mb-4  mr-4 opacity-30 text-gray-500' />
     <div className='text-[12px] mt-2 ml-4 cursor-pointer text-gray-600 hover:text-gray-700 hover:font-bold '>Orders</div>
     <div className='text-[12px] mt-2 ml-4 cursor-pointer text-gray-600 hover:text-gray-700 hover:font-bold '>Wishlist</div>
     <div className='text-[12px] mt-2 ml-4 cursor-pointer text-gray-600 hover:text-gray-700 hover:font-bold '>GiftCards</div>
     <div className='text-[12px] mt-2 ml-4 cursor-pointer text-gray-600 hover:text-gray-700 hover:font-bold '>Contact Us</div>
     <div className='text-[12px] mt-2 ml-4 cursor-pointer text-gray-600 hover:text-gray-700 hover:font-bold '>Myntra insider</div>

     <hr className='ml-4 mt-4  mb-4 mr-4 opacity-30 text-gray-500' />
     <div className='text-[12px] mt-2 ml-4 text-gray-600 cursor-pointer hover:text-gray-700 hover:font-bold'>Myntra credits</div>
     <div className='text-[12px] mt-2 ml-4 text-gray-600 cursor-pointer hover:text-gray-700 hover:font-bold'>Coupons</div>
     <div className='text-[12px] mt-2 ml-4 text-gray-600 cursor-pointer hover:text-gray-700 hover:font-bold'>Saved Cards</div>
     <div className='text-[12px] mt-2 ml-4 text-gray-600 cursor-pointer hover:text-gray-700 hover:font-bold'>Saved VPA </div>
     <div className='text-[12px] mt-2 ml-4 text-gray-600 cursor-pointer hover:text-gray-700 hover:font-bold'>Saved Addresses</div>





     </div>
     

     }
      
      <div className='relative h-20 w-15 '><CiHeart className='absolute top-7 left-4'  size={24}/>
     <span className='text-xs font-bold absolute top-13 left-2'> Wishlist</span></div>
      
      <div className='relative h-20 w-15 '><HiOutlineShoppingBag className='absolute top-7 left-5' size={20} />
     <span className='text-xs font-bold absolute top-13 right-5'> Bag</span></div>
      
    </div>
:
<div className='flex  items-center   relative'onMouseEnter={handleProfile} onMouseLeave={handleProfileLeave}>
          
          {
            (location.pathname!=="/login" &&  location.pathname!=="/verify-otp") && 
          <div className='relative h-20 w-17 hover:cursor-pointer hover:border-b-5 border-red-400 '><SlUser className='absolute top-7 left-5' size={20} />
         <span className='text-xs font-bold absolute top-13 left-4'> Profile</span></div>
          }
         
         {
          (showProfile===true && (location.pathname!=="/login" &&  location.pathname!=="/verify-otp")) &&
         <div className='absolute h-113 w-70 border z-300 border-gray-100  bg-white shadow-lg top-20 right-4'>
          <div className='text-xs font-bold mt-4 ml-4 opacity-70 cursor-pointer'>Hello</div>
          <p className='text-xs ml-4 mt-1 opacity-50 cursor-pointer'>{email}</p>
        {/* <Link to="/login">
         <div className='ml-4 mt-2 h-10 w-[40%] text-center pt-2 rounded-sm font-bold text-pink-500 text-[12px] border-gray-200 hover:cursor-pointer hover:border-pink-500' onClick={handleClick}>LOGIN / SIGN UP</div>
        </Link>  */}
         
         <hr className='ml-4 mt-4 mb-4  mr-4 opacity-30 text-gray-500' />
         <div className='text-[12px] mt-2 ml-4 text-gray-600 cursor-pointer hover:text-gray-700 hover:font-bold '>Orders</div>
         <div className='text-[12px] mt-2 ml-4 text-gray-600 cursor-pointer hover:text-gray-700 hover:font-bold '>Wishlist</div>
         <div className='text-[12px] mt-2 ml-4 text-gray-600 cursor-pointer hover:text-gray-700 hover:font-bold '>GiftCards</div>
         <div className='text-[12px] mt-2 ml-4 text-gray-600 cursor-pointer hover:text-gray-700 hover:font-bold '>Contact Us</div>
         <div className='text-[12px] mt-2 ml-4 text-gray-600 cursor-pointer hover:text-gray-700 hover:font-bold '>Myntra insider</div>

         <hr className='ml-4 mt-4  mb-4 mr-4 opacity-30 text-gray-500' />
         <div className='text-[12px] mt-2 ml-4 text-gray-600 cursor-pointer hover:text-gray-700 hover:font-bold'>Myntra credits</div>
         <div className='text-[12px] mt-2 ml-4 text-gray-600 cursor-pointer hover:text-gray-700 hover:font-bold'>Coupons</div>
         <div className='text-[12px] mt-2 ml-4 text-gray-600 cursor-pointer hover:text-gray-700 hover:font-bold'>Saved Cards</div>
         <div className='text-[12px] mt-2 ml-4 text-gray-600 cursor-pointer hover:text-gray-700 hover:font-bold'>Saved VPA </div>
         <div className='text-[12px] mt-2 ml-4 text-gray-600 cursor-pointer hover:text-gray-700 hover:font-bold'>Saved Addresses</div>


         <hr className='ml-4 mt-4  mb-4 mr-4 opacity-30 text-gray-500' />
        <Link to="/profile/edit"> <div className='text-[12px] mt-2 ml-4 cursor-pointer text-gray-600 hover:text-gray-700 hover:font-bold'>edit profile</div></Link>
         <div className='text-[12px] mt-2 ml-4 cursor-pointer text-gray-600 hover:text-gray-700 hover:font-bold' onClick={handleLogout}>Log Out</div>



         </div>
         

         }
          
          <div className='relative h-20 w-15 '><CiHeart className='absolute top-7 left-4'  size={24}/>
         <span className='text-xs font-bold absolute top-13 left-2'> Wishlist</span></div>
          
          <div className='relative h-20 w-15 '><HiOutlineShoppingBag className='absolute top-7 left-5' size={20} />
         <span className='text-xs font-bold absolute top-13 right-5'> Bag</span></div>
          
        </div>


      }
        
      </div>
       
       
    </div>
  )
}

export default Header