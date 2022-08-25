import {useContext} from 'react';
import { TodoContext } from '../contexts/TodoContext';

function TodoContent({ todo: { completed, title,id } ,openEdit}) {

    const ctx = useContext(TodoContext);
    return <>
        <div className="d-flex align-items-center ">
            <span className="flex-fill" role="button" onClick={openEdit}>
                {title}
            </span>
            <div className="btn-group">
                <button className={`btn btn-${completed?'outline-success':'outline-warning'}`} onClick={()=>ctx.updateTodo({title,completed:!completed},id)}>
                    <i className={`fa-solid fa-toggle-${completed?'on':'off'}`} />
                </button>
                <button 
                className="btn btn-danger"
                onClick={()=> ctx.deleteTodo(id)}>
                    <i className="fa-regular fa-trash-can" />
                </button>
            </div>
        </div>
    </>
}
export default TodoContent