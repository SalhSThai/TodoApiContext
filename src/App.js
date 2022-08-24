import TodoForm from "./components/TodoForm";
import TodoContainer from "./components/TodoContainer";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [total, setTotal] = useState(0);
  const [trigger,setTriggerFilter] = useState(false);
  // =============================================== function ZONE=================
  useEffect(() => {
    fetchTodo();
  }, [])

  const fetchTodo = async () => {
    try {
      const res = await axios.get('http://localhost:8080/todos');
      setTodos(res.data.todos);
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmitForm = async (title) => {
    try {
       await axios.post("http://localhost:8080/todos", { title, completed: false });
       setTriggerFilter(!trigger);
      // fetchTodo();

    } catch (err) { console.log(err); }
  }
  const searchTodos = async (value='',completed='',sort='',page='',limit='') => {
    try {
      const res = await axios.get(`http://localhost:8080/todos?title=${value}&completed=${completed}&sort=${sort}&page=${page}&limit=${limit}`);
      setTodos(res.data.todos);
      setTotal(res.data.total);
    } catch (err) {
      console.log(err);
    }
  };



  return (
    <div className="container mt-5 mb-3" style={{ maxWidth: 576 }}>
      <div className="my-4">
        <TodoForm fetchTodo={fetchTodo} onSubmit={handleSubmitForm} />
      </div>
      <TodoContainer todos={todos} fetchTodo={fetchTodo} searchTodos={searchTodos}  total={total} trigger={trigger}/>
    </div>
  );
}

export default App;