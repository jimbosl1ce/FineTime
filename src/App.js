import './App.css';
import { render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import WelcomeScreen from './pages/WelcomePage';
import SelectPage from './pages/SelectPage';

function App() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          FineTime (logo)
        </div>
        <ul className="signup">
          <li>
            <a href="#">Sign up</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </div>
      <section className="main">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WelcomeScreen />} />
            <Route path="/cityselect" element={<SelectPage />} />
          </Routes>
        </BrowserRouter>
      </section>
    </>
  );
}

export default App;
