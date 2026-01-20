// css
import '../css/levels.css';

// AOS animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// import use effect
import { useEffect } from 'react';

// react icons
import { LiaTagSolid } from "react-icons/lia";
import { FaCode, FaLayerGroup, FaMicrochip } from "react-icons/fa6";

// router
import { Link } from 'react-router-dom';

// import navbar and footer
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

// level page component
export default function LevelPage() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className='main-wrapper'>
            <div className="gradient-bg"></div>
            <Navbar />
            <div className="levels-section">
                <header className="levels-header" data-aos="fade-down">
                    <h1>Curriculum Pathway</h1>
                    <p>Select a difficulty level to view categorized C programs and challenges.</p>
                </header>
                <LevelsList />
            </div>
            <Footer />
        </div>
    )
}

// levels list component
function LevelsList() {
    const levels = [
        {
            path: "/levels/easy",
            title: "Beginner",
            icon: <FaCode />,
            desc: "Master the fundamentals: basic syntax, operators, and control flow.",
            count: 22,
            topics: ["Basic Arithmetic", "Operators", "Conditionals", "Loops", "Functions", "Type Casting", "Character Handling"],
            color: "beginner"
        },
        {
            path: "/levels/medium",
            title: "Intermediate",
            icon: <FaLayerGroup />,
            desc: "Deep dive into modular programming, memory addresses, and data structures.",
            count: 41,
            topics: ["Arrays", "2D Arrays & Matrices", "Strings", "Recursion", "Pointers", "Switch Case", "Structures", "Number Logic", "Patterns"],
            color: "intermediate"
        },
        {
            path: "/levels/hard",
            title: "Advanced",
            icon: <FaMicrochip />,
            desc: "Complex algorithmic logic and low-level system programming concepts.",
            count: 16,
            topics: ["Advanced Functions", "Recursion", "Matrix Operations", "Number Systems", "Algorithms", "Problem Solving", "Menu-Based Programs"],
            color: "advanced"
        }
    ];

    return (
        <div className="levels-stack">
            {levels.map((lvl, index) => (
                <Link to={lvl.path} key={index} className={`level-card-wide ${lvl.color}`} data-aos="fade-up" data-aos-delay={index * 100}>
                    <div className="card-icon">{lvl.icon}</div>

                    <div className="card-main-content">
                        <div className="card-top">
                            <h2>{lvl.title}</h2>
                            <span className="prog-count">{lvl.count} Programs</span>
                        </div>
                        <p>{lvl.desc}</p>

                        <div className='topics-wrapper'>
                            <span className='topics-label'><LiaTagSolid /> Topics:</span>
                            <div className='topics-flex'>
                                {lvl.topics.map(t => <span key={t} className="topic-tag">{t}</span>)}
                            </div>
                        </div>
                    </div>

                    <div className="card-action">
                        <button className='btn-arrow'>Explore →</button>
                    </div>
                </Link>
            ))}
        </div>
    );
}