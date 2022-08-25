import { useContext, useState } from "react"
import { TodoContext } from "../contexts/TodoContext"
import TodoItem from "./TodoItem"

function TodoList(props) {
    const ctx = useContext(TodoContext);    
    const [edtingTodo,setEdtingTodo] = useState({});

    return <ul className="list-group my-2">
       {ctx.todos.map(item=><TodoItem key={item.id} todo={item} edtingTodo={edtingTodo} openEdit={()=>setEdtingTodo(item)} closeEdit={()=>setEdtingTodo({})}/>)}
    </ul>
}
export default TodoList