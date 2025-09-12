// react icons
import { FaLaptopCode } from "react-icons/fa6";

// router
import { Link } from 'react-router-dom';

// navbar components
export function Navbar() {
    return (
        <div className='navbar'>
            <Link to="/">
                <div className='nav-element-wrap'>
                    <p>C-Coding</p>
                    <FaLaptopCode className='nav-icon' />
                </div>
            </Link>

            <div className="star-btn">
                <a href="https://github.com/TonyStark-19/C-Coding"><button><span>Star on
                    Github</span>⭐</button></a>
            </div>
        </div>
    )
}