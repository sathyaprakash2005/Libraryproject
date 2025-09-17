import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

const Welcome = () => {
    const navigate=useNavigate();
    useEffect(()=>{
        const timer=setTimeout(()=>{
            navigate('/login', { replace: true })
        },2000);
        return()=>clearTimeout(timer);
    },[navigate])
  return (
    <div>
        <p>please wait</p>
    </div>
  )
}

export default Welcome