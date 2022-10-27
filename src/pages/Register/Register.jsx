import React from 'react'
import { Link } from 'react-router-dom'
import './register.css'

const Register = () => {
  return (
    <div className='register'>
      <div className="card">
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder='Username'/>
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
            <input type="text" placeholder="Name" name="" id="" />
            <Link to="/register">
              <button>Register</button>
            </Link>
          </form>
        </div>

        <div className="left">
          <h1>Jwala</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad quidem debitis, consequatur, reprehenderit dolore possimus inventore praesentium ipsa eaque officiis vero fugiat maiores quo repudiandae ducimus eum rem exercitationem animi.</p>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  ) 
}

export default Register