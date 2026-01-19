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

// Main Page Component
export default function MainPage() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className='main-wrapper'>
            <div className="gradient-bg"></div>
            <Navbar />
            <HeroSection />
            <Footer />
        </div>
    )
}

// Hero Section Component
function HeroSection() {
    return (
        <main className='hero-container'>
            <div className='hero-content' data-aos="zoom-out">
                <h1 className="hero-title">
                    Master <span className="text-gradient">C Programming</span> Through Practice
                </h1>
                <p className="hero-subtitle">
                    Dive into a curated collection of C programs categorized by logic complexity.
                    From basic syntax to advanced algorithms, level up your coding skills step-by-step.
                </p>

                <div className='cta-group'>
                    <Link to="/levels">
                        <button className='btn-primary'>Get Started</button>
                    </Link>
                    <button className='btn-secondary'>View Roadmap</button>
                </div>
            </div>

            {/* Final Fixed Code Card */}
            <div className="code-card" data-aos="fade-up" data-aos-delay="400">
                <div className="code-header">
                    <div className="dot-group">
                        <span className="dot red"></span>
                        <span className="dot yellow"></span>
                        <span className="dot green"></span>
                    </div>
                    <span className="file-name">hello_world.c</span>
                </div>
                <div className="code-body">
                    <pre>
                        <code>
                            <span className="keyword">#include</span> <span className="string">&lt;stdio.h&gt;</span>{'\n'}
                            <span className="keyword">int</span> <span className="func">main</span>() {'{'}{'\n'}
                            <span className="func">printf</span>(<span className="string">"Hello, C World!"</span>);{'\n'}
                            <span className="keyword">return</span> 0;{'\n'}
                            {'}'}
                        </code>
                    </pre>
                </div>
            </div>
        </main>
    )
}