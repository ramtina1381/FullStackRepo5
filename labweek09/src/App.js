import logo from './logo.svg';
import './App.css';
import Header from './Header';
import StuInfo from './StuInfo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header />
        <StuInfo />
      </header>
    </div>
  );
}

export default App;
