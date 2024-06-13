import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const [data,setData] = useState(
        {
            "emailid":"",
            "pass":""
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8081/signin",data).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success"){
                    sessionStorage.setItem("token",response.data.token)
                    sessionStorage.setItem("userid",response.data.userid)
                    navigate("/dashboard")
                }else{
                    alert("FAILED")
                }
            }
        ).catch().finally()
    }
    let navigate =useNavigate()
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email ID</label>
                            <input type="text" className="form-control" name="emailid" value={data.emailid} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" name="pass" id="" className="form-control" value={data.pass} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <p>To go to sign up page,<Link to="/signup">Click Here</Link></p>
        </div>
    </div>
  )
}

export default Login