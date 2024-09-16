import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h1>MKMP COLLEGE</h1>
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.w3schools.com/sql/default.asp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn SQL @W3SCHOOLS
        </a>
      </header>
    </div>
  );
}

export default App;
