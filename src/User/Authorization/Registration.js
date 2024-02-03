import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Registration() {
    const [username, usernamechange] = useState("");
    const [fname, fnamechange] = useState("");
    const [upassword, passwordchange] = useState("");
    const [uemail, emailchange] = useState("");
    const [uphone, phonechange] = useState("");
    const [ucountry, countrychange] = useState("india");
    const [uaddress, addresschange] = useState("");
    const [gender, genderchange] = useState(true);

    const navigate = useNavigate();
    const IsValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter the value in ';
        if (username === null || username === '') {
            isproceed = false;
            errormessage += ' Username';
        }
        if (fname === null || fname === '') {
            isproceed = false;
            errormessage += ' Fullname';
        }
        if (upassword === null ||upassword === '') {
            isproceed = false;
            errormessage += ' Password';
        }
        if (uemail === null || uemail === '') {
            isproceed = false;
            errormessage += ' Email';
        }

        if(!isproceed){
            toast.warning(errormessage)
        }else{
            if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(uemail))
            {

            }
            else{
                isproceed = false;
                toast.warning('Please enter the valusername email')
            }
        }
        return isproceed;
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        const regObj = { username, fname, upassword, uemail, uphone, ucountry, uaddress, gender };
    
        if (IsValidate()) 
        {
          axios.post('http://localhost:1234/adduser', regObj)
            .then((res) => {
              toast.success('Registered successfully.');
              navigate('/login');
            })
            .catch((err) => {
              toast.error('Failed: ' + err.message);
            });
        }
      };

  return (
    <div>
            <div className="offset-lg-3 col-lg-6 d-flex align-items-center justify-content-center vh-100">
                <form className="container" onSubmit={handlesubmit}>
                    <div className="card">
                        <div className="card-header">
                            <h1>User Registeration</h1>
                        </div>
                        <div className="card-body">

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>User Name <span className="errmsg">*</span></label>
                                        <input value={username} onChange={e => usernamechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Password <span className="errmsg">*</span></label>
                                        <input value={upassword} onChange={e => passwordchange(e.target.value)} type="password" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Full Name <span className="errmsg">*</span></label>
                                        <input value={fname} onChange={e => fnamechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Email <span className="errmsg">*</span></label>
                                        <input value={uemail} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Phone <span className="errmsg"></span></label>
                                        <input value={uphone} onChange={e => phonechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Country <span className="errmsg">*</span></label>
                                        <select value={ucountry} onChange={e => countrychange(e.target.value)} className="form-control">
                                            <option value="india">India</option>
                                            <option value="usa">USA</option>
                                            <option value="singapore">Singapore</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Address</label>
                                        <textarea value={uaddress} onChange={e => addresschange(e.target.value)} className="form-control"></textarea>
                                    </div>
                                </div>
                                {/* <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Gender</label>
                                        <br></br>
                                        <input type="radio" checked={gender === true} onChange={e => genderchange(e.target.value)} name="gender" value="male" className="app-check"></input>
                                        <label>Male</label>
                                        <input type="radio" checked={gender === false} onChange={e => genderchange(e.target.value)} name="gender" value="female" className="app-check"></input>
                                        <label>Female</label>
                                    </div>
                                </div> */}

                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>Gender</label>
                            <br />
                            <input
                                type="radio"
                                checked={gender === true} // Set the value to true
                                onChange={() => genderchange(true)} // Update the state with true
                                name="gender"
                                className="app-check"
                            />
                            <label>Male</label>
                            <input
                                type="radio"
                                checked={gender === false} // Set the value to false
                                onChange={() => genderchange(false)} // Update the state with false
                                name="gender"
                                className="app-check"
                            />
                            <label>Female</label>
                        </div>
                    </div>


                            </div>

                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Register</button> |
                            {/* <Link to={'/login'} className="btn btn-danger">Close</Link> */}
                        </div>
                    </div>
                </form>
            </div>


        </div>
  )
}

export default Registration