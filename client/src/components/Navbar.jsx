import { useNavigate } from 'react-router-dom';
import './style/Navbar.css';

function Navbar({setUserData}) {
    const navigate = useNavigate();

    const navigateToPage = (route) => {
        navigate(route);
    };

    const handleExitBtn = () => {
        setUserData({username: "", password: ""});
    }

    return (    
        <div className='navbar-container'>
            <div className='navbar-logo' onClick={() => navigateToPage('/')}>
                <p>Navbar</p>
            </div>            
            <div className='navbar-menu'>                
                <div onClick={() => navigateToPage('/')}>Home</div>
                <div onClick={() => navigateToPage('/Game')}>Game</div>
                <div onClick={() => navigateToPage('/Profile')}>Profile</div>
                <div onClick={() => navigateToPage('/Settings')}>Settings</div>
                <button onClick={() => handleExitBtn()}>Exit</button>                
            </div>
        </div>    
    )
}

export default Navbar;