import { useContext } from 'react';
import { DELETE_TODO } from '../actions/todoAction';
import axios from '../config/axios'
import { TodoContext } from '../contexts/TodoContext';
function TodoContent(props) {
    const { id, title, completed } = props.todo;
    const ctx = useContext(TodoContext)


    const heandleClickDelete = function () {
        axios
            .delete('/todos/' + id)
            .then((res) => {
                ctx.dispatch({ type: DELETE_TODO, payload: { id } })
            }).catch((err) => { console.log(err); });
    };


    return <>
        <div className="d-flex align-items-center">
            <span className="flex-fill" role="button">
                {title}
            </span>
            <div className="btn-group">
                <button className="btn btn-outline-secondary" >
                    <i className="fa-solid fa-toggle-off" />
                </button>
                <button className="btn btn-outline-secondary" onClick={heandleClickDelete}>
                    <i className="fa-regular fa-trash-can" />
                </button>
            </div>
        </div>
    </>
}
export default TodoContent