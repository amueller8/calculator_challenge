
import logo from './logo.svg';
import React from 'react';
//import React from 'react-dom';
import './App.css';



/*
ideally i would make calculator buttons react components,
i had pivoted from a different idea so rn they are just normal buttons
*/
function App() {

  /*
  This was when I was trying to implement some form of backend info.
  I had set up a server on a different port but I never got any data/messages
  sending.
  */
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);



  return (
    <div className="App">
      <div id = 'test'></div>

      <div className = "calculator container" id = 'calculator'>
        <div className = "row">
        <div className = "col-12" id = 'name-row'>
            <label for = "name">User's name: </label>
            <input id = 'name' type = "text"></input>
            <button id = 'name-button'>Go</button>

        </div>


        </div>
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

