// import link
import { Link } from 'react-router-dom';

// import icons
import { FiGithub, FiYoutube, FiArrowUpRight, FiTerminal } from 'react-icons/fi';

// import css
import '../css/Footer.css';

// footer component
export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    {/* Brand & About Column */}
                    <div className="footer-section about">
                        <div className="footer-brand">
                            <FiTerminal className="footer-logo-icon" />

                            <span className="footer-brand-name">C-Coding</span>
                        </div>

                        <p className="footer-description">
                            A specialized platform built for developers to practice
                            C programming through hands-on logic building and
                            categorized problem-solving.
                        </p>
                    </div>

                    {/* Practice Levels Column */}
                    <div className="footer-section links">
                        <h3 className="footer-title">Practice</h3>

                        <ul className="footer-list">
                            <li>
                                <Link to="/levels/easy" className="footer-link">
                                    Easy Programs
                                </Link>
                            </li>

                            <li>
                                <Link to="/levels/medium" className="footer-link">
                                    Intermediate
                                </Link>
                            </li>

                            <li>
                                <Link to="/levels/hard" className="footer-link">
                                    Advanced
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* External Resources Column */}
                    <div className="footer-section resources">
                        <h3 className="footer-title">Resources</h3>

                        <ul className="footer-list">
                            <li>
                                <a
                                    href="https://github.com/TonyStark-19/C-Coding"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="footer-link external"
                                >
                                    <FiGithub className="footer-icon" />
                                    <span>GitHub Repository</span>
                                    <FiArrowUpRight className="external-arrow" />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://youtu.be/irqbmMNs2Bo"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="footer-link external"
                                >
                                    <FiYoutube className="footer-icon youtube" />
                                    <span>Tutorial for C language</span>
                                    <FiArrowUpRight className="external-arrow" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom Bar */}
                <div className="footer-bottom">
                    <p className="author-credit">
                        Built with <span className="heart-icon">❤️</span> by{' '}
                        <span className="author-name">Aditya Chandel</span>
                    </p>

                    <p className="copyright">© {new Date().getFullYear()} C-Coding. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}