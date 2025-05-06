// router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// link pages
import MainPage from './Mainpage';
import Levels from './Levels';

// app
export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/levels" element={<Levels />} />
            </Routes>
        </Router>
    );
}