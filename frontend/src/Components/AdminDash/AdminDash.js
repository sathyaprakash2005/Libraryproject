import React, { useEffect, useState } from 'react'
import './AdminDash.css'
import book from '../../Assets/open-book.png'
import people from '../../Assets/people.png'
import back from '../../Assets/back.png'
import user from '../../Assets/user.png'
import account from '../../Assets/account.png'
import exit from '../../Assets/exit.png'
import loupe from '../../Assets/loupe.png'
import profile from '../../Assets/profile.png'
import { useNavigate } from 'react-router-dom';

const AdminDash = () => {
  const navigate = useNavigate();
  const [query,setQuery] = useState("");
  const handlesearch = () =>{
    alert(`searching for:${query}`)
  }
  useEffect(()=>{
    const isLoggedIn = localStorage.getItem('isAdminLoggedIn');
    if(!isLoggedIn){
      navigate('/login', { replace: true });
    }
  },[]);
  const handleLogout = () =>{
    localStorage.removeItem('isAdminLoggedIn');
    navigate('/login', { replace: true });
  }
  return (
    <div className='Ad-container'>
      <div className='Ad1-overlay'></div>
      <h1>ADMIN DASHBOARD</h1>
      <div className='search-cont'>
        <form>
          <img src={loupe} onClick={handlesearch} alt=''/>
          <input type='text'
          placeholder='Search'
          value={query}
          onChange={(e) => setQuery(e.target.value)}/>
         
        </form>
      </div>
      <div className='profile-cont'><h1><img src={profile} alt=''/>Profile</h1></div>
      <div className='log-cont'><h1 onClick={handleLogout}><img src={exit} alt=''/>Log Out</h1></div>
      <div className='Admin-cont'>
        <div className='Admin-cont1'>
        <p><a href='/addbook1'><img src={book} alt=''/>Add Books</a></p>
        <p><a href='/member'><img src={people} alt=''/>Manage Members</a></p>
        <p><img src={back} alt=''/>Return Books</p>
        </div>
        <div className='Admin-cont2'>
        <p><a href='/addbook'><img src={book} alt=''/>View Books</a></p>
        <p><a href='/issuebook'><img src={user} alt=''/>Issue Books</a></p>
        <p><img src={account} alt=''/>Reports</p>
        </div>
        </div>
    </div>
  )
}

export default AdminDash