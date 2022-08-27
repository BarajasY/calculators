import './App.css';
import { Narcissistic, Munchausen, Harshad } from './components/index';

function App() {
  return (
    <div className="App">
      <Narcissistic />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#2E424D" fill-opacity="1" d="M0,64L60,74.7C120,85,240,107,360,117.3C480,128,600,128,720,154.7C840,181,960,235,1080,266.7C1200,299,1320,309,1380,314.7L1440,320L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
      </svg>
      <Munchausen />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#98DAD9" fill-opacity="1" d="M0,224L48,197.3C96,171,192,117,288,106.7C384,96,480,128,576,122.7C672,117,768,75,864,101.3C960,128,1056,224,1152,250.7C1248,277,1344,235,1392,213.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
      <Harshad />
    </div>
  );
}

export default App;
