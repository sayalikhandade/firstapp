import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
// import Fab from '@material-ui/core/Fab';
// import IconButton from '@material-ui/core/IconButton';
//import { makeStyles } from '@material-ui/core/styles';
import Clock from 'react-digital-clock';

// const useStyles = makeStyles((theme) => ({
//     fab: {
//       margin: theme.spacing(2),
//     },
//     absolute: {
//       position: 'absolute',
//       bottom: theme.spacing(2),
//       right: theme.spacing(3),
//     },
//   }));
const IncDec = () =>{
    let [increment, setIncrement] = useState(0);
    // const classes = useStyles();
    
const IncrementVal = (event) =>{
    console.log("Incremented");
    setIncrement((increment +1));
}

const DecrementVal = (event) =>{
    console.log("Decremented");
    if(increment == 0){
        alert("OOPS!! 🙁 you are on zero");
    }
    else{
    setIncrement((increment -1));
    }
}


    return(
        <React.Fragment>
            <Clock style="color: red"/>
            <h1>{increment} </h1>
            <div> 
               <button onClick={IncrementVal}> <Tooltip title="Add" aria-label="add">
                 <AddIcon />
              
             </Tooltip>
             </button> 
            
            <button onClick={DecrementVal}> <Tooltip title="Delete">
           
              <DeleteIcon />
          </Tooltip>  
          </button> 
         </div>
        </React.Fragment>
    );
}

export default IncDec;