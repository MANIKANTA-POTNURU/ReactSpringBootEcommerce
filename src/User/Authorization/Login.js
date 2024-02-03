import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Login() {

    const [uemail,useremailupdate]=useState('')
    const [upassword,passwordupdate]=useState('')
    const navigate=useNavigate();
    useEffect(()=>{
        sessionStorage.clear();
      })
      const validate=()=>{
        let res=true
        if(uemail===''|| uemail===null)
        {
          res=false;
          toast.warning('Please Enter Username')
        }
        if(upassword===''|| upassword===null)
        {
          res=false;
          toast.warning('Please Enter password')
        }
        return res;
       }
       const ProceedLogin=(e)=>{
        e.preventDefault();
        if(validate())
        {
          console.log('Proceed');
    
          axios.get(`http://localhost:1234/checkuserlogin?email=${uemail}`)
      .then(res => {
          console.log(res.data);
          if (Object.keys(res.data).length === 0) {
              toast.error('Please enter valid email');
          } else {
              if (res.data.upassword === upassword) {
                  toast.success('Successfully login as a user');
                  sessionStorage.setItem('uemail', uemail);
                  sessionStorage.setItem('uname', res.data.username);
                  navigate('/home');
              } 
              else {
                  toast.error('Please enter valid credentials');
              }
          }
      })
      .catch(err => {
          toast.error('Login Failed due to: ' + err.message);
      });
        }
      }    
  return (
   
    <div className="row ">
    <div className="offset-lg-3 col-lg-6 d-flex align-items-center justify-content-center vh-100" >
        <form className="container" onSubmit={ProceedLogin}>
            <div className="card">
                <div className="card-header">
                    <h2>User Login</h2>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label>Email <span className="errmsg">*</span></label>
                        <input value={uemail} onChange={e=>useremailupdate(e.target.value)} className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label>Password <span className="errmsg">*</span></label>
                        <input value={upassword} type='password' onChange={e=>passwordupdate(e.target.value)}  className="form-control"></input>
                    </div>
                </div>
                <div className="card-footer">
                    <button type="submit" className="btn btn-primary">Login</button> |
                    <Link className="btn btn-success" to={'/register'}>New User</Link>
                </div>
            </div>
        </form>
    </div>
</div>

  )
}

export default Login