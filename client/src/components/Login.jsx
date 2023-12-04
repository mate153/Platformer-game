import { useEffect } from 'react';
import './style/Login.css';

function Login() {
    


  return (
    <>
        <video className='video-container' autoPlay muted loop>
            <source src='/welcome_background/main_background.mp4' type='video/mp4'/>
        </video>
        <div id="form-ui">
            <form action="" method="post" id="form">
                <div id="form-body">
                    <div id="welcome-lines">
                        <div id="welcome-line-1">My Game</div>
                        <div id="welcome-line-2">Welcome Back, Loyd</div>
                    </div>
                    <div id="input-area">
                        <div className="form-inp">
                            <input placeholder="Email Address" type="text"/>
                        </div>
                        <div className="form-inp">
                            <input placeholder="Password" type="password"/>
                        </div>
                    </div>
                    <div id="submit-button-cvr">
                        <button id="submit-button" type="submit">Login</button>
                    </div>
                    <div id="forgot-pass">
                        <a href="#">Forgot password?</a>
                    </div>
                    <div id="bar">
                    </div>
                </div>
            </form>
        </div> 
    </>
  )
}
  
export default Login;