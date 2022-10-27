import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'
const Login = () => {

  return (
    <div className='login'>
        <div className="card">
          <div className="left">
            <h1>Hello World</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad quidem debitis, consequatur, reprehenderit dolore possimus inventore praesentium ipsa eaque officiis vero fugiat maiores quo repudiandae ducimus eum rem exercitationem animi.</p>
            <span>Don't you have an account?</span>
            <Link to="/register">
              <button>Register</button>
            </Link>
          </div>

          <div className="right">
            <h1>Login</h1>
            <form>
              <input type="text" placeholder='Username'/>
              <input type="password" placeholder='Password'/>
                <button>Login</button>
            </form>
          </div>  
        </div>
    </div>
  )
}

export default Login