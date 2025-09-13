// css
import '../css/levels.css';

// AOS animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// import use effect
import { useEffect } from 'react';

// react icons
import { LiaTagSolid } from "react-icons/lia";

// router
import { Link } from 'react-router-dom';

// import navbar and footer
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

// main page
export default function LevelPage() {
    // AOS Animations
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <div className='container'
            style={{
                background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(226, 232, 240, 0.15), transparent 70%), #000000",
            }}>
            <Navbar />
            <Levels />
            <Footer />
        </div>
    )
}

// levels
function Levels() {
    return (
        <div className="levels-container">
            <h1 data-aos="fade-down">Choose Your Level</h1>

            <div className="levels-grid">
                <Link to="/levels/easy" data-aos="fade-up">
                    <div className="level-card beginner">
                        <h2>Beginner</h2>
                        <p>Start with basic syntax, arithmetic operations, conditionals, and simple I/O.</p>
                        <p>Number of Programs: 22</p>

                        <div className='topics'>
                            <div className="topics-head">
                                Topics
                                <LiaTagSolid className='topic-icon' />
                            </div>

                            <div className='topics-box'>Variables</div>
                            <div className='topics-box'>Operators</div>
                            <div className='topics-box'>Input/Output</div>
                            <div className='topics-box'>Conditionals</div>
                            <div className='topics-box'>Loops</div>
                        </div>

                        <button className='get-started'>Get Started</button>
                    </div>
                </Link>

                <Link to="/levels/medium" data-aos="fade-up">
                    <div className="level-card intermediate">
                        <h2>Intermediate</h2>
                        <p>Explore arrays, strings, functions, recursion, loops, and switch-case logic.</p>
                        <p>Number of Programs: 41</p>

                        <div className='topics'>
                            <div className="topics-head">
                                Topics
                                <LiaTagSolid className='topic-icon' />
                            </div>

                            <div className='topics-box'>Arrays</div>
                            <div className='topics-box'>Strings</div>
                            <div className='topics-box'>Recursion</div>
                            <div className='topics-box'>Functions</div>
                            <div className='topics-box'>Matrix</div>
                            <div className='topics-box'>Pointers</div>
                            <div className='topics-box'>Structures</div>
                        </div>

                        <button className='get-started'>Get Started</button>
                    </div>
                </Link>

                <Link to="/levels/hard" data-aos="fade-up">
                    <div className="level-card advanced">
                        <h2>Advanced</h2>
                        <p>Dive into complex logic, data structures, memory management, and algorithmic challenges.</p>
                        <p>Number of Programs: 16</p>

                        <div className='topics'>
                            <div className="topics-head">
                                Topics
                                <LiaTagSolid className='topic-icon' />
                            </div>

                            <div className='topics-box'>Recursion</div>
                            <div className='topics-box'>Functions</div>
                            <div className='topics-box'>Matrices</div>
                            <div className='topics-box'>Pointers</div>
                            <div className='topics-box'>Character Frequency</div>
                            <div className='topics-box'>Quizzes</div>
                            <div className='topics-box'>Number Systems</div>
                        </div>

                        <button className='get-started'>Get Started</button>
                    </div>
                </Link>
            </div>

        </div>
    );
}