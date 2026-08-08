// import useffect
import { useEffect } from 'react';

// import aos animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// Layout Components
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

// import sections
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import HowToUseSection from '../sections/HowToUseSection';
import CtaSection from '../sections/CtaSection';

// import css
import '../css/App.css';

// main page component
export default function MainPage() {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <div className="main-wrapper">
            <Navbar />
            <HeroSection />
            <AboutSection />
            <HowToUseSection />
            <CtaSection />
            <Footer />
        </div>
    );
}