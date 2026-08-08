// import hooks
import { useEffect, useState } from 'react';

// import prism js for code block
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-c';

// React Icons
import { FiCopy, FiCheck, FiCode } from 'react-icons/fi';

// import css
import '../css/App.css';

// code card component
export default function CodeCard({ filename = 'main.c', code }) {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        Prism.highlightAll();
    }, [code]);

    // handle copy
    const handleCopy = () => {
        if (!code) return;
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="code-card">
            {/* Top Window Header Bar */}
            <div className="code-header">
                <div className="dot-group">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                </div>

                <div className="file-info">
                    <FiCode className="file-icon" />
                    <span className="file-name">{filename}</span>
                </div>

                <div className="header-actions">
                    <button
                        className="copy-btn"
                        onClick={handleCopy}
                        title="Copy Code"
                        aria-label="Copy Code"
                    >
                        {copied ? <FiCheck className="copy-icon success" /> : <FiCopy className="copy-icon" />}
                        <span className="copy-text">{copied ? 'Copied' : 'Copy'}</span>
                    </button>
                </div>
            </div>

            {/* Syntax Highlighted Editor Body */}
            <div className="code-body">
                <pre>
                    <code className="language-c">
                        {code}
                    </code>
                </pre>
            </div>
        </div>
    );
}