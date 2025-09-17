import React, { useState } from 'react'
import './Memberdash.css'
import loupe from '../../Assets/loupe.png'
import profile from '../../Assets/profile.png'
import exit from '../../Assets/exit.png'
const Memberdash = ({user}) => {
    const [query,setQuery]=useState("")
    const handlesearch =() =>{
        alert(`searching for:${query}`);
    }
  return (
    <div className='memberdash-container'>
        <div className='member-cont1'><h2>DR.SACOE COLLEGE LIBRARY</h2></div>
        <h1>Member Dashboard</h1>
        <div className='member-search'>
            <form><img src={loupe} onClick={handlesearch} alt=''/>
                <input type='text' placeholder='Search'
                value={query}
                onChange={(e) =>setQuery(e.target.value)}/>
            </form>
        </div>
        <div className='profile-cont1'><h3><img src={profile} alt=''/>Profile</h3></div>
        <div className='log-cont1'><h1><img src={exit} alt=''/>Log Out</h1></div>
        <div className='member-cont'>
               <a href='/borrowed'><p>Borrowed Books</p></a>
               <p>View Books</p>
        </div>
        <div className='member-cont2'><h4>Book Request?</h4></div>
    </div>
  )
}

export default Memberdash