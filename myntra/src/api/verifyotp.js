async function verifyotp(verification){

    const verifyURL="http://localhost:3000/verify-otp"
    const options={
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(verification)
    }

    try {
        const res=await fetch(verifyURL,options)
        if(!res.ok){
            throw new Error("response is not ok")
        }
        const data=await res.text()
        return{
            data:data,
            status:res.status
        }
    } catch (error) {
        console.log(error)
    }
}

export {verifyotp}