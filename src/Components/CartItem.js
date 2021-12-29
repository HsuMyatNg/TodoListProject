import React from "react";
import { Link } from "react-router-dom";
import CompleteButton from "./UI/Button/CompleteButton";
import DeleteButton from "./UI/Button/DeleteButton";
import classes from "./CartItem.module.css";




const CartItem = (props) => {
  
    return(
         <div className={classes["todo-item"]}>   
            <h3>{props.title} </h3>                                                              
            <div className={classes["button-container"]}>
                <CompleteButton 
                isCompleted ={props.isCompleted}
                onComplete={props.onComplete} />                
                <DeleteButton onDelete={props.onDelete}/>
                <Link to={`/edit/${props.id}`} className={classes["update-button"]}>Edit</Link>
               
            </div>       
         </div>
    );
   
};

export default CartItem;