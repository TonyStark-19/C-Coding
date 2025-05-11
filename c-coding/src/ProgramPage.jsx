// css
import './Program-page.css';

// router
import { useParams, Link, useNavigate } from 'react-router-dom';

// use effect
import { useEffect, useState } from 'react';

// react syntax highlighter
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// import navbar
import { Navbar } from './Mainpage';

// AOS animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// import programs
import { programs as easyPrograms } from './Levels/EasyPage';
import { programs as mediumPrograms } from './Levels/MediumPage';
import { programs as hardPrograms } from './Levels/HardPage';

// program page
export default function ProgramPage() {

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
        <>
            <Navbar />
            <div className="program-page">
                <h1 data-aos="fade-down">Code for the program</h1>
                <h2 data-aos="fade-up">Program name : {program.title}</h2>
                <p data-aos="fade-up">Description : {program.description}</p>

                <SyntaxHighlighter data-aos="fade-up" language="c" style={docco}>
                    {code}
                </SyntaxHighlighter>

                <div className='buttons-wrap'>

                    <button onClick={() => navigate(program.link, { replace: true })} data-aos="zoom-in" data-aos-delay="400" data-aos-duration="800" className="back-button">Back to Programs</button>

                    <Link to="/">
                        <button data-aos="zoom-in" data-aos-delay="400" data-aos-duration="800" className="raw-button">Check code on Github</button>
                    </Link>
                </div>
            </div>
        </>
    );
}