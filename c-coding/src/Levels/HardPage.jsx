// css
import '../level-page.css';

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

// import navbar
import { Navbar } from '../Mainpage';

// program array
export const programs = [
    {
        title: "Armstrong number",
        description: "Check if a number is Armstrong",
        tags: ["Math", "Loops", "Conditional"],
        slug: "Armstrongnumornot",
        path: "Level 3/Armstrongnumornot.c",
        link: "/levels/hard",
    },
    {
        title: "Calculator v1",
        description: "Calculator using functions",
        tags: ["Functions", "Operators"],
        slug: "Calculatorversion1",
        path: "Level 3/Calculatorversion1.c",
        link: "/levels/hard",
    },
    {
        title: "Determinant",
        description: "Find determinant of matrix",
        tags: ["Matrix", "Determinant", "Math"],
        slug: "Determinant",
        path: "Level 3/Determinant.c",
        link: "/levels/hard",
    },
    {
        title: "Fibonacci (recursion)",
        description: "Fibonacci using recursion",
        tags: ["Recursion", "Math"],
        slug: "Fibnacciseq",
        path: "Level 3/Fibnacciseq.c",
        link: "/levels/hard",
    },
    {
        title: "Fibonacci (function)",
        description: "Fibonacci using function call",
        tags: ["Functions", "Loops", "Math"],
        slug: "Fibnaccisequence2",
        path: "Level 3/Fibnaccisequence2.c",
        link: "/levels/hard",
    },
    {
        title: "Highest char frequency",
        description: "Find most frequent character",
        tags: ["Strings", "Frequency", "Text Processing"],
        slug: "highfreqchar",
        path: "Level 3/highfreqchar.c",
        link: "/levels/hard",
    },
    {
        title: "Inverse of matrix",
        description: "Inverse of a matrix",
        tags: ["Matrix", "Inverse", "Math"],
        slug: "Inverse",
        path: "Level 3/Inverse.c",
        link: "/levels/hard",
    },
    {
        title: "Matrix multiplication (logic)",
        description: "Matrix multiplication using loops",
        tags: ["Matrix", "Loops", "Multiplication"],
        slug: "Multiplicationofmatrix",
        path: "Level 3/Multiplicationofmatrix.c",
        link: "/levels/hard",
    },
    {
        title: "Matrix multiplication (arrays)",
        description: "Matrix multiplication using arrays",
        tags: ["Matrix", "2D Array", "Loops"],
        slug: "Multiplicationofmatrixusingarr",
        path: "Level 3/Multiplicationofmatrixusingarr.c",
        link: "/levels/hard",
    },
    {
        title: "Number system converter",
        description: "Decimal to other base conversions",
        tags: ["Math", "Conversion", "Number Systems"],
        slug: "Numbersystemversion1",
        path: "Level 3/Numbersystemversion1.c",
        link: "/levels/hard",
    },
    {
        title: "Quiz v1",
        description: "Quiz logic version 1",
        tags: ["Conditional", "Input/Output", "Logic"],
        slug: "Quizversion1",
        path: "Level 3/Quizversion1.c",
        link: "/levels/hard",
    },
    {
        title: "Quiz v2",
        description: "Quiz logic version 2",
        tags: ["Conditional", "Input/Output", "Logic"],
        slug: "Quizversion2",
        path: "Level 3/Quizversion2.c",
        link: "/levels/hard",
    },
    {
        title: "Quiz v3",
        description: "Quiz logic version 3",
        tags: ["Conditional", "Input/Output", "Logic"],
        slug: "Quizversion3",
        path: "Level 3/Quizversion3.c",
        link: "/levels/hard",
    },
    {
        title: "Specific area calculator",
        description: "Area based on shape",
        tags: ["Math", "Conditional", "Geometry"],
        slug: "Specificarea",
        path: "Level 3/Specificarea.c",
        link: "/levels/hard",
    },
    {
        title: "Specific operations (switch)",
        description: "Menu-based operations",
        tags: ["Switch", "Operators", "Control Flow"],
        slug: "Specificoperations2",
        path: "Level 3/Specificoperations2.c",
        link: "/levels/hard",
    },
    {
        title: "Upper to lowercase (function)",
        description: "Convert using function",
        tags: ["Strings", "Functions", "Text Processing"],
        slug: "Uppertolowercase",
        path: "Level 3/Uppertolowercase.c",
        link: "/levels/hard",
    }
];

// main page
export default function EasyPage() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <div className='container'>
            <Navbar />
            <Hard />
        </div>
    )
}

// hard page content
function Hard() {
    return (
        <div className='easy-level-container'>
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
                            {prog.tags.map((topic, i) => (
                                <div className="topics-box" key={i}>{topic}</div>
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