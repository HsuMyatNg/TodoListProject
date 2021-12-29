import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate} from "react-router-dom";
import { TodoContext } from "../../../store/todoProvider";
import classes from "./EditButton.module.css";
const EditButton = props => {
const params= useParams();
const navigate = useNavigate();
const [editTitle, setEditTitle] = useState({
    id: '',
    title:''
});
const {tasks,editTodoHandler} = useContext(TodoContext);
const editTodoId = params.id;
useEffect(()=>{
    const taskId = editTodoId;
    const editTitle= tasks.find(task => task.id === taskId)
    setEditTitle(editTitle)
},[editTodoId,tasks])
const handleChange = (e) =>{
  setEditTitle({...editTitle, [e.target.name]:e.target.value})
};
const handleSubmit = (event)=> {
  editTodoHandler(editTitle);

  navigate('/');
};
    return(
        <div>
            <form className= {classes["new-todo"]} onSubmit={handleSubmit}>
             <input 
            className={classes["new-todo-input"]}
            type="text"  
            name="title"
            value={editTitle.title}
            onChange={handleChange}  
            />
          <div className={classes["button-container"]}>
            <button className={classes["add-button"]} type="submit"> Update Task</button>
          </div>        
            </form>
        </div>
    )
};
export default EditButton;