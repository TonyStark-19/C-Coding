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

// import back to top button
import { BackToTop } from './EasyPage';

// import footer
import { Footer } from '../Mainpage';

// program array
export const programs = [
    {
        title: "Armstrong number",
        description: "Check if a number is Armstrong or not",
        tags: ["Math", "Loops", "Conditional"],
        slug: "Armstrongnumornot",
        path: "Level 3/Armstrongnumornot.c",
        link: "/levels/hard",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%203/Armstrongnumornot.c",
    },
    {
        title: "Calculator v1",
        description: "Calculator using functions",
        tags: ["Functions", "Operators"],
        slug: "Calculatorversion1",
        path: "Level 3/Calculatorversion1.c",
        link: "/levels/hard",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%203/Calculatorversion1.c",
    },
    {
        title: "Determinant ( Logic )",
        description: "Find determinant of matrix",
        tags: ["Matrix", "Determinant", "Math"],
        slug: "Determinant",
        path: "Level 3/Determinant.c",
        link: "/levels/hard",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%203/Determinant.c",
    },
    {
        title: "Fibonacci (recursion)",
        description: "Fibonacci using recursion",
        tags: ["Recursion", "Math"],
        slug: "Fibnacciseq",
        path: "Level 3/Fibnacciseq.c",
        link: "/levels/hard",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%203/Fibnacciseq.c",
    },
    {
        title: "Fibonacci (function)",
        description: "Fibonacci using function and logic",
        tags: ["Functions", "Loops", "Math"],
        slug: "Fibnaccisequence2",
        path: "Level 3/Fibnaccisequence2.c",
        link: "/levels/hard",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%203/Fibnaccisequence2.c",
    },
    {
        title: "Highest char frequency",
        description: "Find most frequent character",
        tags: ["Strings", "Frequency", "Text Processing"],
        slug: "highfreqchar",
        path: "Level 3/highfreqchar.c",
        link: "/levels/hard",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%203/highfreqchar.c",
    },
    {
        title: "Inverse",
        description: "Inverse of a matrix",
        tags: ["Matrix", "Inverse", "Math"],
        slug: "Inverse",
        path: "Level 3/Inverse.c",
        link: "/levels/hard",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%203/Inverse.c",
    },
    {
        title: "Matrix multiplication (logic)",
        description: "Matrix multiplication using logic",
        tags: ["Matrix", "Loops", "Multiplication"],
        slug: "Multiplicationofmatrix",
        path: "Level 3/Multiplicationofmatrix.c",
        link: "/levels/hard",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%203/Multiplicationofmatrix.c",
    },
    {
        title: "Matrix multiplication (arrays)",
        description: "Matrix multiplication using arrays",
        tags: ["Matrix", "2D Array", "Loops"],
        slug: "Multiplicationofmatrixusingarr",
        path: "Level 3/Multiplicationofmatrixusingarr.c",
        link: "/levels/hard",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%203/Multiplicationofmatrixusingarr.c",
    },
    {
        title: "Number system converter",
        description: "Decimal to other base conversions",
        tags: ["Math", "Conversion", "Number Systems"],
        slug: "Numbersystemversion1",
        path: "Level 3/Numbersystemversion1.c",
        link: "/levels/hard",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%203/Numbersystemversion1.c",
    },
    {
        title: "Quiz v1",
        description: "Quiz logic version 1",
        tags: ["Conditional", "Input/Output", "Logic"],
        slug: "Quizversion1",
        path: "Level 3/Quizversion1.c",
        link: "/levels/hard",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%203/Quizversion1.c",
    },
    {
        title: "Quiz v2",
        description: "Quiz logic version 2",
        tags: ["Conditional", "Input/Output", "Logic"],
        slug: "Quizversion2",
        path: "Level 3/Quizversion2.c",
        link: "/levels/hard",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%203/Quizversion2.c",
    },
    {
        title: "Quiz v3",
        description: "Quiz logic version 3",
        tags: ["Conditional", "Input/Output", "Logic"],
        slug: "Quizversion3",
        path: "Level 3/Quizversion3.c",
        link: "/levels/hard",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%203/Quizversion3.c",
    },
    {
        title: "Specific area calculator",
        description: "Area based on shape",
        tags: ["Math", "Conditional", "Geometry"],
        slug: "Specificarea",
        path: "Level 3/Specificarea.c",
        link: "/levels/hard",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%203/Specificarea.c",
    },
    {
        title: "Specific operations (switch)",
        description: "Menu-based operations",
        tags: ["Switch", "Operators", "Control Flow"],
        slug: "Specificoperations2",
        path: "Level 3/Specificoperations2.c",
        link: "/levels/hard",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%203/Specificoperations2.c",
    },
    {
        title: "Upper to lowercase (function)",
        description: "Convert using function",
        tags: ["Strings", "Functions", "Text Processing"],
        slug: "Uppertolowercase",
        path: "Level 3/Uppertolowercase.c",
        link: "/levels/hard",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%203/Uppertolowercase.c",
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