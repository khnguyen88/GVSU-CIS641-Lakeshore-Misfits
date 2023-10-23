import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button'; // For testing purposes only!
import 'bootstrap/dist/css/bootstrap.css'; // For testing purposes only!
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PanelsSection from "./sections/PanelsSection/PanelsSection";
import PagesSection from "./sections/PagesSection/PagesSection";

function App() {
  return (
    <div className='MainApp'>
      <Router>
        <PanelsSection />
        <PagesSection />
    </Router>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <Button as="a" variant="primary">
//           Button as link
//         </Button>
//         <Button as="a" variant="success">
//           Button as link
//         </Button>
//       </header>
//     </div>
//   );
// }

export default App;
