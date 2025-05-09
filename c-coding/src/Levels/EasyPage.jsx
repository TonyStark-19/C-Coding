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
            <Easy />
        </div>
    )
}

// programs array
const programs = [
    {
        title: "(a + b)^2",
        description: "Simple (a+b)^2 calculation",
        topics: ["Variables", "Arithmetic", "Input/Output"],
    },
    {
        title: "All arithmetic operations",
        description: "Perform all basic operations",
        topics: ["Operators", "Variables", "Input/Output"],
    },
    {
        title: "Area of circle",
        description: "Calculate area of a circle",
        topics: ["Math.PI", "Multiplication"],
    },
    {
        title: "Area of rectangle",
        description: "Calculate area of a rectangle",
        topics: ["Multiplication", "Variables"],
    },
    {
        title: "Area of square",
        description: "Calculate area of a square",
        topics: ["Multiplication", "Variables"],
    },
    {
        title: "Average (float)",
        description: "Average using float",
        topics: ["Float", "Input/Output", "Operators"],
    },
    {
        title: "Cube of a number",
        description: "Cube using simple logic",
        topics: ["Multiplication", "Input"],
    },
    {
        title: "Cube using pow()",
        description: "Cube using pow function",
        topics: ["Math.pow()", "Input"],
    },
    {
        title: "License eligibility",
        description: "Check if eligible for a driving license",
        topics: ["Conditional Statements", "Age Check"],
    },
    {
        title: "Find your age",
        description: "Calculate age based on birth year",
        topics: ["Subtraction", "Input", "Current Year"],
    },
    {
        title: "Average (int)",
        description: "Average using integer",
        topics: ["Integer Division", "Input"],
    },
    {
        title: "Odd or Even",
        description: "Check if a number is odd or even",
        topics: ["Modulo Operator", "Conditionals"],
    },
    {
        title: "Pass or Fail",
        description: "Determine pass/fail status",
        topics: ["If-Else", "Comparison"],
    },
    {
        title: "Pass or Fail (ternary)",
        description: "Using ternary operator",
        topics: ["Ternary", "Conditionals"],
    },
    {
        title: "Quotient and Remainder",
        description: "Basic division results",
        topics: ["Division", "Modulo"],
    },
    {
        title: "Rectangle perimeter",
        description: "Calculate perimeter",
        topics: ["Addition", "Multiplication"],
    },
    {
        title: "Remainder only",
        description: "Show remainder",
        topics: ["Modulo", "Input"],
    },
    {
        title: "Smallest number",
        description: "Compare two numbers",
        topics: ["Conditionals", "Comparison"],
    },
    {
        title: "Sum calculation",
        description: "Simple addition",
        topics: ["Addition", "Input/Output"],
    },
    {
        title: "Swapping",
        description: "Swap two numbers",
        topics: ["Temp Variable", "Input"],
    },
    {
        title: "Multiplication table",
        description: "Print table of a number",
        topics: ["Loops", "Multiplication"],
    },
    {
        title: "Upper or Lower case",
        description: "Check case of a character",
        topics: ["ASCII", "Conditionals"],
    },
];

// easy page content
function Easy() {
    return (
        <div className='easy-level-container'>
            <h1>Level 1 : Beginner</h1>

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
                            {prog.topics.map((topic, i) => (
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