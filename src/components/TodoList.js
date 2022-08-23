import TodoItem from "./TodoItem"

function TodoList(props) {
    const {todos,fetchTodo} = props
    return <ul className="list-group my-2  scroll-disable" style={{height:"60vh"}}>
        {todos.map((item)=>
        <TodoItem key={item.id} todo={item} fetchTodo={fetchTodo}/>
        )}
    </ul>
}
export default TodoList