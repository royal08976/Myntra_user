async function sendotp(email) {
    console.log("email is ",email)
    const sendotpURL="http://localhost:3000/send-otp"

    const options={
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body:JSON.stringify({email})
    }

    try {
        const res=await fetch(sendotpURL,options)
        if(!res.ok){
            throw new Error("network response is not ok")
        }
        
        const data=await res.text()
        return {
            status:res.status,
            data:data
        }
    } catch (error) {
        console.log(error)
    }
}
export {sendotp}