// import useState
import { useState, useEffect } from "react";

// react icons
import { FaAngleDoubleUp } from "react-icons/fa";

// back to top button
export function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 100) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        visible && (
            <button className='back-to-top' onClick={scrollToTop}>
                <FaAngleDoubleUp className='top-btn' />
            </button>
        )
    );
}