import React, { useContext } from "react";
import CartItem from "./CartItem";
import { TodoContext } from "../store/todoProvider";
import classes from "./TodoList.module.css";
import Card from "./UI/Card/Card";

const TodoList = () => {
    const {tasks,deleteTodoHandler,editTodoHandler,completeTodoHandler} = useContext(TodoContext);

    const initialState = tasks.map((task) => 
    <CartItem 
      key={task.id}
      id={task.id} 
      title={task.title} 
      isCompleted={task.isCompleted}
      onComplete={()=>completeTodoHandler(task.id)}
      onDelete= {()=>deleteTodoHandler(task.id)}
      onEdit= {()=>editTodoHandler(task.id)}
      
       />);
    return(
        <section className={classes.meals}>
            <Card>
              <ul className={classes["todo-wrapper"]}>{initialState}</ul>
            </Card>
        </section>
    );
};
export default TodoList;