import TodoContent from "./TodoContent"

function TodoItem(props) {
const {todo,fetchTodo} = props;
    return <li className={`list-group-item p-3 callout-${todo.completed? 'success':'warning'}`}>
        <TodoContent todo={todo} fetchTodo={fetchTodo}/>
    </li>



}
export default TodoItem