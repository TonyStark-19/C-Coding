// import icons
import { FiCode, FiCpu, FiTerminal, FiCheckCircle, FiBookOpen } from 'react-icons/fi';

// import css
import '../css/AboutSection.css';

// highlights data
const highlights = [
    {
        icon: <FiCode />,
        title: "79 C Programs",
        desc: "Comprehensive set of programs covering basic syntax to advanced algorithms."
    },
    {
        icon: <FiTerminal />,
        title: "Scratch Logic",
        desc: "Every solution written independently with a problem-solving mindset."
    },
    {
        icon: <FiCpu />,
        title: "900+ Lines Milestone",
        desc: "Built a complex number system conversion tool completely in C."
    },
    {
        icon: <FiBookOpen />,
        title: "Active Learning",
        desc: "Moved beyond one-shots by building projects, not just watching."
    }
];

// about section
export default function AboutSection() {
    return (
        <section
            className="about-section"
            id="about"
        >
            <div className="about-container">
                {/* Left Column: Narrative Story */}
                <div
                    className="about-story"
                    data-aos="fade-right"
                >
                    <div className="section-badge">
                        <FiTerminal className="badge-icon" />
                        <span>Origin Story</span>
                    </div>

                    <h2 className="about-title">
                        From Syllabus Curiosity to <span className="text-gradient">79 Programs</span>
                    </h2>

                    <div className="story-content">
                        <p>
                            When I enrolled in <strong>BCA</strong>, C language was part of the official syllabus.
                            Out of curiosity to learn beyond classroom boundaries and in a structured way,
                            I started learning C from <em>Apna College's</em> YouTube tutorial.
                        </p>

                        <p>
                            But learning didn't stop at watching videos. I adopted a simple mindset:
                        </p>

                        <blockquote className="quote-box">
                            <span className="quote-symbol">“</span>
                            If I can think it, I should be able to convert it into code.
                        </blockquote>

                        <p>
                            Initially, this project was just a personal GitHub repository. Later, I transformed
                            it into a fully responsive React.js web platform, and now it has evolved into a
                            modern, open-source platform with improved UI, structure, and community contribution support.
                        </p>
                    </div>
                </div>

                {/* Right Column: Highlights Grid */}
                <div
                    className="about-grid"
                    data-aos="fade-left"
                >
                    {highlights.map((item, index) => (
                        <div
                            key={index}
                            className="about-card"
                        >
                            <div className="card-icon-wrap">
                                {item.icon}
                            </div>

                            <div className="card-info">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}

                    <div className="about-banner-card">
                        <FiCheckCircle className="banner-icon" />

                        <div className="banner-text">
                            <h4>Learning By Building</h4>
                            <p>Built for students and developers mastering low-level programming logic.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}