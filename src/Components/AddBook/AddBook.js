import React, { useEffect, useState } from 'react'
import './AddBook.css'
import book from '../../Assets/book.gif'
import profile from '../../Assets/profile.png'
import loupe from '../../Assets/loupe.png'

const AddBook = () => {
  const [showList,setshowList] = useState(false);
  const [showLists,setshowLists] = useState(false);
  const items=["J.K.Rowling","Dan Brown","Chettan bhagat","Agatha Christie","George R.R.Martin","Dr.A.P.J.Abdul kalam","Sudha Moorthy"]
  const itemes=["Fiction","Non-Fiction","Science","Technology","History","Biography","Self-Help","Fantasy","Education"]
  const [dateTime,setDateTime] = useState(new Date());
  const [query,setQuery] = useState('');
  const handlesearch = () =>{
    alert(`searching for:${query}`);
  }
  useEffect(()=>{
    const timer=setInterval(() => {
    setDateTime(new Date());
  },1000);
  return()=>clearInterval(timer);
  },[]);
  const dayName = dateTime.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});
  return (
    <div className='Addbook-container'>
      <div className='profile-image'><img src={profile} alt=''/><h1>Welcome back</h1><h2>Sathya Prakash</h2></div>
      <div className='Add-search'>
        <form>
          <img src={loupe} alt='' onClick={handlesearch}/>
          <input type='text' placeholder='Search your books' value={query} onChange={(e) => setQuery(e.targetvalue)}/>
        </form>
        <div className='date-cont'><p>{dayName}</p> <p>{dateTime.toLocaleTimeString()}</p></div>
      </div>
      <div className='list-cont'><p onClick={() =>setshowList(!showList)}>Author</p><p onClick={() => setshowLists(!showLists)}>Category</p></div>
      {showList&&(
        
        <ul className='item-cont'>
          <p>All Author</p>
          {items.map((item,index)=>(
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      {showLists&&(
        <ul className='item1-cont'>
          <p>All Categories</p>
          {itemes.map((item,index)=>(
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      <div className='book-img'><img src={book} alt=''/></div>
    </div>
  )
}

export default AddBook