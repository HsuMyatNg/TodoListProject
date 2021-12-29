import InputForm from "./Components/InputForm";
import TodoList from "./Components/TodoList";
import EditButton from "./Components/UI/Button/EditButton"
import { Route, Routes } from "react-router-dom";
import TodoProvider from "./store/todoProvider";
const App=() =>{
  return (
    <TodoProvider>
      <InputForm/>
      <TodoList 
      />
       <Routes>
                    <Route path='/edit/:id' element={<EditButton/>}/>
                </Routes>
    </TodoProvider>
  );
}

export default App;
