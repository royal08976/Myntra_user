
import Header from './components/Header.jsx'
import Slidebar from './components/Slidebar.jsx'
import { Route, Routes } from 'react-router'
import Login from './pages/Login.jsx'
import { createContext,useEffect,useState } from 'react'
import { useLocation } from 'react-router'
import VerifyOtp from './pages/VerifyOtp.jsx'
import Home from './pages/Home.jsx'
import EditProfile from './pages/EditProfile.jsx'


export const MyContext=createContext()
function App() {
  const location=useLocation()

  const [isLogin,setIsLogin]=useState(false)
  const[isOtpverified,setIsOtpverified]=useState(false)
  // if(location.pathname!=="/login"){
  //   setIsLogin(false)
  // }
  useEffect(()=>{
    if(location.pathname==="/login" || location.pathname==="/verify-otp"){

      const storedLogin= localStorage.getItem('isLogin')
       if(storedLogin==='true'){
         setIsLogin(true)
        }else{
          setIsLogin(false)
        }
       }
  },[])


  useEffect(()=>{
    if(location.pathname==="/"){
      const storedOtp=localStorage.getItem("isotpverified")
      if(storedOtp==="true"){
        setIsOtpverified(true)
      }else{
        setIsOtpverified(false)
      }

    }
  },[])

  const values={
    isLogin,
    setIsLogin,
    isOtpverified,
    setIsOtpverified
  }

  return (
    <>
    <MyContext.Provider value={values}>

    <div className="container   m-auto">

    <header className='w-full h-20 shadow-md '>
      <Header></Header>
    </header>
    <main className='mt-10'>
     
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/profile/edit" element={<EditProfile/>}></Route>
        <Route path="/verify-otp" element={<VerifyOtp/>}></Route>
      </Routes>
    </main>
    </div>
    </MyContext.Provider>
    </>
  )
}

export default App
