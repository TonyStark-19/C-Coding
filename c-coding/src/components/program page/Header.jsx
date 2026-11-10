// import icons
import { FiArrowLeft } from "react-icons/fi";

// header component
export default function Header({ program, navigate, getParentLevelName }) {
    return (
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
    )
}