import TodoForm from "./components/TodoForm";
import TodoContainer from "./components/TodoContainer";
import { useEffect, useReducer } from "react";
import axios from 'axios'

function reducer(state, action) {
  if (action.type === "LOAD_TODO") {
    return action.payload.todos;
    // {type: 'CREATE_TODO',payload:{todo: new object todo}}
  } else if (action.type === "CREATE_TODO") {
    //  return [newTodo,oldTodo]
    return [action.payload.todo,...state]
  }
}

function App() {
  const obj = useReducer(reducer, []);// return [currentState,dispatchFunction]
  //dispatchFunction(actionObj) actionsObj = {type}
  // Todo WEB App มี  Action ที่อาจจะเกิดขึ้น เช่น Create Todo,Delete Todo,Update Todo
  const [todos, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    axios.get('http://localhost:8080/todos')
      .then(res => {
        dispatch({ type: "LOAD_TODO", payload: { todos: res.data.todos } })
      }).catch(err => console.log(err))

  }, [])
const createTodo = (title)=>{
  axios.post('http://localhost:8080/todos',{title,completed:false})
  .then(res => {
    dispatch({type: "CREATE_TODO",payload:{todo:res.data.todo}})
  }).catch(err => console.log(err))

}



  return (
    <div className="container mt-5 mb-3" style={{ maxWidth: 576 }}>
      <div className="my-4">
        <TodoForm onSubmit={createTodo}/>
      </div>
      <TodoContainer />
    </div>
  );
}

export default App;