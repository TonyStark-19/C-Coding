// css
import '../css/level-page.css';

// import link
import { Link } from 'react-router-dom';

// AOS animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// import hooks
import { useEffect, useState } from 'react';

// React Icons
import { FiCode, FiTag, FiArrowRight, FiSearch } from 'react-icons/fi';

// import navbar and footer
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

// import back to top button
import { BackToTop } from '../components/Backtotop';

// programs array
export const programs = [
    {
        title: "Square of (a + b)",
        description: "Calculate the square of the sum of two numbers using (a + b)^2 formula.",
        topics: ["Arithmetic", "Variables", "User Input"],
        slug: "square-of-a-plus-b",
        path: "Level 1/aandbsquare.c",
        link: "/levels/easy",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%201/aandbsquare.c",
    },
    {
        title: "All Arithmetic Operations",
        description: "Perform addition, subtraction, multiplication, and division on two numbers.",
        topics: ["Operators", "Variables", "User Input"],
        slug: "all-arithmetic-operations",
        path: "Level 1/Allopatsametime.c",
        link: "/levels/easy",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%201/Allopatsametime.c",
    },
    {
        title: "Area of a Circle",
        description: "Calculate the area of a circle using the radius and formula πr².",
        topics: ["Mathematical Formula", "Constants", "Variables"],
        slug: "area-of-circle",
        path: "Level 1/Areaofcircle.c",
        link: "/levels/easy",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%201/Areaofcircle.c",
    },
    {
        title: "Area of a Rectangle",
        description: "Calculate the area of a rectangle using length and breadth.",
        topics: ["Multiplication", "Variables", "User Input"],
        slug: "area-of-rectangle",
        path: "Level 1/Areaofrectangle.c",
        link: "/levels/easy",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%201/Areaofrectangle.c",
    },
    {
        title: "Area of a Square",
        description: "Calculate the area of a square given its side length.",
        topics: ["Multiplication", "Variables", "User Input"],
        slug: "area-of-square",
        path: "Level 1/Areaofsquare.c",
        link: "/levels/easy",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%201/Areaofsquare.c",
    },
    {
        title: "Average (Float)",
        description: "Calculate the average of numbers using floating-point division.",
        topics: ["Floating Point", "Arithmetic", "User Input"],
        slug: "average-float",
        path: "Level 1/avgfinder2.c",
        link: "/levels/easy",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%201/avgfinder2.c",
    },
    {
        title: "Cube of a Number",
        description: "Find the cube of a number using multiplication.",
        topics: ["Multiplication", "User Input", "Logic"],
        slug: "cube-of-number",
        path: "Level 1/cubeofanynumber.c",
        link: "/levels/easy",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%201/cubeofanynumber.c",
    },
    {
        title: "Cube using pow() Function",
        description: "Find the cube of a number using the pow() function.",
        topics: ["Math Functions", "User Input", "Libraries"],
        slug: "cube-using-pow",
        path: "Level 1/cubeofanynumber2.c",
        link: "/levels/easy",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%201/cubeofanynumber2.c",
    },
    {
        title: "Driving License Eligibility",
        description: "Check if the user is eligible for a driving license based on age.",
        topics: ["Conditional Statements", "Age Validation", "User Input"],
        slug: "license-eligibility",
        path: "Level 1/eligibleforlicense.c",
        link: "/levels/easy",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%201/eligibleforlicense.c",
    },
    {
        title: "Calculate Age",
        description: "Determine current age from the birth year.",
        topics: ["Subtraction", "Year Calculation", "Input/Output"],
        slug: "calculate-age",
        path: "Level 1/Findyourage.c",
        link: "/levels/easy",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%201/Findyourage.c",
    },
    {
        title: "Average (Integer)",
        description: "Calculate average using integer division.",
        topics: ["Integer Division", "Variables", "Input"],
        slug: "average-integer",
        path: "Level 1/intavg.c",
        link: "/levels/easy",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%201/intavg.c",
    },
    {
        title: "Odd or Even Checker",
        description: "Check if a number is odd or even using the modulo operator.",
        topics: ["Modulo Operator", "Conditionals", "Input"],
        slug: "odd-or-even",
        path: "Level 1/oddeven.c",
        link: "/levels/easy",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%201/oddeven.c",
    },
    {
        title: "Pass or Fail (if-else)",
        description: "Determine pass/fail status using if-else conditions.",
        topics: ["If-Else", "Marks Evaluation", "Input"],
        slug: "pass-or-fail-if-else",
        path: "Level 1/Passorfail1.c",
        link: "/levels/easy",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%201/Passorfail1.c",
    },
    {
        title: "Pass or Fail (Ternary)",
        description: "Check pass/fail using ternary operator.",
        topics: ["Ternary Operator", "Conditional Logic", "Input"],
        slug: "pass-or-fail-ternary",
        path: "Level 1/PassorFail2.c",
        link: "/levels/easy",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%201/PassorFail2.c",
    },
    {
        title: "Quotient and Remainder",
        description: "Compute quotient and remainder of division.",
        topics: ["Division", "Modulo", "Arithmetic"],
        slug: "quotient-and-remainder",
        path: "Level 1/QandR.c",
        link: "/levels/easy",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%201/QandR.c",
    },
    {
        title: "Rectangle Perimeter",
        description: "Calculate the perimeter of a rectangle.",
        topics: ["Addition", "Multiplication", "Geometry"],
        slug: "rectangle-perimeter",
        path: "Level 1/rectangleperimeter.c",
        link: "/levels/easy",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%201/rectangleperimeter.c",
    },
    {
        title: "Find Remainder",
        description: "Get the remainder of a division operation.",
        topics: ["Modulo", "Variables", "Input"],
        slug: "find-remainder",
        path: "Level 1/Remainder.c",
        link: "/levels/easy",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%201/Remainder.c",
    },
    {
        title: "Find Smallest Number",
        description: "Compare two numbers to find the smaller one.",
        topics: ["Comparison", "Conditional Logic", "Input"],
        slug: "smallest-number",
        path: "Level 1/smallestnum.c",
        link: "/levels/easy",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%201/smallestnum.c",
    },
    {
        title: "Sum of Two Numbers",
        description: "Add two numbers entered by the user.",
        topics: ["Addition", "User Input", "Variables"],
        slug: "sum-of-two-numbers",
        path: "Level 1/Sumcal.c",
        link: "/levels/easy",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%201/Sumcal.c",
    },
    {
        title: "Swapping Two Numbers",
        description: "Swap values of two variables.",
        topics: ["Variables", "Swapping Logic", "Input"],
        slug: "swap-two-numbers",
        path: "Level 1/swaping.c",
        link: "/levels/easy",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%201/swaping.c",
    },
    {
        title: "Multiplication Table",
        description: "Print the multiplication table of a given number.",
        topics: ["Loops", "Multiplication", "User Input"],
        slug: "multiplication-table",
        path: "Level 1/Tables.c",
        link: "/levels/easy",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%201/Tables.c",
    },
    {
        title: "Check Case of Character",
        description: "Determine whether a character is uppercase or lowercase.",
        topics: ["Characters", "Conditionals", "Input"],
        slug: "check-character-case",
        path: "Level 1/Upperorlowercase.c",
        link: "/levels/easy",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%201/Upperorlowercase.c",
    }
];

// easy page component
export default function EasyPage() {
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    // filter programs
    const filteredPrograms = programs.filter((prog) => {
        const matchesSearch =
            prog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            prog.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesSearch;
    });

    return (
        <div className="main-wrapper">
            {/* navbar */}
            <Navbar />

            <main className="level-page-container easy-theme">
                {/* Scroll To Top Action */}
                <BackToTop />

                {/* Page Header */}
                <header
                    className="level-header-title"
                    data-aos="fade-down"
                >
                    <div className="header-meta">
                        <span className="level-badge badge-easy">Level 01</span>
                        <span className="count-pill">{programs.length} Programs</span>
                    </div>

                    <h1>Beginner Fundamentals</h1>
                    <p>Foundational C programs focusing on syntax, variables, basic arithmetic, and control flow.</p>

                    {/* Search Bar */}
                    <div className="search-box-wrapper">
                        <FiSearch className="search-icon" />

                        <input
                            type="text"
                            placeholder="Search beginner programs..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                    </div>
                </header>

                {/* Programs Grid / Stack */}
                <div className="programs-grid-list">
                    {filteredPrograms.length > 0 ? (
                        filteredPrograms.map((prog, idx) => (
                            <div
                                className="program-card-premium tier-easy"
                                data-aos="fade-up"
                                key={prog.slug || idx}
                            >
                                <div className="card-left">
                                    <div className="card-icon-mini easy-accent">
                                        <FiCode />
                                    </div>

                                    <div className="card-text">
                                        <h3>{prog.title}</h3>
                                        <p>{prog.description}</p>

                                        <div className="topics-pill-container">
                                            <FiTag className="tag-icon" />

                                            {(prog.topics || prog.tags || []).map((tag, i) => (
                                                <span
                                                    className="topic-pill"
                                                    key={i}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <Link
                                    to={`/programs/${prog.slug}`}
                                    className="view-btn-link"
                                >
                                    <button className="action-view-btn easy-btn">
                                        <span>View Code</span>
                                        <FiArrowRight className="btn-arrow-icon" />
                                    </button>
                                </Link>
                            </div>
                        ))
                    ) : (
                        <div className="no-results">
                            <p>No beginner programs matching "{searchTerm}".</p>
                        </div>
                    )}
                </div>
            </main>

            {/* footer */}
            <Footer />
        </div>
    );
}