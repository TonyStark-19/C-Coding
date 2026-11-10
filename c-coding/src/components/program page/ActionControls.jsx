// React Icons
import { FiGithub, FiExternalLink } from 'react-icons/fi';

// action control component
export default function ActionControls({ program }) {
    return (
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
    )
}