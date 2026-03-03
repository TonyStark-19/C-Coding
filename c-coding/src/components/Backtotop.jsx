// import use state and use effect
import { useState, useEffect } from "react";

// import icons
import { FaAngleDoubleUp } from "react-icons/fa";

// import css
import '../css/Backtotop.css';

// back to top button
export function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Increased threshold slightly for better UX
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            className={`back-to-top-glass ${visible ? 'show' : ''}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <FaAngleDoubleUp className='top-icon-anim' />
        </button>
    );
}