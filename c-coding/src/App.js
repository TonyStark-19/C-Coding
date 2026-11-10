// router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import MainPage from './pages/Mainpage';
import LevelPage from './pages/Levels';
import EasyPage from './Levels/EasyPage';
import MediumPage from './Levels/MediumPage';
import HardPage from './Levels/HardPage';
import ProgramPage from './pages/ProgramPage';

// scroll to top on route change
import ScrollToTop from './components/utils/ScrollToTop';

// routing component
export default function App() {
    return (
        <Router>
            {/* scroll to top on route change */}
            <ScrollToTop />

            {/* all routes */}
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