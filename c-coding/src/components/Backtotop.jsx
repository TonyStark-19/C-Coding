// import hooks
import { useState, useEffect } from "react";

// import icons
import { FiArrowUp } from "react-icons/fi";

// import css
import '../css/Backtotop.css';

// back to top button
export function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // scroll to top trigger
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            className={`back-to-top-glass ${visible ? 'show' : ''}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <FiArrowUp className="top-icon-anim" />
        </button>
    );
}