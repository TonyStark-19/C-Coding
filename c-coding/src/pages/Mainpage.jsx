// css
import '../css/App.css';

// router
import { Link } from 'react-router-dom';

// import Navbar and Footer
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

// AOS animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// import use effect
import { useEffect } from 'react';

// main page
export default function MainPage() {
    // AOS Animations
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <div className='container'
            style={{
                background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(226, 232, 240, 0.15), transparent 70%), #000000",
            }}>
            <Navbar />
            <Home />
            <Footer />
        </div>
    )
}

// home section
function Home() {
    return (
        <div className='home-container'>
            <div className='content'>
                <h1 data-aos="fade-up" data-aos-delay="100">Practice C programming concepts via various programs made by me :)</h1>
                <h2 data-aos="fade-up" data-aos-delay="200">Welcome to my C coding website! This website is organized into three levels of programs,
                    categorized by logic complexity and the number of lines of code. It's a great starting point for practicing,
                    improving, and mastering C programming.</h2>

                <Link to="/levels">
                    <button className='get-started-button'
                        data-aos="fade-up" data-aos-delay="300">Get Started</button>
                </Link>
            </div>
        </div>
    )
}