import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [active,setactive] = useState('login');
  const [email,setEmail] = useState('');
  const [memberid,setmemberid] = useState('');
  const [password,setpassword] = useState('');
  const [error,setError] = useState('');
  const navigate = useNavigate();
  const adminEmail='sathya@gmail.com';
  const adminPassword='123';

  const handleadminlogin = (e) =>{
    e.preventDefault();
    if(email === adminEmail && password === adminPassword){
      localStorage.setItem('isAdminLoggedIn', true);
      navigate('/admindash', { replace: true });
    }else{
      setError("Invalid Admin Credential")
    }
  }
  const handleSubmit = async(e) =>{
    e.preventDefault();
    try{
      const res = await fetch("http://localhost:5000/api/login",{
        method:'post',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, memberid })
      });
       const data = await res.json();

      if (res.ok) {
        alert("✅ Login successful!");
        setTimeout(() => {
          navigate('/memberdash');
        }, 1500); 
      } else {
        alert(`❌ ${data.error}`);
       
      }
    }catch (err) {
      console.error("❌ Fetch error:", err.message);
      alert("❌ Failed to connect to server");
     
    }
  }
  return (
    <div className='login-container'>
      <div className='login-overlay'>
        <h1>WELCOME</h1>
        <p>"Let's get started!"</p>
      </div>
        <div className='login-image'>
            <div className='toggle-buttons'>
              <button className={active=='login'? 'active':''} onClick={()=>setactive('login')}>Admin</button>
              <button className={active == 'register'? 'active' : ''} onClick={()=>setactive('register')}>Student</button>
            </div>
            {active == 'login' ? (
            <form onSubmit={handleadminlogin}>
              <input type='email'
              name='email'
              placeholder='Enter Your Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              />
              
              <input type='password'
              name='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required
              />
              <p>Forget password?</p>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <button className='login-button'>Login</button>
            
            </form>
            ) : (
              <form onSubmit={handleSubmit}>
              <input
                type='text'
                name='username'
                placeholder='Enter Your Register No'
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <input
                type='password'
                name='password'
                placeholder='MemberID'
                value={memberid}
                onChange={e => setmemberid(e.target.value)}
                required
              />
              <p>Forget password?</p>
              <button className='reg-button' type='submit'><a href='/memberdash'>Login</a></button>
            </form>
            )
}
        </div>
        
    </div>
  )
}

export default Login