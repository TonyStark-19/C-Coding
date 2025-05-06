import { Navbar } from './Mainpage';

// main page
export default function LevelPage() {
    return (
        <>
            <Navbar />
            <Levels />
        </>
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
                </div>
                <div className="level-card intermediate">
                    <h2>Intermediate</h2>
                    <p>Functions, arrays, strings, and slightly complex logic.</p>
                </div>
                <div className="level-card advanced">
                    <h2>Advanced</h2>
                    <p>Pointers, dynamic memory, data structures, and logic puzzles.</p>
                </div>
            </div>
        </div>
    );
}