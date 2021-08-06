import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <header class="header">
    <div class="wrapper">
      <div class="header-grid">
        <div>
          <h1>Social Media Dashboard</h1>
          <p class="header-total">Total Followers: 23, 004</p>
        </div>
        <div class="dark-mode">
          <p class="dark-mode-title">Dark Mode</p>
          <input type="checkbox" class="checkbox" id="checkbox"/>
          <label class="switch" for="checkbox"></label>
        </div>
      </div>
    </div>
  </header>
  );
}

export default App;
