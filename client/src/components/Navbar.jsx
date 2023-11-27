import { useNavigate } from 'react-router-dom';
import './style/Navbar.css'

function Navbar() {
    const navigate = useNavigate();


    const navigateToPage = (route) => {
        navigate(route);
    }

    return (    
        <div className='navbar-container'>
            <p>Navbar</p>
            <div className='navbar-menu'>
                <ul className='navbar-menu-buttons'>
                    <li onClick={() => navigateToPage('/')}>Home</li>
                    <li onClick={() => navigateToPage('/Game')}>Game</li>
                    <li onClick={() => navigateToPage('/Profile')}>Profile</li>
                    <li onClick={() => navigateToPage('/Settings')}>Settings</li>
                </ul>
            </div>
        </div>    
    )
}

export default Navbar;