// css
import '../css/Program-page.css';

// router
import { useParams, useNavigate } from 'react-router-dom';

// use effect
import { useEffect, useState } from 'react';

// react syntax highlighter
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

// import navbar and footer
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

// import icons
import { FaGithub, FaChevronLeft, FaRegCopy, FaCheck } from "react-icons/fa6";

// import back to top button
import { BackToTop } from '../components/Backtotop';

// AOS animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// import programs
import { programs as easyPrograms } from '../Levels/EasyPage';
import { programs as mediumPrograms } from '../Levels/MediumPage';
import { programs as hardPrograms } from '../Levels/HardPage';

// Program Page Component
export default function ProgramPage() {
    const { slug } = useParams();
    const [code, setCode] = useState('');
    const [program, setProgram] = useState(null);
    const [copied, setCopied] = useState(false);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    // Fetch program details and source code
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        setLoading(true); // start loading on slug change
        const allPrograms = [...easyPrograms, ...mediumPrograms, ...hardPrograms];
        const prog = allPrograms.find(p => p.slug === slug);
        setProgram(prog);

        if (prog) {
            fetch(`/code/${prog.path}`)
                .then(res => res.text())
                .then(text => {
                    setCode(text);
                    setLoading(false); // done loading
                })
                .catch(() => {
                    setCode("// Error: Source file not found in public directory.");
                    setLoading(false); // done loading even on error
                });
        } else {
            setLoading(false); // program not found
        }
    }, [slug]);

    // Handle copy to clipboard
    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className='main-wrapper'>
            <div className="gradient-bg"></div>
            <Navbar />

            <main className="program-display-container">
                <BackToTop />

                {loading ? (
                    <div className="program-loading">
                        <p>Loading program...</p>
                    </div>
                ) : (
                    <>
                        {/* 1. Header & Navigation */}
                        <div className="program-header" data-aos="fade-down">
                            <button onClick={() => navigate(-1)} className="breadcrumb-back">
                                <FaChevronLeft className='icon' /> Back to {program.link.split('/').pop()}
                            </button>
                            <h1 className="program-title">{program.title}</h1>
                            <p className="program-desc">{program.description}</p>
                        </div>

                        {/* 2. Code Editor Window */}
                        <div className="editor-window" data-aos="fade-up">
                            <div className="editor-toolbar">
                                <div className="window-dots">
                                    <span className="dot red"></span>
                                    <span className="dot yellow"></span>
                                    <span className="dot green"></span>
                                    <span className="file-label">
                                        {program.path.split('/').pop()}
                                    </span>
                                </div>
                                <button className="copy-btn" onClick={handleCopy}>
                                    {copied ? <><FaCheck /> Copied</> : <><FaRegCopy /> Copy Code</>}
                                </button>
                            </div>

                            <div className="syntax-wrapper">
                                <SyntaxHighlighter
                                    language="c"
                                    style={vscDarkPlus}
                                    customStyle={{
                                        margin: 0,
                                        padding: '25px',
                                        background: 'transparent',
                                        fontSize: '15px',
                                        lineHeight: '1.5'
                                    }}
                                >
                                    {code}
                                </SyntaxHighlighter>
                            </div>
                        </div>

                        {/* 3. External Actions */}
                        <div className='footer-actions' data-aos="zoom-in">
                            <button
                                onClick={() => window.open(program.gitUrl, '_blank')}
                                className="github-button"
                            >
                                <FaGithub /> View Raw Source on GitHub
                            </button>
                        </div>
                    </>
                )}
            </main>

            <Footer />
        </div>
    );
}