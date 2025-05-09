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
            <Medium />
        </div>
    )
}

// programs array
const programs = [
    {
        title: "2D Array",
        description: "Print multiplication tables using 2D array",
        tags: ["Arrays", "Loops", "2D Array"]
    },
    {
        title: "Array (ascending order)",
        description: "Sort an array in ascending order",
        tags: ["Arrays", "Sorting"]
    },
    {
        title: "Matrix operations",
        description: "Basic matrix implementation",
        tags: ["Matrix", "Operations", "2D Array"]
    },
    {
        title: "Combine strings",
        description: "Concatenate two strings",
        tags: ["Strings", "Concatenation"]
    },
    {
        title: "Days switch-case",
        description: "Day output using switch case",
        tags: ["Switch", "Control Flow"]
    },
    {
        title: "Details input",
        description: "General input program",
        tags: ["Input/Output", "Variables"]
    },
    {
        title: "Digits sum",
        description: "Sum of digits of a number",
        tags: ["Loops", "Math"]
    },
    {
        title: "Discount check 1",
        description: "First version of discount logic",
        tags: ["Conditional", "Discount"]
    },
    {
        title: "Discount check 2",
        description: "Second version of discount logic",
        tags: ["Conditional", "Discount"]
    },
    {
        title: "Factorial (loop)",
        description: "Factorial using loops",
        tags: ["Loops", "Math"]
    },
    {
        title: "Factorial (recursion)",
        description: "Factorial using recursion",
        tags: ["Recursion", "Math"]
    },
    {
        title: "Factors of a number",
        description: "Print all factors",
        tags: ["Math", "Loops"]
    },
    {
        title: "GCD",
        description: "Greatest Common Divisor",
        tags: ["Math", "Algorithms"]
    },
    {
        title: "Grades",
        description: "Grade categorization logic",
        tags: ["Conditional", "Grades"]
    },
    {
        title: "Insert into array",
        description: "Insert element in array",
        tags: ["Arrays", "Insertion"]
    },
    {
        title: "Is digit or not",
        description: "Check if input is a digit",
        tags: ["Validation", "Characters"]
    },
    {
        title: "Language output",
        description: "Output based on input language",
        tags: ["Strings", "Switch"]
    },
    {
        title: "Largest in array",
        description: "Find largest element",
        tags: ["Arrays", "Comparison"]
    },
    {
        title: "Multiple results",
        description: "Perform multiple calculations",
        tags: ["Math", "Operators"]
    },
    {
        title: "Sum of natural numbers",
        description: "Using loop",
        tags: ["Loops", "Math"]
    },
    {
        title: "Sum (recursion)",
        description: "Natural sum using recursion",
        tags: ["Recursion", "Math"]
    },
    {
        title: "Odd input stopper",
        description: "Input until odd number entered",
        tags: ["Loops", "Conditional"]
    },
    {
        title: "Palindrome check",
        description: "Check if a number is palindrome",
        tags: ["Palindrome", "Conditional"]
    },
    {
        title: "Patterns",
        description: "Print square pattern",
        tags: ["Loops", "Patterns"]
    },
    {
        title: "Petrol price calculator",
        description: "Price calculation",
        tags: ["Math", "Operators"]
    },
    {
        title: "Pointer syntax",
        description: "Example of pointer usage",
        tags: ["Pointers", "Syntax"]
    },
    {
        title: "Power function",
        description: "Calculate x^n",
        tags: ["Math", "Functions"]
    },
    {
        title: "Prime in range",
        description: "Print prime numbers in range",
        tags: ["Loops", "Prime"]
    },
    {
        title: "Prime check",
        description: "Check if number is prime",
        tags: ["Conditional", "Math"]
    },
    {
        title: "Remove spaces",
        description: "Remove spaces from string",
        tags: ["Strings", "Text Processing"]
    },
    {
        title: "Reverse array",
        description: "Reverse elements of array",
        tags: ["Arrays", "Loops"]
    },
    {
        title: "Simple Interest",
        description: "Calculate simple interest",
        tags: ["Math", "Finance"]
    },
    {
        title: "Specific operator",
        description: "Use switch for specific operations",
        tags: ["Switch", "Math"]
    },
    {
        title: "Square root",
        description: "Calculate square root",
        tags: ["Math", "Functions"]
    },
    {
        title: "Sum of matrices",
        description: "Add two matrices",
        tags: ["Matrix", "Addition"]
    },
    {
        title: "Temperature conversion",
        description: "Celsius to Fahrenheit",
        tags: ["Math", "Conversion"]
    },
    {
        title: "Total price",
        description: "Price calculation of items",
        tags: ["Math", "Finance"]
    },
    {
        title: "Transpose of matrix",
        description: "Matrix transpose",
        tags: ["Matrix", "Transpose"]
    },
    {
        title: "Uppercase conversion",
        description: "Convert to uppercase",
        tags: ["Strings", "Text Processing"]
    },
    {
        title: "Various input (struct)",
        description: "Input using structure",
        tags: ["Structures", "Input"]
    },
    {
        title: "Vowel count",
        description: "Count vowels in string",
        tags: ["Strings", "Loops"]
    }
];

// medium page content
function Medium() {
    return (
        <div className='easy-level-container'>
            <h1>Level 2 : Intermediate</h1>

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