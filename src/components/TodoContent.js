import axios from "axios";
import { useState } from "react";
import TodoForm from "./TodoForm";
function TodoContent(props) {
    const { fetchTodo } = props;
    const { id, title, completed } = props.todo;
    const [edit, setEdit] = useState(false)

    const handleClickDelete = async () => {
        try {
            const res = await axios.delete('http://localhost:8080/todos/' + id);
            fetchTodo();
        } catch (err) {
            console.log(err);
        }
    }
    const setComplete = async () => {
        try {
            const res = await axios.put(`http://localhost:8080/todos/${id}`, { title, completed: !completed });
            fetchTodo();
        } catch (err) {
            console.log(err);
        }
    }


    return <>
        {edit ? <TodoForm mode={edit} item={props.todo} fetchTodo={fetchTodo} setEdit={setEdit} /> :
            <div className="d-flex align-items-center">
                <span className="flex-fill" role="button" onClick={() => setEdit(true)}>
                    {title}
                </span>
                <div className="btn-group">
                    <button
                        className="btn btn-outline-secondary"
                        onClick={setComplete}>
                        <i className={`fa-solid fa-toggle-${completed ? 'on' : 'off'}`} />
                    </button>
                    <button
                        className="btn btn-outline-secondary
                "onClick={handleClickDelete}>
                        <i className="fa-regular fa-trash-can" />
                    </button>
                </div>
            </div>}
    </>
}
export default TodoContent