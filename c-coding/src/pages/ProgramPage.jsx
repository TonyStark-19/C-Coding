// import hooks
import { useEffect, useState } from 'react';

// import router
import { useParams, useNavigate } from 'react-router-dom';

// import aos animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// Syntax Highlighter
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

// React Icons
import { FiArrowLeft, FiCopy, FiCheck, FiGithub, FiCode, FiTerminal, FiExternalLink } from 'react-icons/fi';

// Layout Components
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BackToTop } from '../components/Backtotop';

// import css
import '../css/Program-page.css';

// import programs
import { programs as easyPrograms } from '../Levels/EasyPage';
import { programs as mediumPrograms } from '../Levels/MediumPage';
import { programs as hardPrograms } from '../Levels/HardPage';

// Program Page Component
export default function ProgramPage() {
    const { slug } = useParams();
    const navigate = useNavigate();

    const [code, setCode] = useState('');
    const [program, setProgram] = useState(null);
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('code');

    // Fetch program details and source code
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
        setLoading(true);

        const allPrograms = [
            ...(easyPrograms || []),
            ...(mediumPrograms || []),
            ...(hardPrograms || [])
        ];

        const foundProgram = allPrograms.find((p) => p.slug === slug);
        setProgram(foundProgram);

        if (foundProgram) {
            fetch(`/code/${foundProgram.path}`)
                .then((res) => {
                    if (!res.ok) throw new Error('File not found');
                    return res.text();
                })
                .then((text) => {
                    setCode(text);
                    setLoading(false);
                })
                .catch(() => {
                    setCode('// Source file could not be loaded from public/code directory.\n// Please check repository path structure.');
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, [slug]);

    // Handle copy to clipboard
    const handleCopy = () => {
        if (!code) return;
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // get parent level name
    const getParentLevelName = () => {
        if (!program || !program.link) return 'Levels';
        const parts = program.link.split('/');
        const lastPart = parts[parts.length - 1];
        return lastPart.charAt(0).toUpperCase() + lastPart.slice(1);
    };

    return (
        <div className="main-wrapper">
            {/* navbar */}
            <Navbar />

            <main className="program-display-container">
                {/* back to top button */}
                <BackToTop />

                {loading ? (
                    <div className="program-loading">
                        <div className="loading-spinner"></div>
                        <p>Fetching source code...</p>
                    </div>
                ) : !program ? (
                    <div className="program-not-found" data-aos="fade-up">
                        <h2>Program Not Found</h2>
                        <p>The program you are looking for does not exist or has been moved.</p>

                        <button
                            onClick={() => navigate('/levels')}
                            className="btn btn-primary"
                        >
                            <FiArrowLeft /> Back to All Levels
                        </button>
                    </div>
                ) : (
                    <>
                        {/* Header & Breadcrumbs */}
                        <header
                            className="program-header"
                            data-aos="fade-down"
                        >
                            <button
                                onClick={() => navigate(-1)}
                                className="breadcrumb-back"
                            >
                                <FiArrowLeft className="back-icon" />
                                <span>Back to {getParentLevelName()}</span>
                            </button>

                            <div className="title-area">
                                <h1 className="program-title">{program.title}</h1>
                                <p className="program-desc">{program.description}</p>
                            </div>

                            {/* Topics / Tags */}
                            {program.topics && (
                                <div className="program-tags">
                                    {program.topics.map((tag) => (
                                        <span
                                            key={tag}
                                            className="tag-pill"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </header>

                        {/* Code & Output Window */}
                        <div className="editor-window" data-aos="fade-up">
                            {/* Window Bar / Toolbar */}
                            <div className="editor-toolbar">
                                <div className="toolbar-left">
                                    <div className="window-dots">
                                        <span className="dot red"></span>
                                        <span className="dot yellow"></span>
                                        <span className="dot green"></span>
                                    </div>

                                    {/* Window Tabs */}
                                    <div className="tab-group">
                                        <button
                                            className={`tab-btn ${activeTab === 'code' ? 'active' : ''}`}
                                            onClick={() => setActiveTab('code')}
                                        >
                                            <FiCode className="tab-icon" />
                                            <span>{program.path ? program.path.split('/').pop() : 'main.c'}</span>
                                        </button>

                                        {program.output && (
                                            <button
                                                className={`tab-btn ${activeTab === 'output' ? 'active' : ''}`}
                                                onClick={() => setActiveTab('output')}
                                            >
                                                <FiTerminal className="tab-icon" />
                                                <span>Terminal Output</span>
                                            </button>
                                        )}
                                    </div>
                                </div>

                                <div className="toolbar-right">
                                    <button
                                        className="copy-btn"
                                        onClick={handleCopy}
                                        aria-label="Copy Code"
                                    >
                                        {copied ? (
                                            <>
                                                <FiCheck className="copy-icon success" />
                                                <span>Copied!</span>
                                            </>
                                        ) : (
                                            <>
                                                <FiCopy className="copy-icon" />
                                                <span>Copy Code</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Editor Content Area */}
                            {activeTab === 'code' ? (
                                <div className="syntax-wrapper">
                                    <SyntaxHighlighter
                                        language="c"
                                        style={vscDarkPlus}
                                        showLineNumbers={true}
                                        customStyle={{
                                            margin: 0,
                                            padding: '24px 20px',
                                            background: 'transparent',
                                            fontSize: '0.925rem',
                                            lineHeight: '1.65',
                                            fontFamily: 'var(--font-mono, monospace)'
                                        }}
                                    >
                                        {code}
                                    </SyntaxHighlighter>
                                </div>
                            ) : (
                                <div className="terminal-output-wrapper">
                                    <div className="terminal-header-mini">
                                        <FiTerminal className="term-icon" />
                                        <span>Compiled Output (GCC)</span>
                                    </div>

                                    <pre className="terminal-content">
                                        <code>{program.output}</code>
                                    </pre>
                                </div>
                            )}
                        </div>

                        {/* External Action Controls */}
                        <div
                            className="footer-actions"
                            data-aos="zoom-in"
                        >
                            {program.gitUrl && (
                                <a
                                    href={program.gitUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="github-source-btn"
                                >
                                    <FiGithub className="git-icon" />
                                    <span>View Raw Source on GitHub</span>
                                    <FiExternalLink className="ext-icon" />
                                </a>
                            )}
                        </div>
                    </>
                )}
            </main>

            {/* conditionally render footer */}
            {!loading && <Footer />}
        </div>
    );
}