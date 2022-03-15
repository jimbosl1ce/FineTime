import './App.css';
import WelcomeScreen from './pages/WelcomePage';

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
        <WelcomeScreen />
      </section>
    </>
  );
}

export default App;
