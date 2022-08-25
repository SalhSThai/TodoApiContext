import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";

function TodoForm(props){
    const {todo,closeEdit} = props;

const ctx = useContext(TodoContext);
const [title,setTitle] = useState(todo?.title||'');
const handleSubmitForm = (event)=>{
  event.preventDefault()
  if(todo){ctx.updateTodo({title,completed:todo.completed},todo.id);closeEdit()}
 else{ ctx.createTodo(title);}

};

    
    return (<form onSubmit={handleSubmitForm}>
          <div className="input-group">
            <input type="text" className="form-control" value={title} onChange={e=>setTitle(e.target.value)} />
            <button className="btn btn-primary">
              <i className="fa-solid fa-check" />
            </button>
            <button type="button" className="btn btn-outline-secondary" onClick={e=>{setTitle('');closeEdit?.()}}>
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
          {/* <small className="text-danger">Title is required.</small> */}
        </form>)
}

export default TodoForm;