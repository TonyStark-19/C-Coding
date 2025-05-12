// css
import './App.css';

// router
import { Link } from 'react-router-dom';

// react icons
import { FaLaptopCode } from "react-icons/fa6";

// AOS animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// import use effect
import { useEffect } from 'react';

// main page
export default function MainPage() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <div className='container'>
            <Navbar />
            <Home />
            <Footer />
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
                <h1 data-aos="fade-down">Practice C programming concepts via various programs made by me :)</h1>
                <h2 data-aos="fade-down">Welcome to my C coding website! This website is organized into three levels of programs,
                    categorized by logic complexity and the number of lines of code. It's a great starting point for practicing,
                    improving, and mastering C programming.</h2>

                <Link to="/levels">
                    <button className='get-started-button' data-aos="zoom-in" data-aos-delay="400" data-aos-duration="800">Get Started</button>
                </Link>
            </div>
        </div>
    )
}

// footer
export function Footer() {
    return (
        <div className='footer'>
            <div className='footer-content'>
                <div className="footer-section">
                    <h3>About</h3>
                    <p>This site was built to help learners practice and master C programming by solving categorized problems.</p>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/levels/easy">Easy</Link></li>
                        <li><Link to="/levels/medium">Medium</Link></li>
                        <li><Link to="/levels/hard">Hard</Link></li>
                    </ul>
                </div>

                <div className='footer-section'>
                    <h3>More links</h3>
                    <ul>
                        <li><a href="https://github.com/TonyStark-19/C-Coding" target="_blank" rel="noopener noreferrer">GitHub Repo</a></li>
                        <li><a href='https://youtu.be/irqbmMNs2Bo?si=J765kMmaJwVFryig'>Apna college one shot C tutorial</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>Made with ❤️ by Aditya chandel</p>
            </div>
        </div>
    )
}