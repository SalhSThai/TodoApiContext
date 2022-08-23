import TodoForm from "./components/TodoForm";
import TodoContainer from "./components/TodoContainer";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [todos,setTodos] = useState([]);
  console.log("APP");
  useEffect(()=>{
axios.get('http://localhost:8080/todos')
.then(res => {console.log(res.data);
setTodos(res.data.todos)})
.catch(err=>console.log(err))
    return ()=>{};
  },[])
  return (
    <div className="container mt-5 mb-3" style={{ maxWidth: 576 }}>
      <div className="my-4">
        <TodoForm />
      </div>
      <TodoContainer />
    </div>
  );
} 

export default App;