import React from "react";
// import { TodoContext } from "../../../store/todoProvider";
import classes from "./DeleteButton.module.css";
const DeleteButton = props => {
    // const {deleteTodoHandler} = useContext(TodoContext);
    return(
        <button 
            className={classes["remove-button"]}  
            onClick= {props.onDelete}    
        >Delete</button>
    );
};
export default DeleteButton;