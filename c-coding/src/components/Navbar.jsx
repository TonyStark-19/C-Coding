// import icons
import { FaLaptopCode } from "react-icons/fa6";

// import link
import { Link } from 'react-router-dom';

// import css
import '../css/Navbar.css';

export function Navbar() {
    return (
        <nav className='navbar'>
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    <div className='nav-element-wrap'>
                        <FaLaptopCode className='nav-icon' />
                        <p>C-Coding</p>
                    </div>
                </Link>

                <div className="nav-actions">
                    <div className="star-btn">
                        <a
                            href="https://github.com/TonyStark-19/C-Coding"
                            target="_blank"
                            rel="noreferrer"
                            className="star-btn-link"
                        >
                            <span>Star on GitHub</span>
                            <span className="star-emoji">⭐</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}