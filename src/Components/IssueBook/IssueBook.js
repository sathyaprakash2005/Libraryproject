import React from 'react'
import './IssueBook.css'

const IssueBook = () => {
  return (
    <div className='issue-container'>
        <div className='issue-cont'>
            <h1>Admin</h1>
            <form>
                <label for='membername'>Member Name : </label>
                <input type='text' id='membername'/>
                <label for='bookname'>Book Name : </label>
                <input type='text' id='bookname'/>
                <label for='issuedate'>Issue Date : </label>
                <input type='text' id='issuedate'/>
                <label for='returndate'>Return Date : </label>
                <input type='text' id='returndate'/>
            </form>
            <button>Submit</button>
        </div>
    </div>
  )
}

export default IssueBook