import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand } from 'reactstrap'

function App() {
  return (
    <div className="App">
      <Navbar dark expand="md" color='dark'>
        <NavbarBrand>React Learning</NavbarBrand>
      </Navbar>
    </div>
  );
}

export default App;
