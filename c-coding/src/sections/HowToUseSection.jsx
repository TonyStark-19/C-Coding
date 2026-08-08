// import icons
import { FiTarget, FiEdit3, FiEye, FiZap, FiCheckCircle } from 'react-icons/fi';

// import css
import '../css/HowToUseSection.css';

// steps data
const steps = [
    {
        number: "01",
        icon: <FiTarget />,
        title: "Read the Problem Statement",
        desc: "Pick a program from Easy, Medium, or Hard level. Focus on understanding the input, required processing, and expected output before touching code."
    },
    {
        number: "02",
        icon: <FiEdit3 />,
        title: "Attempt Solving First",
        desc: "Practice is key. Open your compiler or IDE and try building the logic from scratch independently — even if you get stuck or hit syntax errors."
    },
    {
        number: "03",
        icon: <FiEye />,
        title: "Compare with Solution",
        desc: "Reveal the C source code on the platform to verify your approach, analyze line-by-line logic, and discover optimized coding patterns."
    },
    {
        number: "04",
        icon: <FiZap />,
        title: "Extract Key Concepts",
        desc: "Every program is designed to teach specific low-level concepts: memory pointers, loop bounds, ASCII math, or recursive stack calls."
    }
];

// how tu use section
export default function HowToUseSection() {
    return (
        <section
            className="how-to-use-section"
            id="how-to-use"
        >
            <div className="how-container">
                {/* Section Header */}
                <div
                    className="how-header"
                    data-aos="fade-up"
                >
                    <div className="section-badge alt-badge">
                        <FiCheckCircle className="badge-icon" />
                        <span>Recommended Workflow</span>
                    </div>

                    <h2 className="how-title">
                        How to Get the <span className="text-gradient">Most Out of This</span> Platform
                    </h2>

                    <p className="how-subtitle">
                        Watching code won't make you a better programmer — writing it will.
                        Follow this 4-step workflow to turn problem statements into real logic building skills.
                    </p>
                </div>

                {/* 4 Steps Grid */}
                <div className="steps-grid">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="step-card"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="step-card-top">
                                <span className="step-number">{step.number}</span>
                                <div className="step-icon-box">{step.icon}</div>
                            </div>

                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-desc">{step.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Mindset Banner */}
                <div
                    className="practice-banner"
                    data-aos="fade-up"
                >
                    <div className="banner-badge">Pro Tip</div>

                    <p>
                        Don't worry if your code fails on the first run. Debugging compiler errors and
                        tracking variables line-by-line is where real C programming mastery happens!
                    </p>
                </div>
            </div>
        </section>
    );
}