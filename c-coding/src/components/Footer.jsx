// import link
import { Link } from 'react-router-dom';

// import icons
import { FaGithub, FaYoutube } from 'react-icons/fa6';

// import css
import '../css/Footer.css';

// footer component
export function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='footer-content'>
                    <div className="footer-section about">
                        <h3>About</h3>
                        <p>
                            A specialized platform built for developers to practice
                            C programming through hands-on logic building and
                            categorized problem-solving.
                        </p>
                    </div>

                    <div className="footer-section links">
                        <h3>Practice</h3>
                        <ul>
                            <li><Link to="/levels/easy">Easy Programs</Link></li>
                            <li><Link to="/levels/medium">Intermediate</Link></li>
                            <li><Link to="/levels/hard">Advanced</Link></li>
                        </ul>
                    </div>

                    <div className='footer-section social'>
                        <h3>Resources</h3>
                        <ul>
                            <li>
                                <a href="https://github.com/TonyStark-19/C-Coding" target="_blank" rel="noreferrer">
                                    <FaGithub className="footer-icon" /> GitHub Repository
                                </a>
                            </li>
                            <li>
                                <a href='https://youtu.be/irqbmMNs2Bo' target="_blank" rel="noreferrer">
                                    <FaYoutube className="footer-icon" /> C Video Guide
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>Built with ❤️ by <span className="author-name">Aditya Chandel</span></p>
                    <p className="copyright">© {new Date().getFullYear()} C-Coding</p>
                </div>
            </div>
        </footer>
    )
}