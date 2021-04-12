import React, {Component} from 'react';
import './App.css';

const reuseComponet = 
  <div className="comptext">
    <br></br>
    <h2>Reusable Component</h2>
    <p>This is a reusable component. Lorem ipsum dolor 
      sit amet, consectetur adipiscing elit, sed do eiusmod 
      tempor incididunt ut labore et dolore magna aliqua. 
      </p>
      <br></br>
    

  </div>;

class App extends Component {
  render() {
    return <div>
      <div className="heading"><h1>Sherry Tram - Web Dev Assginment #05</h1></div>
      <br></br>
      <div className="compsection">
      <div className="compbox">{reuseComponet}</div>
      <div className="compbox">{reuseComponet}</div>
      <div className="compbox">{reuseComponet}</div>
      <div className="compbox">{reuseComponet}</div>
      <div className="compbox">{reuseComponet}</div>
      <div className="compbox">{reuseComponet}</div>
    </div>;
    </div>
    
    

  }
}

export default App;
