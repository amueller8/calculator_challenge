import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import bigeval from 'bigeval';
import $ from 'jquery';



$(document).ready(function(){


  var calculation = "";
  var user_name = "user";
  
  $("#name-button").click(function(){
    user_name = $('#name').val();
    //$('#name-row').remove();
  });

  $('button').click(function(){
   
    var button_val = $(this).val();
    
    if(button_val === "CLEAR"){
      $('#disp').empty();
    }
    
    if(button_val === "="){

      //var info = split_calculation(calculation, operator_indices);
      var Obj = new bigeval();
      var doneCalc = Obj.exec(calculation);
      $('#output').append("<p>" + user_name + ": " + calculation + " = "+ doneCalc + "</p>");
      // add to database

      var content = JSON.stringify(calculation + " = " + doneCalc);

      
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