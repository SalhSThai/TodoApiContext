import { useContext } from "react"
import { TodoContext } from "../contexts/TodoContext"
import TodoItem from "./TodoItem"

function TodoList() {
    const ctx = useContext(TodoContext);
    const {todos} = ctx.state;
    return <ul className="list-group my-2">
        {todos.map(item=><TodoItem key={item.id} todo={item} ></TodoItem>)}
    </ul>
}
export default TodoList