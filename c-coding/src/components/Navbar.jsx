// import link
import { Link } from 'react-router-dom';

// import icons
import { FiTerminal, FiStar, FiGithub } from 'react-icons/fi';

// import css
import '../css/Navbar.css';

// navbar component
export function Navbar() {
    return (
        <header className="navbar">
            <div className="nav-container">
                {/* Logo Section */}
                <Link
                    to="/"
                    className="nav-logo"
                    aria-label="C-Coding Home"
                >
                    <FiTerminal className="nav-logo-icon" />

                    <div className="nav-logo-text">
                        <span className="brand-name">C-Coding</span>
                    </div>
                </Link>

                {/* Action Button */}
                <div className="nav-actions">
                    <a
                        href="https://github.com/TonyStark-19/C-Coding"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-github-btn"
                    >
                        <FiGithub className="btn-github-icon" />
                        <span className="btn-text">Star on GitHub</span>
                        <FiStar className="btn-star-icon" />
                    </a>
                </div>
            </div>
        </header>
    );
}