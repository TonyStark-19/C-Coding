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
import { BackToTop } from './EasyPage';

// programs array
export const programs = [
    {
        title: "2D Array",
        description: "Generate and print multiplication tables using a two-dimensional array",
        tags: ["Arrays", "Loops", "2D Array"],
        slug: "2d-array-multiplication-tables",
        path: "Level 2/2Darr.c",
        link: "/levels/medium",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%202/2Darr.c",
    },
    {
        title: "Array (ascending order)",
        description: "Sort an array of integers in ascending order using basic sorting techniques",
        tags: ["Arrays", "Sorting", "Loops"],
        slug: "array-sorting-ascending",
        path: "Level 2/arrinascendingorder.c",
        link: "/levels/medium",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%202/arrinascendingorder.c",
    },
    {
        title: "Matrix Operations",
        description: "Implement basic matrix operations using 2D arrays",
        tags: ["Matrix", "Operations", "2D Array"],
        slug: "matrix-operations-2d-array",
        path: "Level 2/Codeformatrix.c",
        link: "/levels/medium",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%202/Codeformatrix.c",
    },
    {
        title: "String Concatenation",
        description: "Combine and concatenate two input strings",
        tags: ["Strings", "Concatenation", "Input/Output"],
        slug: "string-concatenation",
        path: "Level 2/Combinestr.c",
        link: "/levels/medium",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%202/Combinestr.c",
    },
    {
        title: "Day of the Week",
        description: "Display the day of the week based on a number using switch-case control",
        tags: ["Switch", "Control Flow", "Days"],
        slug: "day-of-week-switch-case",
        path: "Level 2/Days.c",
        link: "/levels/medium",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%202/Days.c",
    },
    {
        title: "User Details Input",
        description: "Take input for multiple user details and display them",
        tags: ["Input/Output", "Variables", "Strings"],
        slug: "user-details-input",
        path: "Level 2/detailsinput.c",
        link: "/levels/medium",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%202/detailsinput.c",
    },
    {
        title: "Sum of Digits",
        description: "Calculate the sum of all digits of an entered number",
        tags: ["Loops", "Math", "Digits"],
        slug: "sum-of-digits",
        path: "Level 2/Digitssum.c",
        link: "/levels/medium",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%202/Digitssum.c",
    },
    {
        title: "Discount Eligibility Check 1",
        description: "Check if a customer is eligible for a discount based on simple conditions",
        tags: ["Conditional", "Discount", "Logic"],
        slug: "discount-check-version-1",
        path: "Level 2/Discount1.c",
        link: "/levels/medium",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%202/Discount1.c",
    },
    {
        title: "Discount Eligibility Check 2",
        description: "Enhanced logic for checking discount eligibility using multiple conditions",
        tags: ["Conditional", "Discount", "Logic"],
        slug: "discount-check-version-2",
        path: "Level 2/Discount2.c",
        link: "/levels/medium",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%202/Discount2.c",
    },
    {
        title: "Factorial Using Loop",
        description: "Calculate factorial of a number using iterative loops",
        tags: ["Loops", "Math", "Factorial"],
        slug: "factorial-using-loop",
        path: "Level 2/Factorial.c",
        link: "/levels/medium",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%202/Factorial.c",
    },
    {
        title: "Factorial Using Recursion",
        description: "Calculate factorial of a number using recursion logic",
        tags: ["Recursion", "Math", "Factorial"],
        slug: "factorial-using-recursion",
        path: "Level 2/Factorial2.c",
        link: "/levels/medium",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%202/Factorial2.c",
    },
    {
        title: "Factors of a number",
        description: "To find the factors which divides the given number",
        tags: ["Math", "Loops", "Factors"],
        slug: "Factor-of-number",
        path: "Level 2/Factorofnumber.c",
        link: "/levels/medium",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%202/Factorofnumber.c",
    },
    {
        title: "Greatest Common Divisor (GCD)",
        description: "To find Greatest Common Divisor (GCD) of a given number",
        tags: ["Math", "Algorithms", "GCD"],
        slug: "Greatest-Common-Divisor",
        path: "Level 2/GCD.c",
        link: "/levels/medium",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%202/GCD.c",
    },
    {
        title: "Grades for students",
        description: "To find Grades as per the marks of a student",
        tags: ["Conditional", "Grades", "Logic"],
        slug: "Grades",
        path: "Level 2/Grades.c",
        link: "/levels/medium",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%202/Grades.c",
    },
    {
        title: "Insert into array",
        description: "Insert an element at the end of an array",
        tags: ["Arrays", "Insertion", "Loops"],
        slug: "Insert-into-array",
        path: "Level 2/Insertinarray.c",
        link: "/levels/medium",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%202/Insertinarray.c",
    },
    {
        title: "Is digit or not",
        description: "To check whether the user input is a digit or not",
        tags: ["Validation", "Characters", "Condition"],
        slug: "Is-digit-or-not",
        path: "Level 2/Isdigitornot.c",
        link: "/levels/medium",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%202/Isdigitornot.c",
    },
    {
        title: "Language output",
        description: "To print greetings based on the language input",
        tags: ["Strings", "Switch", "Functions"],
        slug: "Language-output",
        path: "Level 2/Language.c",
        link: "/levels/medium",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%202/Language.c",
    },
    {
        title: "Largest in array",
        description: "To find the largest element in a array",
        tags: ["Arrays", "Comparison", "Largest"],
        slug: "Largest-in-an-aaray",
        path: "Level 2/Largestinanaaray.c",
        link: "/levels/medium",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%202/Largestinanaaray.c",
    },
    {
        title: "Multiple results",
        description: "To perform multiple calculations for a single set of values",
        tags: ["Math", "Operators", "Functions"],
        slug: "Multiple-results",
        path: "Level 2/Multipleresults.c",
        link: "/levels/medium",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%202/Multipleresults.c",
    },
    {
        title: "Sum of natural numbers",
        description: "To calculate the natural sum of n values using loop",
        tags: ["Loops", "Math", "Sum"],
        slug: "n-Natural-sum",
        path: "Level 2/nNaturalsum.c",
        link: "/levels/medium",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%202/nNaturalsum.c",
    },
    {
        title: "Sum using recursion",
        description: "To calculate the natural sum of n values using recursion",
        tags: ["Recursion", "Math", "Sum"],
        slug: "n-Natural-sum2",
        path: "Level 2/nNaturalsum2.c",
        link: "/levels/medium",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%202/nNaturalsum2.c",
    },
    {
        title: "Odd input stopper",
        description: "To take user input until user enters an odd number",
        tags: ["Loops", "Conditional", "Input"],
        slug: "Odd-or-Even-input",
        path: "Level 2/OddorEveninp.c",
        link: "/levels/medium",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%202/OddorEveninp.c",
    },
    {
        title: "Palindrome number",
        description: "To check if the given number is palindrome or not",
        tags: ["Palindrome", "Conditional", "Loops"],
        slug: "Palindrome-or-not",
        path: "Level 2/Palindromeornot.c",
        link: "/levels/medium",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%202/Palindromeornot.c",
    },
    {
        title: "Square star pattern",
        description: "To print a square star pattern using loops",
        tags: ["Loops", "Patterns", "Logic"],
        slug: "Square-patterns",
        path: "Level 2/Patterns.c",
        link: "/levels/medium",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%202/Patterns.c",
    },
    {
        title: "Petrol price calculator",
        description: "To calculate the price of petrol using certain inputs",
        tags: ["Math", "Operators", "Logic"],
        slug: "Petrol-price-cal",
        path: "Level 2/Petrolpricecal.c",
        link: "/levels/medium",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%202/Petrolpricecal.c",
    },
    {
        title: "Pointer syntax",
        description: "The syntax of pointer and some basic operations on pointers",
        tags: ["Pointers", "Syntax", "Operations"],
        slug: "Pointer-syntax",
        path: "Level 2/Pointersyntaxx.c",
        link: "/levels/medium",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%202/Pointersyntaxx.c",
    },
    {
        title: "Power function",
        description: "To calculate x^n using my own power function",
        tags: ["Math", "Functions", "Loops"],
        slug: "Power-function",
        path: "Level 2/Powerfunction.c",
        link: "/levels/medium",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%202/Powerfunction.c",
    },
    {
        title: "Prime number in range",
        description: "To print all prime numbers upto a given range",
        tags: ["Loops", "Prime", "Conditions"],
        slug: "Prime-number-in-a-range",
        path: "Level 2/Primenumberinarange.c",
        link: "/levels/medium",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%202/Primenumberinarange.c",
    },
    {
        title: "Prime check",
        description: "To check if a given number is prime number or not",
        tags: ["Conditional", "Math", "Loops"],
        slug: "Prime-or-not",
        path: "Level 2/Primeornot.c",
        link: "/levels/medium",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%202/Primeornot.c",
    },
    {
        title: "Remove spaces",
        description: "To remove any spaces from a given string",
        tags: ["Strings", "Text Processing", "Functions"],
        slug: "Remove-spaces",
        path: "Level 2/Removespaces.c",
        link: "/levels/medium",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%202/Removespaces.c",
    },
    {
        title: "Reverse array",
        description: "To reverse the elements of a given array",
        tags: ["Arrays", "Loops", "Functions"],
        slug: "Reverse-array",
        path: "Level 2/Reversearray.c",
        link: "/levels/medium",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%202/Reversearray.c",
    },
    {
        title: "Simple Interest",
        description: "To calculate simple interest for a amount of money",
        tags: ["Math", "Finance", "Logic"],
        slug: "Simple-interest",
        path: "Level 2/SI.c",
        link: "/levels/medium",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%202/SI.c",
    },
    {
        title: "Specific operator",
        description: "To use switch case to perform specific math operations",
        tags: ["Switch", "Math", "Operations"],
        slug: "specific-operator",
        path: "Level 2/specificoperator.c",
        link: "/levels/medium",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%202/specificoperator.c",
    },
    {
        title: "Square root",
        description: "To calculate square root of a given number",
        tags: ["Math", "Functions", "Loops"],
        slug: "Square-root-of-anynumber",
        path: "Level 2/Squarerootofanynumber.c",
        link: "/levels/medium",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%202/Squarerootofanynumber.c",
    },
    {
        title: "Sum of matrices",
        description: "To add two given matrices of order 3 using arrays",
        tags: ["Matrix", "Addition", "Arrays"],
        slug: "Sum-of-matrix",
        path: "Level 2/Sumofmatrix.c",
        link: "/levels/medium",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%202/Sumofmatrix.c",
    },
    {
        title: "Temperature conversion",
        description: "To connvert temperature in degree Celsius to degree Fahrenheit",
        tags: ["Math", "Conversion", "Functions"],
        slug: "Temperature-conversion",
        path: "Level 2/Temperatureconv.c",
        link: "/levels/medium",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%202/Temperatureconv.c",
    },
    {
        title: "Total price",
        description: "To calculate total price of items after adding GST",
        tags: ["Math", "Finance", "Loops"],
        slug: "Total-price",
        path: "Level 2/Totalprice.c",
        link: "/levels/medium",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%202/Totalprice.c",
    },
    {
        title: "Transpose of matrix",
        description: "To find the transpose of a given matrix",
        tags: ["Matrix", "Transpose", "Loops"],
        slug: "Transpose-of-matrix",
        path: "Level 2/Transposeofmatrix.c",
        link: "/levels/medium",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%202/Transposeofmatrix.c",
    },
    {
        title: "Uppercase conversion",
        description: "To convert the given string to uppercase",
        tags: ["Strings", "Text Processing", "Functions"],
        slug: "uppercase-conversion",
        path: "Level 2/uppercaseconversion.c",
        link: "/levels/medium",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%202/uppercaseconversion.c",
    },
    {
        title: "Various input using structure",
        description: "To take user inputs using structure",
        tags: ["Structures", "Input", "Loops"],
        slug: "Various-input",
        path: "Level 2/Variousinput.c",
        link: "/levels/medium",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%202/Variousinput.c",
    },
    {
        title: "Vowel count",
        description: "To count the total vowels in a given string",
        tags: ["Strings", "Loops", "Functions"],
        slug: "vowels-count",
        path: "Level 2/vowelscount.c",
        link: "/levels/medium",
        gitUrl: "https://github.com/TonyStark-19/C-Coding/blob/main/c-coding/public/code/Level%202/vowelscount.c",
    }
];

// main page
export default function EasyPage() {
    // AOS Animation
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
            <Medium />
            <Footer />
        </div>
    )
}

// medium page content
function Medium() {
    return (
        <div className='easy-level-container'>
            <BackToTop />
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
                            {prog.tags.map((tags, i) => (
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