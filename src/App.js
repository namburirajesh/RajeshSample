import logo from './logo.svg';
import './App.css';

function App() {
  const myurl= process.env.REACT_APP_API_URL
  console.log("***************1234")
  console.log(process.env)

 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>{myurl}</div>
      </header>
    </div>
  );
}

export default App;
