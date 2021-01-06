import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App, {add, sub, mul, div} from './App';

// ********************we have to create component for last part************************************8
// const time = new Date().getHours();

// let wish = "";
// let colour = {
// };

// if (time>=1 && time < 12) {
//    wish = "Good morning!!";
//    colour.color = "orange";

// } 
// else {
//     if (time>=12 && time < 19) {
//       wish = "Good Afternoon !!";
//       colour.color = "brown";
        
//     } else {
//         wish = "Good Night !!";
//         colour.color = "blue"
//     }
    
// }
// ReactDOM.render(
//     <React.Fragment><h1>{time}</h1>
//     <h1>Hello Sir, <span style = {colour}>{wish}</span></h1>
//     </React.Fragment>
//     ,
//     document.getElementById("root")
// );




// const fname = "Sayali";
// const imag1 = "https://picsum.photos/250/300";
// const imag2 = "https://picsum.photos/200/300";
// const imag3 = "https://picsum.photos/300/300";
// const heading = {
//         textAlign: "center",
//         textDecoration: "solid" ,
//         color: "brown",
//         fontFamily: "'Langar', cursive"
// };
// //we can use both template literal and simple. try to use tem lite for getting practice as it is difficult.
// var date = new Date().toDateString();
// var time = new Date().toLocaleTimeString();
// ReactDOM.render(
// <React.Fragment>
// <div style={heading}>
// <h1 className="myName"> My name is {`${fname}`}</h1>
// <p>Current date is {`${date}`}</p>
// <p> Current time is {time}</p>
// <img src={imag1} alt="random"/> 
// <a href="https://www.youtube.com/watch?v=tiLWCNFzThE&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ" target = "_top">
// <img src={imag2} alt="random" /> 
// </a>
// <img src={imag3} alt="random"/> 
// </div>
// </React.Fragment>
//     ,
//     document.getElementById("root")
// );


//below we are using template literals
// ReactDOM.render(
//     <React.Fragment>
//     <App/>
//     <h1>{names()}</h1>
//     </React.Fragment>
//     ,

//     document.getElementById("root")
// );

// ReactDOM.render(
//         <React.Fragment>
//         <App />
//         <h1 >Sum =  {add(40,4)}</h1>
//         <h1>Subtraction =  {sub(40,4)}</h1>
//         <h1>Multiplication =  {mul(40,4)}</h1>
//         <h1>Division =  {div(40,3)}</h1>
//         </React.Fragment>
//         ,
    
//         document.getElementById("root")
//     );

ReactDOM.render(<App/>, document.getElementById("root"))

// let myprog = ["React", "Javascript","HTML","css"];
// let [top1,,,top5] = myprog;
// console.log(myprog.length)
// console.log (`My favorite language is ${top1} and last language is ${top5}`);
// ReactDOM.render(
//     <h1>My name is sayali 😃</h1>
//     ,document.getElementById("root"))
// Selena.
// Big Mouth.
// The Queen's Gambit.
// Virgin River.
// Cocomelon.


//it is recommended to use React.fragment always.
// ReactDOM.render(
//     <React.Fragment> 
//     <h1> Hello World!!</h1>
//     <p>I am Sayali khandade</p>
//     </React.Fragment>
//     , document.getElementById('root'));

// var h1 = document.createElement('h1'); // <h1>

// // now we have to write text within created element.
// h1.innerHTML = "I am sayali!!";

// // now show the text in output
// document.getElementById("root").appendChild(h1);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
