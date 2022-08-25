
import TodoContent from "./TodoContent"
import TodoForm from "./TodoForm";

function TodoItem(props) {
    const {todo,openEdit,edtingTodo,closeEdit} = props;
    const {id,completed} = todo;

    return <li className={`list-group-item p-3 callout-${completed?'success':'warning'}`}>
        {edtingTodo.id===id?<TodoForm todo={todo} closeEdit={closeEdit} />:<TodoContent todo={todo} openEdit={openEdit}/>}
    </li>



}
export default TodoItem