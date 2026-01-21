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

// import CodeCard
import CodeCard from '../components/CodeCard';

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
                    Learn C programming by solving real problems — categorized by difficulty,
                    logic patterns, and interview relevance. Write, run, and master C step by step.
                </p>

                <div className='cta-group'>
                    <Link to="/levels">
                        <button className='btn-primary'>Get Started</button>
                    </Link>
                    <a
                        href="https://github.com/TonyStark-19/C-Coding/blob/main/CONTRIBUTING.md"
                        target="_blank"
                        rel="noopener noreferrer">
                        <button className='btn-secondary'>Contribute on GitHub</button>
                    </a>
                </div>
            </div>

            {/* Code Card */}
            <CodeCard filename="hello_world.c">
                {`#include <stdio.h>

int main() {
  printf("Hello, C World!");
  return 0;
}`}
            </CodeCard>

        </main>
    )
}