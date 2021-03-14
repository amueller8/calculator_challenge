import logo from './logo.svg';
import React from 'react';
//import React from 'react-dom';
import './App.css';
import bigeval from 'bigeval';

function App() {
  return (
    <div className="App">
      <div id = 'test'></div>

      <div className = "calculator container" id = 'calculator'>
      
        <div className = "row">
          <div className = "col-12">
            <p id = 'disp'></p>   
          </div>
          
        </div>
        
        <div className = "row form-group"></div>
        
        <div className = "row form-group">
          <div className = "col-3">
            <button value = "7">7</button>
          </div>
          <div className = "col-3">
          <button value = "8">8</button>
          </div>
          <div className = "col-3">
            <button value = "9">9</button>
          </div>
          <div className = "col-3">
            <button className = "operator" value = "*">x</button>
          </div>
          
        </div>
        
          <div className = "row form-group">
            <div className = "col-3">
              <button value = "4">4</button>
            </div>
            <div className = "col-3">
            <button value = "5">5</button>
            </div>
            <div className = "col-3">
              <button value = "6">6</button>
            </div>
            <div className = "col-3">
              <button className = "operator" value = "-">-</button>
            </div>
          </div>
        
          <div className = "row form-group">
              <div className = "col-3">
                <button value = "1">1</button>
              </div>
              <div className = "col-3">
              <button value = "2">2</button>
              </div>
              <div className = "col-3">
                <button value = "3">3</button>
              </div>
            <div className = "col-3">
                <button className = "operator" value = "+">+</button>
              </div>
              
          </div>
        
          <div className = "row form-group">
            <div className = "col-3">
              <button value = "0">0</button> 
            </div>
            
            <div className = "col-3">
              <button className = "operator" value = "CLEAR">CE</button> 
            </div>
            <div className = "col-3">
              <button className = "operator" value = "=">=</button> 
            </div>
            <div class = "col-3">
              <button className = "operator" value = "/">÷</button> 
            </div>
            
            
          </div>
        
      </div>
      <div id = 'output'>
        
        
      </div>
            
    </div>
  );
}

export default App;
