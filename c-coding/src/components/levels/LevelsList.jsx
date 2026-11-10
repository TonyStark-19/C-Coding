// import link
import { Link } from 'react-router-dom';

// React Icons
import { FiCode, FiLayers, FiCpu, FiTag, FiArrowRight } from 'react-icons/fi';

// levels list component
export default function LevelsList() {
    // levels items array
    const levels = [
        {
            path: '/levels/easy',
            title: 'Beginner',
            icon: <FiCode />,
            desc: 'Master the fundamentals: basic syntax, operators, variables, and essential control flow.',
            count: 22,
            topics: [
                'Basic Arithmetic',
                'Operators',
                'Conditionals',
                'Loops',
                'Functions',
                'Type Casting',
                'Character Handling'
            ],
            tier: 'tier-beginner'
        },
        {
            path: '/levels/medium',
            title: 'Intermediate',
            icon: <FiLayers />,
            desc: 'Deep dive into modular programming, memory addresses, data structures, and core logic.',
            count: 41,
            topics: [
                'Arrays',
                '2D Arrays & Matrices',
                'Strings',
                'Recursion',
                'Pointers',
                'Switch Case',
                'Structures',
                'Number Logic',
                'Patterns'
            ],
            tier: 'tier-intermediate'
        },
        {
            path: '/levels/hard',
            title: 'Advanced',
            icon: <FiCpu />,
            desc: 'Complex algorithmic logic, optimization, memory operations, and system-level programming.',
            count: 16,
            topics: [
                'Advanced Functions',
                'Recursion',
                'Matrix Operations',
                'Number Systems',
                'Algorithms',
                'Problem Solving',
                'Menu-Based Programs'
            ],
            tier: 'tier-advanced'
        }
    ];

    return (
        <div className="levels-stack">
            {levels.map((lvl, index) => (
                <Link
                    to={lvl.path}
                    key={lvl.title}
                    className={`level-card-wide ${lvl.tier}`}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                >
                    {/* Left Icon Visual */}
                    <div className="card-icon-box">{lvl.icon}</div>

                    {/* Main Card Content */}
                    <div className="card-main-content">
                        <div className="card-header">
                            <div className="card-title-group">
                                <h2>{lvl.title}</h2>
                                <span className="prog-count">{lvl.count} Programs</span>
                            </div>
                        </div>

                        <p className="card-description">{lvl.desc}</p>

                        {/* Topics Covered */}
                        <div className="topics-wrapper">
                            <div className="topics-label">
                                <FiTag className="tag-icon" />
                                <span>Topics:</span>
                            </div>

                            <div className="topics-flex">
                                {lvl.topics.map((topic) => (
                                    <span
                                        key={topic}
                                        className="topic-tag"
                                    >
                                        {topic}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Action Trigger Arrow */}
                    <div className="card-action">
                        <span className="btn-explore">
                            <span>Explore</span>
                            <FiArrowRight className="arrow-icon" />
                        </span>
                    </div>
                </Link>
            ))}
        </div>
    );
}