// React Icons
import { FiArrowRight, FiGithub, FiTerminal, FiCode } from 'react-icons/fi';

// import css
import '../css/App.css';

// import link
import { Link } from 'react-router-dom';

// import components
import CodeCard from '../components/CodeCard';

// hero setion
export default function HeroSection() {
    // sample code
    const sampleCode = `#include <stdio.h>

int main() {
    // Welcome to C Programming
    printf("Hello, C World!\\n");
    return 0;
}`;

    return (
        <main className="hero-container">
            {/* Left / Top Text Content */}
            <div
                className="hero-content"
                data-aos="fade-up"
            >
                <div className="hero-badge">
                    <FiTerminal className="badge-icon" />
                    <span>Open Source C Practice Platform</span>
                </div>

                <h1 className="hero-title">
                    Master <span className="text-gradient">C Programming</span> Through Practice
                </h1>

                <p className="hero-subtitle">
                    Learn C programming by solving real-world problems — organized by difficulty,
                    logic patterns, and technical interview relevance. Write, run, and master C step by step.
                </p>

                <div className="cta-group">
                    <Link
                        to="/levels"
                        className="btn btn-primary"
                    >
                        <span>Get Started</span>
                        <FiArrowRight className="btn-icon" />
                    </Link>

                    <a
                        href="https://github.com/TonyStark-19/C-Coding/blob/main/CONTRIBUTING.md"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                    >
                        <FiGithub className="btn-icon" />
                        <span>Contribute on GitHub</span>
                    </a>
                </div>

                {/* Feature Highlights / Stats Quick Strip */}
                <div className="hero-highlights">
                    <div className="highlight-item">
                        <FiCode className="highlight-icon" />
                        <span>Structured Practice Levels</span>
                    </div>

                    <div className="highlight-item">
                        <FiTerminal className="highlight-icon" />
                        <span>Interview-Focused Logic</span>
                    </div>
                </div>
            </div>

            {/* Right / Bottom Interactive Code Preview */}
            <div
                className="hero-visual"
                data-aos="fade-up"
                data-aos-delay="100"
            >
                <CodeCard
                    filename="hello_world.c"
                    code={sampleCode}
                />
            </div>
        </main>
    );
}