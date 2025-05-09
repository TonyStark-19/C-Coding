// css
import '../level-page.css';

// react icons
import { FaCode } from "react-icons/fa6";
import { LiaTagSolid } from "react-icons/lia";

// import navbar
import { Navbar } from '../Mainpage';

// main page
export default function EasyPage() {
    return (
        <div className='container'>
            <Navbar />
            <Hard />
        </div>
    )
}

// program array
const programs = [
    {
        title: "Armstrong number",
        description: "Check if a number is Armstrong",
        tags: ["Math", "Loops", "Conditional"]
    },
    {
        title: "Calculator v1",
        description: "Calculator using functions",
        tags: ["Functions", "Operators"]
    },
    {
        title: "Determinant",
        description: "Find determinant of matrix",
        tags: ["Matrix", "Determinant", "Math"]
    },
    {
        title: "Fibonacci (recursion)",
        description: "Fibonacci using recursion",
        tags: ["Recursion", "Math"]
    },
    {
        title: "Fibonacci (function)",
        description: "Fibonacci using function call",
        tags: ["Functions", "Loops", "Math"]
    },
    {
        title: "Highest char frequency",
        description: "Find most frequent character",
        tags: ["Strings", "Frequency", "Text Processing"]
    },
    {
        title: "Inverse of matrix",
        description: "Inverse of a matrix",
        tags: ["Matrix", "Inverse", "Math"]
    },
    {
        title: "Matrix multiplication (logic)",
        description: "Matrix multiplication using loops",
        tags: ["Matrix", "Loops", "Multiplication"]
    },
    {
        title: "Matrix multiplication (arrays)",
        description: "Matrix multiplication using arrays",
        tags: ["Matrix", "2D Array", "Loops"]
    },
    {
        title: "Number system converter",
        description: "Decimal to other base conversions",
        tags: ["Math", "Conversion", "Number Systems"]
    },
    {
        title: "Quiz v1",
        description: "Quiz logic version 1",
        tags: ["Conditional", "Input/Output", "Logic"]
    },
    {
        title: "Quiz v2",
        description: "Quiz logic version 2",
        tags: ["Conditional", "Input/Output", "Logic"]
    },
    {
        title: "Quiz v3",
        description: "Quiz logic version 3",
        tags: ["Conditional", "Input/Output", "Logic"]
    },
    {
        title: "Specific area calculator",
        description: "Area based on shape",
        tags: ["Math", "Conditional", "Geometry"]
    },
    {
        title: "Specific operations (switch)",
        description: "Menu-based operations",
        tags: ["Switch", "Operators", "Control Flow"]
    },
    {
        title: "Upper to lowercase (function)",
        description: "Convert using function",
        tags: ["Strings", "Functions", "Text Processing"]
    }
];

// hard page content
function Hard() {
    return (
        <div className='easy-level-container'>
            <h1>Level 3 : Advanced</h1>

            <div className='programs-wrap'>
                {programs.map((prog, idx) => (
                    <div className="program-box" key={idx}>
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
                        <button className="code-btn">
                            View code
                            <FaCode className="code-icon" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}