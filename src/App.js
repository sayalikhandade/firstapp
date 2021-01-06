import React, { useState } from 'react';
import IncDec from "./IncDec";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Heading from './Heading.jsx';
// import Parag from './Parag';
// import OlList from './OlList';
//import Wish from './Wish';

// function App(){
//  return(
//   <React.Fragment>
//   <Heading />
//   <Parag />
//   <OlList />
//   <Heading />
//   </React.Fragment>
//  );
// }

// const App = () => {
//   const state = useState(0);
//   let [count, updatedCount] = state
//   let incCount = () =>{
//     updatedCount(count+1);
//     console.log(count);
//   };
//   return(
//     <React.Fragment>
//     <h1>{count}</h1>
//     <button onClick={incCount}>click me</button>
//     </React.Fragment>
//   );
// }


// const App = () =>{
//   let date1 = new Date().toLocaleTimeString();
//   let state = useState(date1);
//   let [date, currTime] = state
//  const localTime = () =>{
//   let date1 = new Date().toLocaleTimeString();
//       currTime(date1);
//       console.log(date1);
//  }
//  setInterval(localTime,1000);
//  return(
//   <React.Fragment>
//     <h1> {date}</h1>
//     {setInterval}
//   </React.Fragment>
//  )
// }



// const App = () =>{

//   let [fullName,setName] = useState(
//   {
//     fname:"",
//     lastName:"",
//     mail:"",
//     phone:""
//   });
  

// const Callname = (event) =>{
//   console.log("clicked");
//  const {name, value} = event.target;
//     setName((prevalue)=>
//     {
//       return{
//         ...prevalue,
//         [name] : value
//       }
//     });

// };

// const Myname = (event) => {
//   event.preventDefault();
//  alert("Form submitted successfully 😃");
// }
//   return(
//     <React.Fragment>
//     <form onSubmit={Myname}>
//     <h1> Hello {fullName.fname} {fullName.lastName}</h1>
//     <p>{fullName.mail} </p>
//     <p>{fullName.phone}</p>
//     <input type="text" placeholder="Enter your name"  onChange={Callname} value={fullName.fname} name="fname"/> <br/><br/>
//     <input type="text" placeholder="Enter your last name"  onChange={Callname} value={fullName.lastName} name="lastName"/><br/><br/>
//     <input type="text" placeholder="Enter your mail" onChange={Callname} value={fullName.mail} name="mail"/> <br/><br/>
//     <input type="number" placeholder="Phone number" onChange={Callname} value={fullName.phone} name="phone"/> <br/><br/>
//     <button type="submit"> Submit </button>
//     </form>
//     </React.Fragment>
//   )
// }

// function App(){
//   return <Wish/>
// }

// function names(){
//   let name = "sayali k";
//   return name;
// }

// export default App;
// export {names};
// const heading = {
//   textAlign: "center",
//   textDecoration: "solid" ,
//   color: "brown",
//   fontFamily: "'Langar', cursive"
// };

// function App(){
//   return <h1 style={heading}> Calculator  </h1>
// }

// function add(x, y){
//   return (x+y)
// }

// function sub(x, y){
//   return (x-y)
// }

// function mul(x, y){
//   return (x*y)
// }
// function div(x, y){
//   return (x/y).toFixed(2);
// }

// ZXCVBNM,./123export default App;
// export {add, sub, mul, div};

const App = () =>{
  return(
    <React.Fragment>
    <h1 className="text-capitalize text-center text-dark m-5">Welcome to my gallery</h1>

    <div className="container">
  <div className="row">
    <div className="col-sm">
    <div class="card">
    <img src="https://picsum.photos/200/301" class="card-img-top" alt="random image" height="200px" />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    </div>
    <div className="col-sm">
    <div class="card">
    <img src="https://picsum.photos/201/301" class="card-img-top" alt="random image" height="200px"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    </div>
    <div className="col-sm">
    <div class="card">
    <img src="https://picsum.photos/202/301" class="card-img-top" alt="random image" height="200px"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    </div>
  </div>
</div>
</React.Fragment>
  );
}

export default App;