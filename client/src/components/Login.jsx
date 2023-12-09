import { useEffect, useState } from 'react';
import './style/Login.css';

function Login({setUserData}) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    

    const handleLogInBtn = () => {
        setUserData({username: userName, password: password});
    };

    return (
        <>
            <video className='video-container' autoPlay muted loop>
                <source src='/welcome_background/main_background3.mp4' type='video/mp4'/>
            </video>
            <div id="form-ui">
                <form action="" method="post" id="form">
                    <div id="form-body">
                        <div id="welcome-lines">
                            <div id="welcome-line-1">Solo</div>
                            <div id="welcome-line-2">The</div>
                            <div id="welcome-line-3">Cat</div>
                        </div>
                        <div id="input-area">
                            <div className="form-inp">
                                <input placeholder="Email Address" type="text" onChange={(event) => setUserName(event.target.value)}/>
                            </div>
                            <div className="form-inp">
                                <input placeholder="Password" type="password" onChange={(event) => setPassword(event.target.value)}/>
                            </div>
                        </div>
                        <div id="submit-button-cvr">
                            <button id="submit-button" onClick={() => handleLogInBtn()}>Login</button>
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