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

// programs array
export const programs = [
    {
        title: "(a + b)^2",
        description: "Simple (a+b)^2 calculation",
        topics: ["Variables", "Arithmetic", "Input/Output"],
        slug: "aandbsquare",
        path: "Level 1/aandbsquare.c",
    },
    {
        title: "All arithmetic operations",
        description: "Perform all basic operations",
        topics: ["Operators", "Variables", "Input/Output"],
        slug: "Allopatsametime",
        path: "Level 1/Allopatsametime.c",
    },
    {
        title: "Area of circle",
        description: "Calculate area of a circle",
        topics: ["Math.PI", "Multiplication"],
        slug: "Areaofcircle",
        path: "Level 1/Areaofcircle.c",
    },
    {
        title: "Area of rectangle",
        description: "Calculate area of a rectangle",
        topics: ["Multiplication", "Variables"],
        slug: "Areaofrectangle",
        path: "Level 1/Areaofrectangle.c",
    },
    {
        title: "Area of square",
        description: "Calculate area of a square",
        topics: ["Multiplication", "Variables"],
        slug: "Areaofsquare",
        path: "Level 1/Areaofsquare.c",
    },
    {
        title: "Average (float)",
        description: "Average using float",
        topics: ["Float", "Input/Output", "Operators"],
        slug: "avgfinder2",
        path: "Level 1/avgfinder2.c",
    },
    {
        title: "Cube of a number",
        description: "Cube using simple logic",
        topics: ["Multiplication", "Input"],
        slug: "cubeofanynumber",
        path: "Level 1/cubeofanynumber.c",
    },
    {
        title: "Cube using pow()",
        description: "Cube using pow function",
        topics: ["Math.pow()", "Input"],
        slug: "cubeofanynumber2",
        path: "Level 1/cubeofanynumber2.c",
    },
    {
        title: "License eligibility",
        description: "Check if eligible for a driving license",
        topics: ["Conditional Statements", "Age Check"],
        slug: "eligibleforlicense",
        path: "Level 1/eligibleforlicense.c",
    },
    {
        title: "Find your age",
        description: "Calculate age based on birth year",
        topics: ["Subtraction", "Input", "Current Year"],
        slug: "Findyourage",
        path: "Level 1/Findyourage.c",
    },
    {
        title: "Average (int)",
        description: "Average using integer",
        topics: ["Integer Division", "Input"],
        slug: "intavg",
        path: "Level 1/intavg.c",
    },
    {
        title: "Odd or Even",
        description: "Check if a number is odd or even",
        topics: ["Modulo Operator", "Conditionals"],
        slug: "oddeven",
        path: "Level 1/oddeven.c",
    },
    {
        title: "Pass or Fail",
        description: "Determine pass/fail status",
        topics: ["If-Else", "Comparison"],
        slug: "Passorfail1",
        path: "Level 1/Passorfail1.c",
    },
    {
        title: "Pass or Fail (ternary)",
        description: "Using ternary operator",
        topics: ["Ternary", "Conditionals"],
        slug: "PassorFail2",
        path: "Level 1/PassorFail2.c",
    },
    {
        title: "Quotient and Remainder",
        description: "Basic division results",
        topics: ["Division", "Modulo"],
        slug: "QandR",
        path: "Level 1/QandR.c",
    },
    {
        title: "Rectangle perimeter",
        description: "Calculate perimeter",
        topics: ["Addition", "Multiplication"],
        slug: "rectangleperimeter",
        path: "Level 1/rectangleperimeter.c",
    },
    {
        title: "Remainder only",
        description: "Show remainder",
        topics: ["Modulo", "Input"],
        slug: "Remainder",
        path: "Level 1/Remainder.c",
    },
    {
        title: "Smallest number",
        description: "Compare two numbers",
        topics: ["Conditionals", "Comparison"],
        slug: "smallestnum",
        path: "Level 1/smallestnum.c",
    },
    {
        title: "Sum calculation",
        description: "Simple addition",
        topics: ["Addition", "Input/Output"],
        slug: "Sumcal",
        path: "Level 1/Sumcal.c",
    },
    {
        title: "Swapping",
        description: "Swap two numbers",
        topics: ["Temp Variable", "Input"],
        slug: "swapping",
        path: "Level 1/swapping.c",
    },
    {
        title: "Multiplication table",
        description: "Print table of a number",
        topics: ["Loops", "Multiplication"],
        slug: "Tables",
        path: "Level 1/Tables.c",
    },
    {
        title: "Upper or Lower case",
        description: "Check case of a character",
        topics: ["ASCII", "Conditionals"],
        slug: "Upperorlowercase",
        path: "Level 1/Upperorlowercase.c",
    },
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
            <Easy />
        </div>
    )
}

// easy page content
function Easy() {
    return (
        <div className='easy-level-container'>
            <h1 data-aos="fade-down">Level 1 : Beginner</h1>

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
                            {prog.topics.map((topic, i) => (
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