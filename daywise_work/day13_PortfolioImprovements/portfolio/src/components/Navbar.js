import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Dropdown from './Dropdown'


function Navbar() {
    const [click, setClick] = useState(false);

    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };
    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    return (
        <>
        <nav className='navbar'>
            <Link to='/' className='navbar-logo'>
            AAK <i className='fab fa fa-code	'/>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    >
                    <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                        Projects
                    </Link>
                    {dropdown && <Dropdown/>}
                </li>
                <li className='nav-item'>
                    <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                        Contact Me
                    </Link>
                </li>
            </ul>
        </nav>
        </>
    );
}

export default Navbar;
