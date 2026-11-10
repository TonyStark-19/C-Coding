// import useffect
import { useEffect } from 'react';

// import aos animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// React Icons
import { FiLayers } from 'react-icons/fi';

// import Components
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import LevelsList from '../components/levels/LevelsList';

// import css
import '../css/levels.css';

// level page
export default function LevelPage() {
    // initialise aos animations
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <div className="main-wrapper">
            {/* navbar */}
            <Navbar />

            <main className="levels-section">
                <header
                    className="levels-header"
                    data-aos="fade-down"
                >
                    <div className="header-badge">
                        <FiLayers className="header-badge-icon" />
                        <span>Structured Learning Pathway</span>
                    </div>

                    <h1 className="levels-title">Curriculum Pathway</h1>
                    <p className="levels-subtitle">
                        Select a difficulty level to view categorized C programs, core logic patterns, and challenges.
                    </p>
                </header>

                {/* levels list */}
                <LevelsList />
            </main>

            {/* footer */}
            <Footer />
        </div>
    );
}