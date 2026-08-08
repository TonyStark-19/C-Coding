// import icons
import { FiGithub, FiGitPullRequest, FiArrowRight, FiHeart } from 'react-icons/fi';

// import css
import '../css/CtaSection.css';

// cta section
export default function CtaSection() {
    return (
        <section className="cta-section">
            <div
                className="cta-container"
                data-aos="fade-up"
                data-aos-delay="100"
            >
                {/* Content Box */}
                <div className="cta-box">
                    <div className="cta-badge">
                        <FiGitPullRequest className="badge-icon" />
                        <span>Open Source & Community Driven</span>
                    </div>

                    <h2 className="cta-title">
                        Have a Unique C Program? <br />
                        <span className="text-gradient">Contribute & Help Us Grow</span>
                    </h2>

                    <p className="cta-desc">
                        This project was built for beginners learning low-level programming.
                        If you have a unique C code solution, optimization, or algorithm that isn't
                        part of this repository yet, feel free to open a Pull Request on GitHub!
                    </p>

                    <div className="cta-actions">
                        <a
                            href="https://github.com/TonyStark-19/C-Coding/blob/main/CONTRIBUTING.md"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary cta-btn-main"
                        >
                            <FiGithub className="btn-icon" />
                            <span>Contribute on GitHub</span>
                            <FiArrowRight className="btn-arrow" />
                        </a>
                    </div>

                    <div className="cta-footer-note">
                        <FiHeart className="heart-icon" />
                        <span>Every contribution helps fellow students master C programming logic</span>
                    </div>
                </div>
            </div>
        </section>
    );
}