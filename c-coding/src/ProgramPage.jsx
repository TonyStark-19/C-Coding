// router
import { useParams, Link } from 'react-router-dom';

// use effect
import { useEffect, useState } from 'react';

// react syntax highlighter
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// import programs
import { programs } from './Levels/EasyPage';

export default function ProgramPage() {
    const { slug } = useParams();
    const [code, setCode] = useState('');
    const [program, setProgram] = useState(null);

    useEffect(() => {
        const prog = programs.find(p => p.slug === slug);
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
        <div className="program-page">
            <h1>{program.title}</h1>
            <p>{program.description}</p>

            <SyntaxHighlighter language="c" style={docco}>
                {code}
            </SyntaxHighlighter>

            <Link to="/" className="back-link">← Back to Programs</Link>
        </div>
    );
}