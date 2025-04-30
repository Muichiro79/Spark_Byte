import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/Landingpage';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import HomePages from './Pages/home/HomePages';
import connectDB from './db';

// Call the DB connection function
connectDB();

function App() {
  return (
    <Router>
      <Routes>
        {/* Public pages */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* HomePage acts like a layout */}
        <Route path='/homepage/*' element={<HomePages />}>
          {/* Add more child routes here */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
