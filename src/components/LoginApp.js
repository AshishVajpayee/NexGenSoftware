import React from 'react'
import "../index.css"
function LoginApp() {
  return (
    <div className='form-container'>
        <form onSubmit='' >
          <h1 className="logo">
            NexGenSoftware
          </h1>
          <div className='form-group'>
            <label>Username</label>
            <br></br>
            <input type="text" placeholder='Enter Username' ></input>
            <br></br>
          </div>

          <div className='form-group'>
            <label>Password</label>
            <br></br>
            <input type="text" placeholder='Enter Password' ></input>
            <br></br>
          </div>
          <br></br>
          <button className='btn' >Submit</button>
        </form>
    </div>
  )
}

export default LoginApp