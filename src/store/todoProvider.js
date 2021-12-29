import React,{createContext, useReducer} from "react";
const initialState ={
    tasks: [
        {
            id: "i1",
            title: "Buy Milk",
            isCompleted: false
        },
        {
            id: "i2",
            title: "Nik",
            isCompleted: false
        },
        {
            id: "i3",
            title: "MongoDB Working",
            isCompleted: false
        },
        {
            id: "i4",
            title: "Listening Language",
            isCompleted: false   
        },
    ],
};
export const TodoContext = createContext(initialState);
const todoReducer= (state = [], action)=> {
    switch (action.type){
        case 'ADD':
            return{
               tasks: [...state.tasks,action.payload],
            
              };
        case 'DELETE':
            return{
                tasks: state.tasks.filter(task => task.id !== action.id)
                };    
        case 'EDIT':
            const editTask = action.payload;
            const editTasks = state.tasks.map((task) => {
                if (task.id === editTask.id){
                    return editTask;
                }
                return task;
            });
            return {
                tasks: editTasks,
            }
        case "COMPLETE":
            return{
                tasks: state.tasks.map((task) => 
                task.id === action.payload ? {...task, isCompleted: !task.isCompleted} : task),
            }
        default:
            break;
    }
};

const TodoProvider = (props)=>{

 const [state, dispatch] = useReducer(todoReducer,initialState);

 const addTodoHandler  =(task) =>{
     dispatch({
         type: "ADD",
         payload: task
     });
 };
 const deleteTodoHandler  =(id) =>{
    dispatch({
        type: "DELETE",
        id: id
    });
};
const editTodoHandler  =(task) =>{
    dispatch({
        type: "EDIT",
        payload: task
    });
};
const completeTodoHandler  =(id) =>{
    dispatch({
        type: "COMPLETE",
        payload: id
    });
};
  return(
        <TodoContext.Provider 
            value= {{
                ...state,
                addTodoHandler,
                completeTodoHandler,
                deleteTodoHandler,
                editTodoHandler
            }}   
        >
            {props.children}
        </TodoContext.Provider>
    );
};
export default TodoProvider;