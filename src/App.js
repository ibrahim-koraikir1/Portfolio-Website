import logo from './logo.svg';
import './App.css';
import Nav from './componets/nav/Nav';
import Home from './componets/nav/home/Home';
import About from './componets/about/About';
function App() {
  return (
    <div className="App">
      
      <Nav/>
     <Home/>
     <About/>
    </div>
  );
}

export default App;
