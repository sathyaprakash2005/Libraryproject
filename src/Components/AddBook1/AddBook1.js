import React from 'react'
import './AddBook1.css'
import setting from '../../Assets/setting.png'

const AddBook1 = () => {
  return (
    <div className='Addbook1-container'>
        <div className='Addbook1-cont'></div>
        <p><img src={setting} alt=''/>Admin-Add Book</p>
        <div className='book-cont'>
            <h1>Add Book</h1>
            <form>
                <input type='text' placeholder='Tittle'/>
                <input type='text' placeholder='Author'/>
                <input type='text' placeholder='Category'/>
                <input type='text' placeholder='Quantity'/>
            </form>
            <button>Submit</button>
        </div>
    </div>
  )
}

export default AddBook1