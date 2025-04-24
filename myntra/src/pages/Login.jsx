import React,{useEffect, useState} from 'react'
import login from "../assets/login.png"
import { useNavigate } from 'react-router'
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { sendotp} from '../api/sendotp.js'

const Login = () => {
  const [email,setEmail]=useState(null)
  const[errorMsg,setErrorMsg]=useState(null)
  const[loading,setLoading]=useState(false)
  const navigate=useNavigate()
  const handleChange=(e)=>{
setEmail(e.target.value)
  }

  const isValidEmail=(email)=>{
    console.log("i am in validate email and got this", email)
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }
  

   
  
  const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log("submitted")
    
    
    if(!isValidEmail(email)){
      
      setErrorMsg("enter valid email")
      
    }
    else{
      try{
        
        setLoading(true)
        const data= await sendotp(email)
        console.log("response after sending email is ", data)
  
     
        if(data.status===200){
  
          navigate("/verify-otp",{state:{email:email,response:data}})
        }
      }catch(err){
        console.log(err)
      }finally{
        setLoading(false)
      }

 
    }

   
    
  }

  
  return (
    <div className='bg-[#fdeeef] -mt-10 -z-100 h-200'>

      <div className='w-100 ml-100  h-full '>
        <div className='pt-10'>
          <img src={login} alt=""  />
        </div>

        {loading ? <Stack spacing={6} direction="row" alignItems="center"   className='pl-50 pt-60 '>
       
        <CircularProgress size="3rem" 
        sx={{
          color:"#ff3f6c"
        }}
        />
      </Stack>
    :<div className='bg-white h-full pt-10 pl-8 text-xl text-gray-700'>
    <b>Login</b>  or  <b>Sign Up</b>
    <div className='relative mt-5 opacity-50 focus-within:opacity-95'>
     <input type="text" className=' border pl-5  text-sm pt-3 pb-3 w-[90%] focus:outline-none '
     placeholder='enter your email here*'
     value={email}
     onChange={handleChange}
     />
     {errorMsg && <p className='text-xs text-orange-600'>{errorMsg}</p>}
    </div>
    <p className='text-sm mt-6'><b>By continuing I agree to the <span className='text-[#ff3f6c]'>terms of use </span>and
    <span className='text-[#ff3f6c]'> privacy policy</span></b></p>

    <div className='h-10 w-[90%] mt-5  bg-[#ff3f6c] text-center'>
     <button className='text-xs font-bold pt-3 text-white' onClick={handleSubmit}>CONTINUE</button>
    </div>
    <p className='text-xs font-bold mt-6 '>Having trouble logging in ? <span className='text-[#ff3f6c]'>Get help</span></p>
   </div>  
    }

        
      </div>
    </div>
  )
}

export default Login