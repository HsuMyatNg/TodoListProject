import React from "react";
import classes from "./CompleteButton.module.css";
const CompleteButton = props => {
    return(
        <div>
             {props.isCompleted ? (
                 
            <button 
            className={classes["incomplete-button"]}  
            onClick={props.onComplete}              
        >InComplete</button>
            
        ):(
            <button 
            className={classes["complete-button"]}  
            onClick={props.onComplete}              
        >Complete</button>
        )}
        </div>
       
       
    );
};
export default CompleteButton;