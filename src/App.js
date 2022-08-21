import './App.css';
import { Narcissistic, Munchausen } from './components/index';

function App() {
  return (
    <div className="App">
      <Narcissistic />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#2E424D" fill-opacity="1" d="M0,64L60,74.7C120,85,240,107,360,117.3C480,128,600,128,720,154.7C840,181,960,235,1080,266.7C1200,299,1320,309,1380,314.7L1440,320L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
      </svg>
      <Munchausen />
    </div>
  );
}

export default App;
