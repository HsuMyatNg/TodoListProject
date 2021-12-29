import React, { useContext, useState} from "react";
import { TodoContext } from "../store/todoProvider";
import {v4 as uuid} from 'uuid';
import classes from "./InputForm.module.css";
const InputForm = (props) =>{
const {addTodoHandler} = useContext(TodoContext);
const [title, setTitle] = useState("");

const handleChange = (e) =>{
  setTitle (e.target.value);
};
const handleSubmit = (event)=> {
  const newTodo = {
    id: uuid(),
    title
  }
  event.preventDefault();
  addTodoHandler(newTodo) ;
  setTitle("");

};
    return(
        <React.Fragment>
           <form className= {classes["new-todo"]} onSubmit={handleSubmit}>
             <input 
            className={classes["new-todo-input"]}
            type="text"  
            name="title"
            value={title}
            placeholder="Task title" 
            onChange={handleChange}  
            />
          <div className={classes["button-container"]}>
            <button className={classes["add-button"]} type="submit"> Create Task</button>
          </div>        
            </form>
        </React.Fragment>
       
    );
};
export default InputForm;