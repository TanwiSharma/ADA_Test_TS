import logo from './logo.svg';
import './App.css';
import { type } from '@testing-library/user-event/dist/type';
function App() {
  // Declared an array of items
  const fruits = ["Apple", "Mango", "Banana", "GFG", "Bujinga"];
  const check = "Running";
  //fruits.sort();
  //console.log(fruits);
  return (
    <div className="App">
      <header className="App-header">
      <style>
      
      </style>
        <img src={logo} className="App-logo" alt="logo" title="applogo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={check}
          aria-expanded="true"
          name="label"
          title="app logo"
          aria-selected="true"
          allowTabFocus = "true"
        >
          Learn React
        </a>
        <ul>
        {fruits.map((prg) => (<li>{prg}</li>))}
        </ul>

        <ol className="no-numbers">
          <li><h5 aria-labelledby="visible">hi</h5></li>
          <li aria-current="true"><a href="https://reactjs.org" role="button">hello moto</a></li>
          <li><h5>yes</h5></li>
        </ol>
        
<div className="heading-1">onlune clain</div>
        <ul role="tablist">
  <li role="presentation">
    <button role="tab" href="#panel1" id="tab1" aria-selected="true">Tab one</button>
  </li>
  <li role="presentation">
    <button role="tab" href="#panel2" id="tab2" aria-selected="true">Tab two</button>
  </li>
  <li role="presentation">
    <button role="tab" href="#panel3" id="tab3" aria-selected="true">Tab three</button>
  </li>
  <li role="presentation">
    <button role="tab" href="#panel4" id="tab4" tabindex="0" aria-selected="true">Tab four</button>
  </li>
</ul>

<h1>=======Fetch api and display here====</h1>
<p>Print java api fetched values</p>
      </header>
    </div>
  );
}

export default App;
