// css
import './levels.css';

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
                <div className="level-card beginner">
                    <h2>Beginner</h2>
                    <p>Simple logic, basic syntax, loops, and conditionals.</p>
                    <p>Number of Programs : 22</p>
                </div>
                <div className="level-card intermediate">
                    <h2>Intermediate</h2>
                    <p>Functions, arrays, strings, and slightly complex logic.</p>
                    <p>Number of Programs : 39</p>
                </div>
                <div className="level-card advanced">
                    <h2>Advanced</h2>
                    <p>Pointers, dynamic memory, data structures, and logic puzzles.</p>
                    <p>Number of Programs : 16</p>
                </div>
            </div>
        </div>
    );
}