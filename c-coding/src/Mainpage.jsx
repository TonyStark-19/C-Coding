// css
import './App.css';

// router
import { Link } from 'react-router-dom';

// react icons
import { FaLaptopCode } from "react-icons/fa6";

export default function MainPage() {
    return (
        <div className='container'>
            <Navbar />
            <Home />
        </div>
    )
}

// navbar
export function Navbar() {
    return (
        <div className='navbar'>
            <div className='nav-element-wrap'>
                <p>C-Coding</p>
                <FaLaptopCode className='nav-icon' />
            </div>

            <div className="star-btn">
                <a href="https://github.com/TonyStark-19/C-Coding"><button><span>Star on
                    Github</span>⭐</button></a>
            </div>
        </div>
    )
}

// home section
function Home() {
    return (
        <div className='home-container'>
            <div className='content'>
                <h1>Practice C programming concepts via various programs made by me :)</h1>
                <h2>Welcome to my C coding website! This website is organized into three levels of programs,
                    categorized by logic complexity and the number of lines of code. It's a great starting point for practicing,
                    improving, and mastering C programming.</h2>

                <Link to="/levels">
                    <button className='get-started-button'>Get Started</button>
                </Link>
            </div>
        </div>
    )
}