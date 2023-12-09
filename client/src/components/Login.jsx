import { useEffect, useState } from 'react';
import './style/Login.css';

function Login({setUserData}) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [loginOrReg, setLoginOrReg] = useState(true);
    

    const handleLogInBtn = () => {
        setUserData({username: userName, password: password});
    };

    const handleLoginOrReg = () => {
        setLoginOrReg(false);
    };

    return (
        <>
            <video className='video-container' autoPlay muted loop>
                <source src='/welcome_background/main_background3.mp4' type='video/mp4'/>
            </video>
            {loginOrReg ?
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
                            <a onClick={() => handleLoginOrReg()}>Register here</a>
                        </div>
                        <div id="bar">
                        </div>
                    </div>
                </form>
                </div> 
             :
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
                                <input placeholder="Username" type="text"/>
                            </div>
                            <div className="form-inp">
                                <input placeholder="Email" type="text" onChange={(event) => setUserName(event.target.value)}/>
                            </div>
                            <div className="form-inp">
                                <input placeholder="Password" type="password" onChange={(event) => setPassword(event.target.value)}/>
                            </div>
                            <div className="form-inp">
                                <input placeholder="Confirm password" type="password"/>
                            </div>
                        </div>
                        <div id="submit-button-cvr">
                            <button id="submit-button">Register</button>
                        </div>
                        <div id="forgot-pass">
                            <a onClick={() => setLoginOrReg(true)}>Back</a>
                        </div>
                    </div>
                </form>
                </div>              
             }
        </>
    )
}
  
export default Login;