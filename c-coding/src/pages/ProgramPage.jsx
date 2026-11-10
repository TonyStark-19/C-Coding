// import hooks
import { act, useEffect, useState } from 'react';

// import router
import { useParams, useNavigate } from 'react-router-dom';

// import aos animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// React Icons
import { FiArrowLeft } from 'react-icons/fi';

// import Components
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BackToTop } from '../components/utils/Backtotop';
import Header from '../components/program page/Header';
import CodeWindow from '../components/program page/CodeWindow';
import ActionControls from '../components/program page/ActionControls';

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
                        <Header
                            navigate={navigate}
                            program={program}
                            getParentLevelName={getParentLevelName}
                        />

                        {/* Code & Output Window */}
                        <CodeWindow
                            activeTab={activeTab}
                            code={code}
                            copied={copied}
                            handleCopy={handleCopy}
                            program={program}
                            setActiveTab={setActiveTab}
                        />

                        {/* External Action Controls */}
                        <ActionControls program={program} />
                    </>
                )}
            </main>

            {/* conditionally render footer */}
            {!loading && <Footer />}
        </div>
    );
}