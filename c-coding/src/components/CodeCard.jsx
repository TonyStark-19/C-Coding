// import css
import '../css/App.css';

// import use effect
import { useEffect } from "react";

// Prism for syntax highlighting
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-c";

// Code Card Component
export default function CodeCard({ filename, children }) {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <div className="code-card" data-aos="fade-up">
            <div className="code-header">
                <div className="dot-group">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                </div>
                <span className="file-name">{filename}</span>
            </div>

            <div className="code-body">
                <pre>
                    <code className="language-c">
                        {children}
                    </code>
                </pre>
            </div>
        </div>
    );
}