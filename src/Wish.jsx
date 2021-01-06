import React from 'react';

const time = new Date().getHours();

let wish = "";
let colour = {
};

if (time>=1 && time < 12) {
   wish = "Good morning!!";
   colour.color = "orange";

} 
else {
    if (time>=12 && time < 19) {
      wish = "Good Afternoon !!";
      colour.color = "brown";
        
    } else {
        wish = "Good Night !!";
        colour.color = "blue"
    }
    
}

function Wish(){
    return  <h1>Hello Sir, <span style = {colour}>{wish}</span></h1>   
}

export default Wish;