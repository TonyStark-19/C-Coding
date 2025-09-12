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

// import back to top button
import { BackToTop } from '../Levels/EasyPage';

// AOS animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// import programs
import { programs as easyPrograms } from '../Levels/EasyPage';
import { programs as mediumPrograms } from '../Levels/MediumPage';
import { programs as hardPrograms } from '../Levels/HardPage';

// program page
export default function ProgramPage() {
    // AOS Animations
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    const { slug } = useParams();
    const [code, setCode] = useState('');
    const [program, setProgram] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const allPrograms = [...easyPrograms, ...mediumPrograms, ...hardPrograms];
        const prog = allPrograms.find(p => p.slug === slug);
        setProgram(prog);

        if (prog) {
            fetch(`/code/${prog.path}`)
                .then(res => res.text())
                .then(setCode)
                .catch(() => setCode("// Code not found"));
        }
    }, [slug]);

    if (!program) return <p>Loading program...</p>;

    return (
        <div
            style={{
                background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(226, 232, 240, 0.15), transparent 70%), #000000",
            }}>
            <Navbar />
            <div className="program-page">
                <BackToTop />
                <h1 data-aos="fade-down">Code for the program</h1>
                <h2 data-aos="fade-up">Program name : {program.title}</h2>
                <p data-aos="fade-up">Description : {program.description}</p>

                <SyntaxHighlighter data-aos="fade-up" language="c" style={vscDarkPlus}>
                    {code}
                </SyntaxHighlighter>

                <div className='buttons-wrap'>
                    <button onClick={() => navigate(program.link, { replace: true })}
                        data-aos="zoom-in" data-aos-delay="400" data-aos-duration="800"
                        className="back-button">Back to Programs</button>
                    <button onClick={() => window.open(program.gitUrl, '_blank')}
                        data-aos="zoom-in" data-aos-delay="400" data-aos-duration="800"
                        className="raw-button">Check code on Github</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}