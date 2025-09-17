import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './Components/Login/Login'
import AdminDash from './Components/AdminDash/AdminDash'
import AddBook from './Components/AddBook/AddBook'
import AddBook1 from './Components/AddBook1/AddBook1'
import Memberdash from './Components/Memberdash/Memberdash'
import Borrowed from './Components/Borrowed/Borrowed'
import Member from './Components/Member/Member'
import IssueBook from './Components/IssueBook/IssueBook'
import Welcome from './Components/Welcome/Welcome'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/admindash' element={<AdminDash/>}/>
          <Route path='/addbook' element={<AddBook/>}/>
          <Route path='/addbook1' element={<AddBook1/>}/>
          <Route path='/memberdash' element={<Memberdash/>}/>
          <Route path='/borrowed' element={<Borrowed/>}/>
          <Route path='/member' element={<Member/>}/>
          <Route path='/issuebook' element={<IssueBook/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App