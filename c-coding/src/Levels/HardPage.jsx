// css
import '../css/level-page.css';

// router
import { Link } from 'react-router-dom';

// AOS animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// import use effect
import { useEffect } from 'react';

// react icons
import { FaArrowRight, FaMicrochip } from "react-icons/fa6";
import { LiaTagSolid } from "react-icons/lia";

// import navbar and footer
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

// import back to top button
import { BackToTop } from '../components/Backtotop';

// program array
export const programs = [
    {
        title: "Armstrong Number Checker",
        description: "Checks whether the given number is an Armstrong number.",
        topics: ["Math", "Loops", "Conditionals"],
        slug: "armstrong-number-checker",
        path: "Level 3/Armstrongnumornot.c",
        link: "/levels/hard",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%203/Armstrongnumornot.c",
    },
    {
        title: "Basic Calculator (Version 1)",
        description: "Implements a calculator using functions and conditionals.",
        topics: ["Functions", "Operators", "Conditionals", "Math"],
        slug: "calculator-v1",
        path: "Level 3/Calculatorversion1.c",
        link: "/levels/hard",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%203/Calculatorversion1.c",
    },
    {
        title: "Determinant of Matrix",
        description: "Calculates the determinant of a matrix using logic and conditionals.",
        topics: ["Matrix", "Math", "Determinant", "Conditionals"],
        slug: "matrix-determinant",
        path: "Level 3/Determinant.c",
        link: "/levels/hard",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%203/Determinant.c",
    },
    {
        title: "Fibonacci Sequence (Recursion)",
        description: "Generates Fibonacci sequence using recursion.",
        topics: ["Recursion", "Math", "Loops", "Functions"],
        slug: "fibonacci-recursion",
        path: "Level 3/Fibnacciseq.c",
        link: "/levels/hard",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%203/Fibnacciseq.c",
    },
    {
        title: "Fibonacci Sequence (Functions)",
        description: "Generates Fibonacci sequence using functions and iterative logic.",
        topics: ["Functions", "Loops", "Math", "Logic"],
        slug: "fibonacci-functions",
        path: "Level 3/Fibnaccisequence2.c",
        link: "/levels/hard",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%203/Fibnaccisequence2.c",
    },
    {
        title: "Most Frequent Character Finder",
        description: "Finds the character with the highest frequency in a string.",
        topics: ["Strings", "Frequency", "Text Processing"],
        slug: "highest-frequency-character",
        path: "Level 3/highfreqchar.c",
        link: "/levels/hard",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%203/highfreqchar.c",
    },
    {
        title: "Matrix Inverse Calculator",
        description: "Calculates the inverse of a given matrix using conditionals.",
        topics: ["Matrix", "Inverse", "Math", "Variables", "Conditionals"],
        slug: "matrix-inverse",
        path: "Level 3/Inverse.c",
        link: "/levels/hard",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%203/Inverse.c",
    },
    {
        title: "Matrix Multiplication (Logic Based)",
        description: "Performs matrix multiplication using logic and nested loops.",
        topics: ["Matrix", "Loops", "Multiplication", "Variables", "Logic"],
        slug: "matrix-multiplication-logic",
        path: "Level 3/Multiplicationofmatrix.c",
        link: "/levels/hard",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%203/Multiplicationofmatrix.c",
    },
    {
        title: "Matrix Multiplication (Using Arrays)",
        description: "Implements matrix multiplication using 2D arrays.",
        topics: ["Matrix", "2D Array", "Loops"],
        slug: "matrix-multiplication-arrays",
        path: "Level 3/Multiplicationofmatrixusingarr.c",
        link: "/levels/hard",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%203/Multiplicationofmatrixusingarr.c",
    },
    {
        title: "Number System Converter",
        description: "Converts decimal numbers to binary, octal, or hexadecimal.",
        topics: ["Math", "Conversion", "Number Systems"],
        slug: "number-system-converter",
        path: "Level 3/Numbersystemversion1.c",
        link: "/levels/hard",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%203/Numbersystemversion1.c",
    },
    {
        title: "Quiz Application (Version 1)",
        description: "Simple quiz using input/output and conditional logic.",
        topics: ["Conditional", "Input/Output", "Logic"],
        slug: "quiz-v1",
        path: "Level 3/Quizversion1.c",
        link: "/levels/hard",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%203/Quizversion1.c",
    },
    {
        title: "Quiz Application (Version 2)",
        description: "Enhanced version of quiz logic with improved structure.",
        topics: ["Conditional", "Input/Output", "Logic"],
        slug: "quiz-v2",
        path: "Level 3/Quizversion2.c",
        link: "/levels/hard",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%203/Quizversion2.c",
    },
    {
        title: "Quiz Application (Version 3)",
        description: "Final quiz version with cleaner implementation.",
        topics: ["Conditional", "Input/Output", "Logic"],
        slug: "quiz-v3",
        path: "Level 3/Quizversion3.c",
        link: "/levels/hard",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%203/Quizversion3.c",
    },
    {
        title: "Area Calculator (Shape Based)",
        description: "Calculates area based on user-selected shapes.",
        topics: ["Math", "Conditional", "Geometry"],
        slug: "shape-area-calculator",
        path: "Level 3/Specificarea.c",
        link: "/levels/hard",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%203/Specificarea.c",
    },
    {
        title: "Switch-Based Menu Operations",
        description: "Performs specific operations using switch-case logic.",
        topics: ["Switch", "Operators", "Control Flow"],
        slug: "switch-menu-operations",
        path: "Level 3/Specificoperations2.c",
        link: "/levels/hard",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%203/Specificoperations2.c",
    },
    {
        title: "Upper to Lowercase Converter",
        description: "Converts uppercase letters to lowercase using functions.",
        topics: ["Strings", "Functions", "Text Processing"],
        slug: "uppercase-to-lowercase",
        path: "Level 3/Uppertolowercase.c",
        link: "/levels/hard",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%203/Uppertolowercase.c",
    }
];

// hard page component
export default function HardPage() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className='main-wrapper'>
            <div className="gradient-bg purple-glow"></div>
            <Navbar />

            <div className='easy-level-container'>
                <BackToTop />

                <header className="level-header-title" data-aos="fade-down">
                    <span className="level-badge purple">Level 03</span>
                    <h1>Advanced Mastery</h1>
                    <p>Tackle complex algorithms, advanced matrix operations, and recursive logic challenges.</p>
                </header>

                <div className='programs-grid-list'>
                    {programs.map((prog, idx) => (
                        <div className="program-card-premium hard" data-aos="fade-up" key={idx}>
                            <div className="card-left">
                                <div className="card-icon-mini hard-accent">
                                    <FaMicrochip />
                                </div>
                                <div className="card-text">
                                    <h3>{prog.title}</h3>
                                    <p>{prog.description}</p>
                                    <div className="topics-pill-container">
                                        <LiaTagSolid className="tag-icon" />
                                        {prog.topics.map((tag, i) => (
                                            <span className="topic-pill" key={i}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <Link to={`/programs/${prog.slug}`} className="view-btn-link">
                                <button className="action-view-btn hard-btn">
                                    View Code <FaArrowRight />
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}