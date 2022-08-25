import TodoContent from "./TodoContent"

function TodoItem(props) {
    const {id,title,completed} = props.todo;
    return <li className={`list-group-item p-3 callout-${completed?'success':'warning'}`}>
        <TodoContent todo={props.todo}/>
    </li>



}
export default TodoItem