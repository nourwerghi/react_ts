import './App.css';
import Counter from './Components/Counter';
import Hello from './Components/Hello';
import PropsComponent from './Components/PropsComponent';

function App() {
  return (
    <div className="App">
      <h1>Hello typescript</h1>
      <Hello/>
      <PropsComponent name="alaa" age={29}/>
      <Counter />
    </div>
  );
}

export default App;
