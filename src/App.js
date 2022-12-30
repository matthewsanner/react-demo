// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Greeter from './Greeter';
import Counter from './Counter';
import MoodToggler from './MoodToggler'
import Cart from './Cart';

const items = [
  { id: 1, name: 'Taco Seasoning', price: 2.25, qty: 2 },
  { id: 2, name: 'Pinto Beans', price: 1.99, qty: 3 },
  { id: 3, name: 'Sour Cream', price: 3.50, qty: 1 },
]

function App() {
  return (
    <div>
      <Navbar />
      <Cart initialItems={items} />
      <Greeter name="Karen" age="62" excitement={4} />
      <Greeter name="Tammy" age="27" excitement={2} />
      <h1>HELLO FROM APP!</h1>
      <Counter step={5} />
      <Counter />
      <MoodToggler />
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
