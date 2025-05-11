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
        title: "2D Array",
        description: "Print multiplication tables using 2D array",
        tags: ["Arrays", "Loops", "2D Array"],
        slug: "2Darr",
        path: "Level 2/2Darr.c",
        link: "/levels/medium",
    },
    {
        title: "Array (ascending order)",
        description: "Sort an array in ascending order",
        tags: ["Arrays", "Sorting"],
        slug: "arrinascendingorder",
        path: "Level 2/arrinascendingorder.c",
        link: "/levels/medium",
    },
    {
        title: "Matrix operations",
        description: "Basic matrix implementation",
        tags: ["Matrix", "Operations", "2D Array"],
        slug: "Codeformatrix",
        path: "Level 2/Codeformatrix.c",
        link: "/levels/medium",
    },
    {
        title: "Combine strings",
        description: "Concatenate two strings",
        tags: ["Strings", "Concatenation"],
        slug: "Combinestr",
        path: "Level 2/Combinestr.c",
        link: "/levels/medium",
    },
    {
        title: "Days switch-case",
        description: "Day output using switch case",
        tags: ["Switch", "Control Flow"],
        slug: "Days",
        path: "Level 2/Days.c",
        link: "/levels/medium",
    },
    {
        title: "Details input",
        description: "General input program",
        tags: ["Input/Output", "Variables"],
        slug: "detailsinput",
        path: "Level 2/detailsinput.c",
        link: "/levels/medium",
    },
    {
        title: "Digits sum",
        description: "Sum of digits of a number",
        tags: ["Loops", "Math"],
        slug: "Digitssum",
        path: "Level 2/Digitssum.c",
        link: "/levels/medium",
    },
    {
        title: "Discount check 1",
        description: "First version of discount logic",
        tags: ["Conditional", "Discount"],
        slug: "Discount1",
        path: "Level 2/Discount1.c",
        link: "/levels/medium",
    },
    {
        title: "Discount check 2",
        description: "Second version of discount logic",
        tags: ["Conditional", "Discount"],
        slug: "Discount2",
        path: "Level 2/Discount2.c",
        link: "/levels/medium",
    },
    {
        title: "Factorial (loop)",
        description: "Factorial using loops",
        tags: ["Loops", "Math"],
        slug: "Factorial",
        path: "Level 2/Factorial.c",
        link: "/levels/medium",
    },
    {
        title: "Factorial (recursion)",
        description: "Factorial using recursion",
        tags: ["Recursion", "Math"],
        slug: "Factorial2",
        path: "Level 2/Factorial2.c",
        link: "/levels/medium",
    },
    {
        title: "Factors of a number",
        description: "Print all factors",
        tags: ["Math", "Loops"],
        slug: "Factorofnumber",
        path: "Level 2/Factorofnumber.c",
        link: "/levels/medium",
    },
    {
        title: "GCD",
        description: "Greatest Common Divisor",
        tags: ["Math", "Algorithms"],
        slug: "GCD",
        path: "Level 2/GCD.c",
        link: "/levels/medium",
    },
    {
        title: "Grades",
        description: "Grade categorization logic",
        tags: ["Conditional", "Grades"],
        slug: "Grades",
        path: "Level 2/Grades.c",
        link: "/levels/medium",
    },
    {
        title: "Insert into array",
        description: "Insert element in array",
        tags: ["Arrays", "Insertion"],
        slug: "Insertinarray",
        path: "Level 2/Insertinarray.c",
        link: "/levels/medium",
    },
    {
        title: "Is digit or not",
        description: "Check if input is a digit",
        tags: ["Validation", "Characters"],
        slug: "Isdigitornot",
        path: "Level 2/Isdigitornot.c",
        link: "/levels/medium",
    },
    {
        title: "Language output",
        description: "Output based on input language",
        tags: ["Strings", "Switch"],
        slug: "Language",
        path: "Level 2/Language.c",
        link: "/levels/medium",
    },
    {
        title: "Largest in array",
        description: "Find largest element",
        tags: ["Arrays", "Comparison"],
        slug: "Largestinanaaray",
        path: "Level 2/Largestinanaaray.c",
        link: "/levels/medium",
    },
    {
        title: "Multiple results",
        description: "Perform multiple calculations",
        tags: ["Math", "Operators"],
        slug: "Multipleresults",
        path: "Level 2/Multipleresults.c",
        link: "/levels/medium",
    },
    {
        title: "Sum of natural numbers",
        description: "Using loop",
        tags: ["Loops", "Math"],
        slug: "nNaturalsum",
        path: "Level 2/nNaturalsum.c",
        link: "/levels/medium",
    },
    {
        title: "Sum (recursion)",
        description: "Natural sum using recursion",
        tags: ["Recursion", "Math"],
        slug: "nNaturalsum2",
        path: "Level 2/nNaturalsum2.c",
        link: "/levels/medium",
    },
    {
        title: "Odd input stopper",
        description: "Input until odd number entered",
        tags: ["Loops", "Conditional"],
        slug: "OddorEveninp",
        path: "Level 2/OddorEveninp.c",
        link: "/levels/medium",
    },
    {
        title: "Palindrome check",
        description: "Check if a number is palindrome",
        tags: ["Palindrome", "Conditional"],
        slug: "Palindromeornot",
        path: "Level 2/Palindromeornot.c",
        link: "/levels/medium",
    },
    {
        title: "Patterns",
        description: "Print square pattern",
        tags: ["Loops", "Patterns"],
        slug: "Patterns",
        path: "Level 2/Patterns.c",
        link: "/levels/medium",
    },
    {
        title: "Petrol price calculator",
        description: "Price calculation",
        tags: ["Math", "Operators"],
        slug: "Petrolpricecal",
        path: "Level 2/Petrolpricecal.c",
        link: "/levels/medium",
    },
    {
        title: "Pointer syntax",
        description: "Example of pointer usage",
        tags: ["Pointers", "Syntax"],
        slug: "Pointersyntaxx",
        path: "Level 2/Pointersyntaxx.c",
        link: "/levels/medium",
    },
    {
        title: "Power function",
        description: "Calculate x^n",
        tags: ["Math", "Functions"],
        slug: "Powerfunction",
        path: "Level 2/Powerfunction.c",
        link: "/levels/medium",
    },
    {
        title: "Prime in range",
        description: "Print prime numbers in range",
        tags: ["Loops", "Prime"],
        slug: "Primenumberinarange",
        path: "Level 2/Primenumberinarange.c",
        link: "/levels/medium",
    },
    {
        title: "Prime check",
        description: "Check if number is prime",
        tags: ["Conditional", "Math"],
        slug: "Primeornot",
        path: "Level 2/Primeornot.c",
        link: "/levels/medium",
    },
    {
        title: "Remove spaces",
        description: "Remove spaces from string",
        tags: ["Strings", "Text Processing"],
        slug: "Removespaces",
        path: "Level 2/Removespaces.c",
        link: "/levels/medium",
    },
    {
        title: "Reverse array",
        description: "Reverse elements of array",
        tags: ["Arrays", "Loops"],
        slug: "Reversearray",
        path: "Level 2/Reversearray.c",
        link: "/levels/medium",
    },
    {
        title: "Simple Interest",
        description: "Calculate simple interest",
        tags: ["Math", "Finance"],
        slug: "SI",
        path: "Level 2/SI.c",
        link: "/levels/medium",
    },
    {
        title: "Specific operator",
        description: "Use switch for specific operations",
        tags: ["Switch", "Math"],
        slug: "specificoperator",
        path: "Level 2/specificoperator.c",
        link: "/levels/medium",
    },
    {
        title: "Square root",
        description: "Calculate square root",
        tags: ["Math", "Functions"],
        slug: "Squarerootofanynumber",
        path: "Level 2/Squarerootofanynumber.c",
        link: "/levels/medium",
    },
    {
        title: "Sum of matrices",
        description: "Add two matrices",
        tags: ["Matrix", "Addition"],
        slug: "Sumofmatrix",
        path: "Level 2/Sumofmatrix.c",
        link: "/levels/medium",
    },
    {
        title: "Temperature conversion",
        description: "Celsius to Fahrenheit",
        tags: ["Math", "Conversion"],
        slug: "Temperatureconv",
        path: "Level 2/Temperatureconv.c",
        link: "/levels/medium",
    },
    {
        title: "Total price",
        description: "Price calculation of items",
        tags: ["Math", "Finance"],
        slug: "Totalprice",
        path: "Level 2/Totalprice.c",
        link: "/levels/medium",
    },
    {
        title: "Transpose of matrix",
        description: "Matrix transpose",
        tags: ["Matrix", "Transpose"],
        slug: "Transposeofmatrix",
        path: "Level 2/Transposeofmatrix.c",
        link: "/levels/medium",
    },
    {
        title: "Uppercase conversion",
        description: "Convert to uppercase",
        tags: ["Strings", "Text Processing"],
        slug: "uppercaseconversion",
        path: "Level 2/uppercaseconversion.c",
        link: "/levels/medium",
    },
    {
        title: "Various input (struct)",
        description: "Input using structure",
        tags: ["Structures", "Input"],
        slug: "Variousinput",
        path: "Level 2/Variousinput.c",
        link: "/levels/medium",
    },
    {
        title: "Vowel count",
        description: "Count vowels in string",
        tags: ["Strings", "Loops"],
        slug: "vowelscount",
        path: "Level 2/vowelscount.c",
        link: "/levels/medium",
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
            <Medium />
        </div>
    )
}

// medium page content
function Medium() {
    return (
        <div className='easy-level-container'>
            <h1 data-aos="fade-down">Level 2 : Intermediate</h1>

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