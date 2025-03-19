import React, { useEffect, useState } from 'react'
import { IsAuthenticate } from './isAuthenticate'
import axios from 'axios';

const AuthProvider = ({children}) => {
    const [authenticate , setAuthenticate] = useState(false);
    const [loading , setLoading] = useState(false);
    // const Verify = async ()=>{
    //     try{
    //         const res = await axios.get('/netflix/authenticate');
    //     //   if(res.data?.success){
    //     //     setAuthenticate(true);
    //     //   }else{
    //     //       setAuthenticate(true);
    //     //     window.location.href='/login'
    //     //   }  
            
    //     }catch(error){
    //         console.log("Error in Auth Provider", error.message);
    //     }finally{
    //         setLoading(false);
    //     }
    // }

    // useEffect(() => {
    //   Verify();
    // },[])

    return (
        <IsAuthenticate.Provider value={{authenticate,setAuthenticate}}>
            {children}
        </IsAuthenticate.Provider>
      )
}

export default AuthProvider
