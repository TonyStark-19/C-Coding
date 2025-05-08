// css
import './levels.css';

// router
import { Link } from 'react-router-dom';

// import navbar
import { Navbar } from './Mainpage';

// main page
export default function LevelPage() {
    return (
        <div className='container'>
            <Navbar />
            <Levels />
        </div>
    )
}

// levels
function Levels() {
    return (
        <div className="levels-container">
            <h1>Choose Your Level</h1>

            <div className="levels-grid">
                <Link to="/levels/easy">
                    <div className="level-card beginner">
                        <h2>Beginner</h2>
                        <p>Start with basic syntax, arithmetic operations, conditionals, and simple I/O.</p>
                        <p>Number of Programs: 22</p>

                        <div className='topics'>
                            <div className='topics-head'>Topics</div>
                            <div className='topics-box'>Variables</div>
                            <div className='topics-box'>Operators</div>
                            <div className='topics-box'>Input/Output</div>
                            <div className='topics-box'>Conditionals</div>
                            <div className='topics-box'>Loops</div>
                        </div>
                    </div>
                </Link>

                <Link to="/levels/medium">
                    <div className="level-card intermediate">
                        <h2>Intermediate</h2>
                        <p>Explore arrays, strings, functions, recursion, loops, and switch-case logic.</p>
                        <p>Number of Programs: 41</p>

                        <div className='topics'>
                            <div className='topics-head'>Topics</div>
                            <div className='topics-box'>Arrays</div>
                            <div className='topics-box'>Strings</div>
                            <div className='topics-box'>Recursion</div>
                            <div className='topics-box'>Functions</div>
                            <div className='topics-box'>Matrix</div>
                            <div className='topics-box'>Pointers</div>
                            <div className='topics-box'>Structures</div>
                        </div>
                    </div>
                </Link>

                <Link to="/levels/hard">
                    <div className="level-card advanced">
                        <h2>Advanced</h2>
                        <p>Dive into complex logic, data structures, memory management, and algorithmic challenges.</p>
                        <p>Number of Programs: 16</p>

                        <div className='topics'>
                            <div className='topics-head'>Topics</div>
                            <div className='topics-box'>Recursion</div>
                            <div className='topics-box'>Functions</div>
                            <div className='topics-box'>Matrices</div>
                            <div className='topics-box'>Pointers</div>
                            <div className='topics-box'>Character Frequency</div>
                            <div className='topics-box'>Quizzes</div>
                            <div className='topics-box'>Number Systems</div>
                        </div>
                    </div>
                </Link>
            </div>

        </div>
    );
}