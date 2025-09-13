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
import { FaCode } from "react-icons/fa6";
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

// main page
export default function EasyPage() {
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
            <Hard />
            <Footer />
        </div>
    )
}

// hard page content
function Hard() {
    return (
        <div className='easy-level-container'>
            <BackToTop />
            <h1 data-aos="fade-down">Level 3 : Advanced</h1>

            <div className='programs-wrap'>
                {programs.map((prog, idx) => (
                    <div className="program-box" data-aos="fade-up" key={idx}>
                        <h3>{prog.title}</h3>
                        <p>{prog.description}</p>

                        <div className="topics">
                            <div className="topics-head">
                                Topics
                                <LiaTagSolid />
                            </div>
                            {prog.topics.map((tags, i) => (
                                <div className="topics-box" key={i}>{tags}</div>
                            ))}
                        </div>

                        <Link to={`/programs/${prog.slug}`}>
                            <button className="code-btn">
                                View code
                                <FaCode className="code-icon" />
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}