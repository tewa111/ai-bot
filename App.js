import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home"; // Import the Home component
import TrainingProgram from "./pages/TrainingProgram"; // Import the TrainingProgram component
import DayDetail from "./DayDetail"; // Import the DayDetail component
import ExamPage from "./pages/ExamPage"; // Import the ExamPage component
import './App.css';

function App() {
  const days = Array.from({ length: 14 }, (_, index) => index + 1); // Generates an array [1, 2, ..., 14]

  return (
    <Router>
      <div className="App">
        <h1>Hospitality Training Program</h1>
        <nav>
          <ul className="nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/training-program">Training Program</Link>
            </li>
            {days.map((day) => (
              <li key={day}>
                <Link to={`/day/${day}`}>Day {day}</Link>
              </li>
            ))}
            <li>
              <Link to="/exam">Examination</Link> {/* Link to the ExamPage */}
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page route */}
          <Route path="/training-program" element={<TrainingProgram />} /> {/* Training Program page route */}
          {days.map((day) => (
            <Route
              key={day}
              path={`/day/${day}`}
              element={<DayDetail day={day} />} // Render the DayDetail component
            />
          ))}
          <Route path="/exam" element={<ExamPage />} /> {/* Exam page route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
