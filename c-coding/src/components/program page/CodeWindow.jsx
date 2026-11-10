// Syntax Highlighter
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

// React Icons
import { FiCopy, FiCheck, FiCode, FiTerminal } from 'react-icons/fi';

// code window component
export default function CodeWindow({ activeTab, setActiveTab, handleCopy, copied, code, program }) {
    return (
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
    )
}