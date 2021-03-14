import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import bigeval from 'bigeval';
import $ from 'jquery';

const fs = require('fs')


$(document).ready(function(){


  var calculation = "";
  
  
  $('button').click(function(){
   
    var button_val = $(this).val();
    
    if(button_val === "CLEAR"){
      $('#disp').empty();
    }
    
    if(button_val === "="){

      //var info = split_calculation(calculation, operator_indices);
      var Obj = new bigeval();
      var doneCalc = Obj.exec(calculation);
      $('#output').append("<p> user: " + calculation + " = "+ doneCalc + "</p>");
      // add to database

      var content = calculation + " = " + doneCalc;
      try {
        const data = fs.writeFileSync('/Users/flavio/test.txt', content)
        //file written successfully
      } catch (err) {
        console.error(err)
      }
 
      
      calculation = "";
      
      
      
      
    }
    
 
 
   if(!button_val.match(/[a-zA-Z]+/) && button_val !== '=') {
     
      $('#disp').append(button_val);
      calculation += button_val;
      

   }
     
   
  });



});
  
  


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
