// router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import MainPage from './Mainpage';
import LevelPage from './Levels';
import EasyPage from './Levels/EasyPage';
import MediumPage from './Levels/MediumPage';
import HardPage from './Levels/HardPage';
import ProgramPage from './ProgramPage';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/levels" element={<LevelPage />} />
                <Route path="/levels/easy" element={<EasyPage />} />
                <Route path="/levels/medium" element={<MediumPage />} />
                <Route path="/levels/hard" element={<HardPage />} />
                <Route path="/programs/:slug" element={<ProgramPage />} />
            </Routes>
        </Router>
    );
}