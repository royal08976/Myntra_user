import React, { useContext, useState } from 'react'
import phone from "../assets/phone.png"
import { useLocation, useNavigate } from 'react-router'
import Button from '@mui/material/Button';
import { verifyotp } from '../api/verifyotp.js';
import {sendotp} from "../api/sendotp.js"
import { MyContext } from '../App.jsx';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';


const VerifyOtp = () => {
    const context=useContext(MyContext)
    console.log("context is ",context)
    const[loading,setLoading]=useState(false)

    const [otp,setotp]=useState({
        otp1:"",
        otp2:"",
        otp3:"",
        otp4:"",
        otp5:"",
        otp6:""
    })
    const location=useLocation()
    const navigate=useNavigate()
    // console.log("location is :",location.state?.email)
    const email=location.state?.email
    const res=location.state?.response
    // console.log("response after sending email is ", res)

    // console.log("otp is ",otp)
    let otpvalues=Object.values(otp)
    const verification={email:email,otp:otpvalues.join('')}
    // console.log("type of ...otpvalues are",...otpvalues)
    console.log("verification is", verification)


    const handleVerify=async()=>{
        try {
           setLoading(true)
            const data=await verifyotp(verification)

            console.log("data is ",data)

            if(data.status===200){
                context.setIsOtpverified(true)
                localStorage.setItem("isotpverified","true")
            localStorage.setItem("email",email)

                navigate(
                    "/"
                ,{state:{response:verification}})
            }
        } catch (error) {
            console.log("error is:",error)
        }

    }

    const handleResend=async()=>{
        try {
            const resend=await sendotp(email)
            console.log("resend otp is", resend)
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <div className='bg-[#fdeeef] -mt-10  h-200 relative '>
        
        <div className='w-100 ml-100 h-full   bg-white absolute top-20   '>
            <div className='pt-10 w-102 ml-8 '>
                <img src={phone} alt="" />
            </div>
            <div className=' ml-15 mt-10 '>Verify with otp</div>
            {loading===false ?<>  
            <p className='text-xs ml-15 mt-2 text-gray-400'>sent to {email}</p>

                <div className='flex gap-3 mt-5 ml-15'>
                    
                    <input type="text" maxLength={1} size={1} 
                    value={otp.otp1}
                    onChange={(e)=>setotp({...otp,otp1:e.target.value})}
                    
                    className='h-8 w-8 text-center  border-1 border-gray-300 focus:outline-gray-400'/>
                    
                    <input type="text" maxLength={1} size={1} 
                    value={otp.otp2}
                    onChange={(e)=>setotp({...otp,otp2:e.target.value})}
                    
                    className='h-8 w-8 text-center  border-1 border-gray-300 focus:outline-gray-400'/>
                    
                    <input type="text" maxLength={1} size={1} 
                    value={otp.otp3}
                    onChange={(e)=>setotp({...otp,otp3:e.target.value})}
                    
                    className='h-8 w-8 text-center  border-1 border-gray-300 focus:outline-gray-400'/>
                    <input type="text" maxLength={1} size={1} 
                    value={otp.otp4}
                    onChange={(e)=>setotp({...otp,otp4:e.target.value})}
                    
                    className='h-8 w-8 text-center  border-1 border-gray-300 focus:outline-gray-400'/>
                    <input type="text" maxLength={1} size={1} 
                    value={otp.otp5}
                    onChange={(e)=>setotp({...otp,otp5:e.target.value})}
                    
                    className='h-8 w-8 text-center  border-1 border-gray-300 focus:outline-gray-400'/>
                    
                    <input type="text" maxLength={1} size={1} 
                    value={otp.otp6}
                    onChange={(e)=>setotp({...otp,otp6:e.target.value})}
                    
                    className='h-8 w-8 text-center  border-1 border-gray-300 focus:outline-gray-400'/>

            {/* <div className='h-8 w-8 border-1 border-black'></div>
            <div className='h-8 w-8 border-1 border-black'></div>
            <div className='h-8 w-8 border-1 border-black'></div>
            <div className='h-8 w-8 border-1 border-black'></div> */}
                </div>

            <Button 
            variant='contained'
            
            sx={{
                marginLeft:"59px",
                marginTop:"20px",
                textTransform:"capitalize",
                backgroundColor:"#ff3f6c"

            }}

            onClick={handleVerify}
            >Verify</Button>

                <div 
                onClick={handleResend}
                className='ml-15 mt-9 text-xs text-[#ff3f6c] font-bold cursor-pointer'> RESEND OTP</div>

                <p className='ml-15 text-xs mt-8'>Login using  <b className='text-[#ff3f6c]'>Password</b></p>
                <p className='ml-15 text-xs mt-8'>Having trouble logging in ? <b className='text-[#ff3f6c]'> Get help</b></p>
                </>
       
        :
        <Stack spacing={6} direction="row" alignItems="center"   className='pl-40 pt-30 '>
       
        <CircularProgress size="3rem" 
        sx={{
          color:"#ff3f6c"
        }}
        />
      </Stack>


}
</div>
    </div>
  )
}

export default VerifyOtp