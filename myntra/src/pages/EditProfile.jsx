import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const EditProfile = () => {
  return (
    <div className='w-[80%] h-220  m-auto'>
        <div className='w-full h-30 border-b-1 border-gray-400 '>
            <h3 className='font-bold text-lg pt-14 '>Account</h3>
            <h6 className='text-xs '>Rajesh</h6>
        </div>

        <div className="flex h-full">
            <div className='w-[20%] h-full'>
                <div className='w-[90%] h-auto border-b-1 border-gray-300 mt-3 mb-5 pb-5 pt-5'>Overview</div>
                <div className=' h-auto border-b-1 mt-3 w-[90%] border-gray-400 '>
                    <div className='text-xs text-gray-400'>ORDERS</div>
                    <div className='text-md mt-3 pb-3'>Orders and Returns</div>
                </div>
                <div className='w-[90%] h-auto border-b-1 mt-3 pb-4 border-gray-400 '>
                    <div className='text-xs text-gray-400 mb-4'>CREDITS</div>
                    <div  className='text-md '>Coupons</div>
                    <div  className='text-md '>Myntra Credits</div>
                    <div  className='text-md '>Gift card</div>
                </div>
                <div className='w-[90%] h-auto  border-gray-400 border-b-1 mt-3 pb-4  '>
                <div className='text-xs text-gray-400 mb-4'>ACCOUNTS</div>
                    <div  className='text-md '>Profile</div>
                    <div  className='text-md '>Saved Cards</div>
                    <div  className='text-md '>Saved UPI</div>
                    <div  className='text-md '>Saved Wallets</div>
                    <div  className='text-md '>Myntra Insider</div>
                    <div  className='text-md '>Address</div>
                    <div  className='text-md '>Delete Account</div>

                </div>
                <div className='w-[90%] h-auto border-b-1 mt-6 pb-4 border-gray-400 '>
                <div className='text-xs text-gray-400 mb-4'>LEGALS</div>
                    <div  className='text-md '>Terms of use</div>
                    <div  className='text-md '>Privacy policy</div>

                </div>
            </div>
            <div className='w-[80%] h-full border-1 border-gray-400'>
                <div className='w-[90%] ml-4 m-auto h-170 mt-5'>
                    <div className='w-[90%] ml-10 h-25 border-b-1 pt-15 font-bold text-lg pl-5 border-gray-300'>Edit Details</div>
                    <div className='w-[80%] m-auto border-1 border-gray-400 mt-8 h-17 flex'>
                        <div className='w-[50%] '>
                            <div className='h-[50%]  text-gray-700 pt-4 pl-3 opacity-55 text-xs'>Mobile number*</div>
                            <div className='h-[50%]   opacity-70 pl-3 '>8989676745</div>
                        </div>
                        <div className='w-[50%]  '>
                            <div className='w-[80%] h-10 border-1 border-gray-400 m-auto mt-4 text-center pt-2
                            text-sm font-bold
                            '>CHANGE</div>
                        </div>
                    </div>
                    <div className='mt-10 ml-18'>
  <Box sx={{ width: 590, maxWidth: '100%' }}>
    <TextField
      fullWidth
      label="fullname"
      id="fullWidth"
      InputLabelProps={{
        sx: {
          color: 'black',
          fontSize: '12px', // base label font size
          '&.Mui-focused': {
            color: 'black',
            transform: 'translate(14px, 4px) scale(1)', // smaller when floating
          },
          '&.MuiInputLabel-shrink': {
            transform: 'translate(14px, -6px) scale(0.9)', // applies even without focus
          },
        }
      }}
      
      InputProps={{
        sx: {
          height: 50,
          '& input': {
            caretColor: 'pink',
          },
        },
      }}
      sx={{
        opacity: 0.5, // default opacity
        '& .MuiOutlinedInput-root': {
          borderRadius: 0,
          '& fieldset': {
            borderColor: 'black',
            borderWidth: '0.5px',
          },
          '&:hover fieldset': {
            borderColor: 'black',
            borderWidth: '0.5px',

          },
          '&.Mui-focused': {
            opacity: 1, // full opacity on click/focus
            '& fieldset': {
              borderColor: 'black',
            },
          },
        },
      }}
    />
  </Box>
</div>
                    <div className='mt-10 ml-18'>
  <Box sx={{ width: 590, maxWidth: '100%' }}>
    <TextField
      fullWidth
      label="email"
      id="fullWidth"
      InputLabelProps={{
        sx: {
          color: 'black',
          fontSize: '12px', // base label font size
          '&.Mui-focused': {
            color: 'black',
            transform: 'translate(14px, 4px) scale(1)', // smaller when floating
          },
          '&.MuiInputLabel-shrink': {
            transform: 'translate(14px, -6px) scale(0.9)', // applies even without focus
          },
        }
      }}
      
      InputProps={{
        sx: {
          height: 50,
          '& input': {
            caretColor: 'pink',
          },
        },
      }}
      sx={{
        opacity: 0.5, // default opacity
        '& .MuiOutlinedInput-root': {
          borderRadius: 0,
          '& fieldset': {
            borderColor: 'black',
            borderWidth: '0.5px',
          },
          '&:hover fieldset': {
            borderColor: 'black',
            borderWidth: '0.5px',

          },
          '&.Mui-focused': {
            opacity: 1, // full opacity on click/focus
            '& fieldset': {
              borderColor: 'black',
            },
          },
        },
      }}
    />
  </Box>
</div>

<div className='flex w-[80%] m-auto mt-10 h-10 border-1 border-black opacity-55'>
    <div className='w-[50%] border-r-1 border-black text-center pt-2'>Male</div>
    <div className='w-[50%] text-center pt-2'>Female</div>
</div>

                    <div className='mt-10 ml-18'>
  <Box sx={{ width: 590, maxWidth: '100%' }}>
    <TextField
      fullWidth
      label="BirthDay(dd/mm/yyyy)"
      id="fullWidth"
      InputLabelProps={{
        sx: {
          color: 'black',
          fontSize: '12px', // base label font size
          '&.Mui-focused': {
            color: 'black',
            transform: 'translate(14px, 4px) scale(1)', // smaller when floating
          },
          '&.MuiInputLabel-shrink': {
            transform: 'translate(14px, -6px) scale(0.9)', // applies even without focus
          },
        }
      }}
      
      InputProps={{
        sx: {
          height: 50,
          '& input': {
            caretColor: 'pink',
          },
        },
      }}
      sx={{
        opacity: 0.5, // default opacity
        '& .MuiOutlinedInput-root': {
          borderRadius: 0,
          '& fieldset': {
            borderColor: 'black',
            borderWidth: '0.5px',
          },
          '&:hover fieldset': {
            borderColor: 'black',
            borderWidth: '0.5px',

          },
          '&.Mui-focused': {
            opacity: 1, // full opacity on click/focus
            '& fieldset': {
              borderColor: 'black',
            },
          },
        },
      }}
    />
  </Box>
</div>

<div className='ml-15 mt-8 mb-5 font-bold text-sm'>Alternate mobile details</div>
<div className='relative group'> 
  <div className='text-xs absolute left-25 border-r-1 border-gray-300 pr-4 top-3 text-gray-300 group-focus-within:text-gray-600'>
    +91
  </div>

  <div className='w-[80%] m-auto border-black border-1 h-10 mb-5 opacity-50 focus-within:opacity-100'>
    <input
      type="text"
      placeholder='mobile number*'
      className='w-full h-full pl-20 focus:outline-none focus:placeholder-transparent text-xs'
    />
  </div>
</div>

<div className='w-[80%] m-auto border-black border-1 h-10 mb-5 text-xs opacity-60'> <input placeholder='Hint name' type="text" className='w-full
h-full pl-5' /></div>

<div className='w-[80%] m-auto  h-10 mb-5 border-1 border-pink-400 text-xs opacity-60'> <button className='w-full h-full
 font-bold text-white bg-pink-500 hover:cursor-pointer'>SAVE DETAILS</button></div>


                </div>
            </div>
        </div>
    </div>
  )
}

export default EditProfile