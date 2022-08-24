import axios from "axios";
import { useState } from "react";
import TodoForm from "./TodoForm";
function TodoContent(props) {
    const { fetchTodo } = props;
    const { id, title, completed } = props.todo;
    const [edit, setEdit] = useState(false)

    const handleClickDelete = async () => {
        try {
            await axios.delete('http://localhost:8080/todos/' + id);
            fetchTodo();
        } catch (err) {
            console.log(err);
        }
    }
    const setComplete = async () => {
        try {
             await axios.put(`http://localhost:8080/todos/${id}`, { title, completed: !completed });
            fetchTodo();
        } catch (err) {
            console.log(err);
        }
    }
    const handleSubmit = async (title)=>{
        try {
            await axios.put(`http://localhost:8080/todos/${id}`, { title, completed });
            fetchTodo();
            setEdit(false);
        } catch (err) {
            console.log(err);
        }
    }

    const onCancle = function (e) {
        setEdit(false);
      }


    return <>
        {edit ? <TodoForm 
        onSubmit={handleSubmit}
        onCancle={onCancle}
        initailValue={title}/> :
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