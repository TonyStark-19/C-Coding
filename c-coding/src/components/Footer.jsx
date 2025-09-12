// router
import { Link } from 'react-router-dom';

// footer
export function Footer() {
    return (
        <div className='footer'>
            <div className='footer-content'>
                <div className="footer-section">
                    <h3>About</h3>
                    <p>This site was built to help learners practice and master C programming by solving categorized problems.</p>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/levels/easy">Easy</Link></li>
                        <li><Link to="/levels/medium">Medium</Link></li>
                        <li><Link to="/levels/hard">Hard</Link></li>
                    </ul>
                </div>

                <div className='footer-section'>
                    <h3>More links</h3>
                    <ul>
                        <li><a href="https://github.com/TonyStark-19/C-Coding"
                            target="_blank" rel="noopener noreferrer">GitHub Repo</a></li>
                        <li><a href='https://youtu.be/irqbmMNs2Bo?si=J765kMmaJwVFryig'>Apna college one shot C tutorial</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>Made with ❤️ by Aditya chandel</p>
            </div>
        </div>
    )
}